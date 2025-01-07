import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit, AfterContentChecked {

  bannerConfig: SwiperOptions;
  cards: any[] = [];



  
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartData: ChartConfiguration['data'] = {
    labels: [], // Types d'opérations (revenus, dépenses, prêts, etc.)
    datasets: [
      {
        data: [], // Montants agrégés pour chaque type
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // Bar chart for weekly data
  public weeklyBarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Jours de la semaine',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Montants cumulés',
        },
      },
    },
  };

  public weeklyBarChartType: ChartType = 'bar';

  public weeklyBarChartData: ChartConfiguration['data'] = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'], // Jours de la semaine
    datasets: [
      {
        label: 'Revenus',
        data: [], // Revenus hebdomadaires
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Dépenses',
        data: [], // Dépenses hebdomadaires
        backgroundColor: '#FF6384',
      },
    ],
  };

  // Line chart for hourly data (daily visualization)
  public dailyLineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Heures de la journée',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Montants',
        },
      },
    },
  };

  public dailyLineChartType: ChartType = 'line';

  public dailyLineChartData: ChartConfiguration['data'] = {
    labels: [], // Heures de la journée
    datasets: [
      {
        label: 'Revenus',
        data: [], // Revenus par heure
        borderColor: '#36A2EB',
        fill: false,
      },
      {
        label: 'Dépenses',
        data: [], // Dépenses par heure
        borderColor: '#FF6384',
        fill: false,
      },
    ],
  };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadDoughnutChartData();
    this.loadWeeklyBarChartData();
    this.loadDailyLineChartData();
  }

  private async loadDoughnutChartData() {
    try {
      const transactions = await this.transactionService.getAllTransactions();
      const aggregatedData = this.aggregateData(transactions);

      this.doughnutChartData.labels = Object.keys(aggregatedData);
      this.doughnutChartData.datasets[0].data = Object.values(aggregatedData);
    } catch (error) {
      console.error('Error loading doughnut chart data:', error);
    }
  }

  private async loadWeeklyBarChartData() {
    try {
      const transactions = await this.transactionService.getAllTransactions();
      const weeklyData = this.calculateWeeklyData(transactions);

      this.weeklyBarChartData.datasets[0].data = weeklyData.revenues;
      this.weeklyBarChartData.datasets[1].data = weeklyData.expenses;
    } catch (error) {
      console.error('Error loading weekly bar chart data:', error);
    }
  }

  private async loadDailyLineChartData() {
    try {
      const transactions = await this.transactionService.getAllTransactions();
      const dailyData = this.calculateDailyData(transactions);

      this.dailyLineChartData.labels = Object.keys(dailyData.hours);
      this.dailyLineChartData.datasets[0].data = dailyData.revenues;
      this.dailyLineChartData.datasets[1].data = dailyData.expenses;
    } catch (error) {
      console.error('Error loading daily line chart data:', error);
    }
  }

  private aggregateData(transactions: any[]): { [key: string]: number } {
    const summary: { [key: string]: number } = {};

    transactions.forEach((transaction) => {
      const type = transaction.type;
      if (!summary[type]) {
        summary[type] = 0;
      }
      summary[type] += transaction.amount;
    });

    return summary;
  }

  private calculateWeeklyData(transactions: any[]) {
    const revenues = Array(7).fill(0); // Montants des revenus pour chaque jour de la semaine
    const expenses = Array(7).fill(0); // Montants des dépenses pour chaque jour de la semaine

    const currentWeek = this.getCurrentWeek();

    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date);
      const dayIndex = currentWeek.findIndex(
        (day) =>
          day.toDateString() === transactionDate.toDateString()
      );

      if (dayIndex !== -1) {
        if (transaction.type === 'income') {
          revenues[dayIndex] += transaction.amount;
        } else if (transaction.type === 'expense') {
          expenses[dayIndex] += transaction.amount;
        }
      }
    });

    return { revenues, expenses };
  }

  private calculateDailyData(transactions: any[]) {
    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    const revenues = Array(24).fill(0);
    const expenses = Array(24).fill(0);

    const today = new Date().toDateString();

    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date).toDateString();
      const transactionHour = new Date(transaction.date).getHours();

      if (transactionDate === today) {
        if (transaction.type === 'income') {
          revenues[transactionHour] += transaction.amount;
        } else if (transaction.type === 'expense') {
          expenses[transactionHour] += transaction.amount;
        }
      }
    });

    return { hours, revenues, expenses };
  }

  private getCurrentWeek() {
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 1));
    const week = [];

    for (let i = 0; i < 7; i++) {
      week.push(new Date(startOfWeek));
      startOfWeek.setDate(startOfWeek.getDate() + 1);
    }

    return week;
  }



  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
      pagination: { clickable: true }
    };
  }

}
