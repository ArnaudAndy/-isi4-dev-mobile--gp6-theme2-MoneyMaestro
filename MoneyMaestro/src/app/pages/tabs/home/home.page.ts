import { AfterContentChecked, Component, OnInit } from "@angular/core";
import { Balance } from "src/app/models/balance/balance";
import { Transaction } from "src/app/models/transaction/transaction";
import { BalanceService } from "src/app/services/balance/balance.service";
import { TransactionService } from "src/app/services/transaction/transaction.service";
import SwiperCore, { SwiperOptions, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit, AfterContentChecked {
  spendingLevel: string = "";
  recommendationMessage: string = ""; // New property for recommendation
  transactions: Transaction[] = [];
  balances: Balance[] = [];
  accounts: any[] = [];
  bannerConfig: SwiperOptions;
  featureConfig: SwiperOptions;
  features: any[] = [];

  constructor(
    private dbService: TransactionService,
    private balanceService: BalanceService
  ) {}

  ngOnInit() {
    this.balances = [
      {
        id: 1,
        date: new Date(),
        time: "12:00:00",
        total: 200000,
        saved: 10000,
        loaned: 0,
        borrowed: 0,
        spent: 0,
        received: 0,
      },
    ];
    this.accounts = [{ id: 1, acc_no: " ", balance: "200000" }];
    this.features = [
      {
        id: 1,
        color: "tertiary",
        icon: "paper-plane",
        name: "Loan",
        path: "loan",
      },
      { id: 2, color: "white", icon: "send", name: "Borrow", path: "borrow" },
      {
        id: 3,
        color: "success",
        icon: "add-circle",
        name: "Top-up",
        path: "top-up",
      },
      { id: 4, color: "light", icon: "newspaper", name: "Save", path: "save" },
      { id: 5, color: "warning", icon: "card", name: "Spend", path: "spend" },
    ];

    this.loadTransactions();
    this.localLoadBalances();
    this.compareMonthlyBalances();
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      pagination: { clickable: true },
    };
    this.featureConfig = {
      slidesPerView: 3.5,
    };
  }

  async loadTransactions() {
    try {
      this.transactions = await this.dbService.getAllTransactions();
    } catch (error) {
      console.error("Error loading transactions:", error);
    }
  }

  async loadBalances() {
    try {
      this.balances = await this.balanceService.getAllBalances();
    } catch (error) {
      console.error("Error loading balances:", error);
    }
  }

  localLoadBalances() {
    const storedBalances = localStorage.getItem("balances");
    this.balances = [
      {
        id: 1,
        date: new Date(),
        time: new Date().toTimeString().split(" ")[0],
        total: 0,
        saved: 0,
        loaned: 0,
        borrowed: 0,
        spent: 0,
        received: 0,
      },
    ];
    if (storedBalances) {
      this.balances = JSON.parse(storedBalances);
    }
  }

  // doRefresh(event: any) {
  //   setTimeout(() => {
  //     // Refresh data logic here
  //     this.localLoadBalances();
  //     this.loadTransactions();
  //     event.target.complete(); // Stops the refresher
  //   }, 1000);
  // }

  // Load or refresh data when the page enters
  ionViewWillEnter() {
    this.localLoadBalances();
    this.loadTransactions();
  }

  compareMonthlyBalances() {
    if (new Date().getDate() === 1) {
      if (this.balances.length < 2) {
        console.warn("Not enough balance data to compare.");
        this.recommendationMessage =
          "No spending data available to provide recommendations.";
        return;
      }
      const previousMonthBalance = this.getOldestPreviousMonthBalance();
      const currentBalance = this.balances[this.balances.length - 1].total;

      if (!previousMonthBalance) {
        console.warn("No balance data for the previous month.");
        return;
      }

      const spending = previousMonthBalance.total - currentBalance;
      const spendingPercentage = (spending / previousMonthBalance.total) * 100;

      if (spendingPercentage <= 30) {
        this.spendingLevel = "Low";
        this.recommendationMessage =
          "Great job! Consider saving more this month.";
      } else if (spendingPercentage <= 60) {
        this.spendingLevel = "Medium";
        this.recommendationMessage =
          "Your spending is moderate. Try to limit unnecessary expenses.";
      } else if (spendingPercentage <= 90) {
        this.spendingLevel = "Important";
        this.recommendationMessage =
          "You spent a lot last month. Focus on essential expenses and avoid overspending.";
      } else {
        this.spendingLevel = "Critical";
        this.recommendationMessage =
          "Your spending is very high. Consider reviewing your budget and cutting down on non-essential items.";
      }

      console.log(`Spending Level: ${this.spendingLevel}`);
      console.log(`Recommendation: ${this.recommendationMessage}`);
    }
  }

  getOldestPreviousMonthBalance(): Balance | null {
    if (!this.balances || this.balances.length === 0) {
      console.warn("No balance data available.");
      return null;
    }

    const currentDate = new Date();
    const previousMonth =
      currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1; // Handle January case
    const previousMonthYear =
      currentDate.getMonth() === 0
        ? currentDate.getFullYear() - 1
        : currentDate.getFullYear();

    // Filter balances to find all entries from the previous month
    const previousMonthBalances = this.balances.filter((balance) => {
      const balanceDate = new Date(balance.date);
      return (
        balanceDate.getMonth() === previousMonth &&
        balanceDate.getFullYear() === previousMonthYear
      );
    });

    if (previousMonthBalances.length === 0) {
      console.warn("No balances found for the previous month.");
      return null;
    }

    // Find the oldest balance from the previous month
    previousMonthBalances.sort(
      (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate()
    );
    previousMonthBalances.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return previousMonthBalances[0];
  }

  async viewTransaction(transactionId: number) {
    console.log("View transaction:", transactionId);
    // Navigate to a transaction detail page
  }
}
