import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction/transaction'; // Import Transaction model
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  form: FormGroup; // Form group for the form control
  doughnutChart: any;
  transactions: Transaction[] = []; // Updated to use Transaction model
  isDataAvailable: boolean = true; // Flag to track data availability

  constructor(private formBuilder: FormBuilder, private dbService: TransactionService) {}

  ngOnInit() {
    // Initialize the form group
    this.form = this.formBuilder.group({
      operationType: ['Top-up'], // For selecting expenditure, inflow, etc.
      dataPeriod: ['day'], // For selecting day or week
      week: ['current'], // For selecting current or previous week
      day: ['current'], // For selecting current or previous day
    });

    // Updated Mock Data
this.transactions = [
  {
    id: 1,
    description: 'Groceries',
    type: 'Spend',
    amount: 100,
    date: new Date('2025-01-08'), // Within the current week
    time: '14:30',
    contact: 'Supermarket',
    isReturned: false,
  },
  {
    id: 2,
    description: 'Salary',
    type: 'Top-up',
    amount: 2000,
    date: new Date('2025-01-05'), // Within the current week
    time: '09:00',
    contact: 'Employer',
    isReturned: false,
  },
  {
    id: 3,
    description: 'Loan Payment',
    type: 'Loan',
    amount: 500,
    date: new Date('2025-01-07'), // Within the current week
    time: '10:00',
    contact: 'Bank',
    isReturned: true,
  },
  {
    id: 4,
    description: 'Savings',
    type: 'Save',
    amount: 300,
    date: new Date('2025-01-03'), // Outside the current week
    time: '12:00',
    contact: 'Savings Account',
    isReturned: false,
  },
  {
    id: 5,
    description: 'Transport',
    type: 'Spend',
    amount: 50,
    date: new Date('2025-01-08'), // Within the current week
    time: '08:00',
    contact: 'Taxi',
    isReturned: false,
  },
  {
    id: 6,
    description: 'Groceries',
    type: 'Spend',
    amount: 100,
    date: new Date(), // Today's date
    time: '14:30',
    contact: 'Supermarket',
    isReturned: false,
  },
  {
    id: 7,
    description: 'Salary',
    type: 'Top-up',
    amount: 2000,
    date: new Date(), // Today's date
    time: '09:00',
    contact: 'Employer',
    isReturned: false,
  },
  {
    id: 8,
    description: 'Loan Payment',
    type: 'Loan',
    amount: 500,
    date: new Date(), // Today's date
    time: '10:00',
    contact: 'Bank',
    isReturned: true,
  },
  {
    id: 9,
    description: 'Savings',
    type: 'Save',
    amount: 300,
    date: new Date(), // Outside today
    time: '12:00',
    contact: 'Savings Account',
    isReturned: false,
  },
  {
    id: 10,
    description: 'Transport',
    type: 'Spend',
    amount: 50,
    date: new Date('2025-01-08'), // Outside today
    time: '08:00',
    contact: 'Taxi',
    isReturned: false,
  },
  {
    id: 11,
    description: 'Groceries',
    type: 'Spend',
    amount: 100,
    date: new Date('2025-01-07'), // Tuesday
    time: '14:30',
    contact: 'Supermarket',
    isReturned: false,
  },
  {
    id: 12,
    description: 'Salary',
    type: 'Top-up',
    amount: 2000,
    date: new Date('2025-01-05'), // Sunday
    time: '09:00',
    contact: 'Employer',
    isReturned: false,
  },
  {
    id: 13,
    description: 'Transport',
    type: 'Spend',
    amount: 50,
    date: new Date('2025-01-07'), // Tuesday
    time: '08:00',
    contact: 'Taxi',
    isReturned: false,
  },
  {
    id: 14,
    description: 'Loan Payment',
    type: 'Loan',
    amount: 500,
    date: new Date('2025-01-08'), // Wednesday
    time: '10:00',
    contact: 'Bank',
    isReturned: true,
  },
  {
    id: 15,
    description: 'Savings',
    type: 'Save',
    amount: 300,
    date: new Date('2025-01-09'), // Thursday
    time: '12:00',
    contact: 'Savings Account',
    isReturned: false,
  },
  {
    id: 16,
    description: 'Dining Out',
    type: 'Spend',
    amount: 80,
    date: new Date('2025-01-09'), // Thursday
    time: '19:00',
    contact: 'Restaurant',
    isReturned: false,
  },
  {
    id: 17,
    description: 'Bonus',
    type: 'Top-up',
    amount: 500,
    date: new Date('2025-01-10'), // Friday
    time: '10:00',
    contact: 'Employer',
    isReturned: false,
  },
  {
    id: 21,
    description: 'Groceries',
    type: 'Spend',
    amount: 100,
    date: new Date(), // Today's date
    time: '08:30',
    contact: 'Supermarket',
    isReturned: false,
  },
  {
    id: 22,
    description: 'Salary',
    type: 'Top-up',
    amount: 2000,
    date: new Date(), // Today's date
    time: '09:15',
    contact: 'Employer',
    isReturned: false,
  },
  {
    id: 23,
    description: 'Transport',
    type: 'Spend',
    amount: 50,
    date: new Date(), // Today's date
    time: '09:45',
    contact: 'Taxi',
    isReturned: false,
  },
  {
    id: 24,
    description: 'Loan Payment',
    type: 'Loan',
    amount: 500,
    date: new Date(), // Today's date
    time: '10:00',
    contact: 'Bank',
    isReturned: true,
  },
  {
    id: 20,
    description: 'Savings',
    type: 'Save',
    amount: 300,
    date: new Date(), // Today's date
    time: '11:30',
    contact: 'Savings Account',
    isReturned: false,
  },
  {
    id: 19,
    description: 'Dining Out',
    type: 'Spend',
    amount: 80,
    date: new Date(), // Today's date
    time: '12:15',
    contact: 'Restaurant',
    isReturned: false,
  },
  {
    id: 18,
    description: 'Bonus',
    type: 'Top-up',
    amount: 500,
    date: new Date(), // Today's date
    time: '14:00',
    contact: 'Employer',
    isReturned: false,
  },
];


    this.loadTransactions();

    // Generate data for the doughnut chart based on selected values
    this.updateChart();
  }

  // Load or refresh data when the page enters
  ionViewWillEnter() {
    this.loadTransactions();
    this.updateChart();
  }


  // Fetch transactions from the DbService
  async loadTransactions() {
    try {
      this.transactions = await this.dbService.getAllTransactions();
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  }
  
  async updateChart() {
    const selectedOperationType = this.form.get('operationType')?.value;
    const selectedDataPeriod = this.form.get('dataPeriod')?.value;
    const selectedWeek = this.form.get('week')?.value;
    const selectedDay = this.form.get('day')?.value;

    let filteredTransactions = this.transactions;
  
    // Filter transactions by operation type
    if (selectedOperationType) {
      filteredTransactions = filteredTransactions.filter(
        (txn) => txn.type.toLowerCase() === selectedOperationType.toLowerCase()
      );
    }
  
    // Group transactions and update chart
    let groupedData;
    if (selectedDataPeriod === 'week') {
      groupedData = this.groupByTypePerDayForWeek(filteredTransactions, selectedWeek);
    } else if (selectedDataPeriod === 'day') {
      groupedData = this.groupByTypePerHourForDay(filteredTransactions, selectedDay);
    } else {
      groupedData = { labels: [], data: [] }; // Default to empty if no period selected
    }
  
    // Update data availability and chart
    if (groupedData.data.length === 0) {
      this.isDataAvailable = false;
    } else {
      this.isDataAvailable = true;
      this.createChart(groupedData.labels, groupedData.data);
    }
  }
  
  
  // Group transactions by type for the current week
groupByTypeForWeek(transactions: Transaction[]): { labels: string[]; data: number[] } {
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())); // Sunday of the current week

  const grouped: { [key: string]: number } = {};

  transactions.forEach((txn) => {
    const txnDate = new Date(txn.date);
    if (txnDate >= startOfWeek) {
      if (!grouped[txn.type]) grouped[txn.type] = 0;
      grouped[txn.type] += txn.amount;
    }
  });

  return {
    labels: Object.keys(grouped), // Transaction types (e.g., Spend, Save)
    data: Object.values(grouped), // Total amounts for each type
  };
}

// Group transactions by type per day for the selected week
groupByTypePerDayForWeek(transactions: Transaction[], week: 'current' | 'previous'): { labels: string[]; data: number[] } {
  const currentDate = new Date();
  let startOfWeek, endOfWeek;

  if (week === 'current') {
    // Calculate start and end of the current week
    startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())); // Sunday
    endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday
  } else {
    // Calculate start and end of the previous week
    startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() - 7)); // Previous Sunday
    endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Previous Saturday
  }

  const grouped: { [key: string]: number } = {};

  transactions.forEach((txn) => {
    const txnDate = new Date(txn.date);
    if (txnDate >= startOfWeek && txnDate <= endOfWeek) {
      const dateKey = txnDate.toISOString().split('T')[0]; // Day as YYYY-MM-DD
      const typeKey = txn.type;

      const key = `${dateKey} (${typeKey})`; // Combine day and type
      if (!grouped[key]) grouped[key] = 0;
      grouped[key] += txn.amount;
    }
  });

  return {
    labels: Object.keys(grouped), // Labels: "Day (Transaction Type)"
    data: Object.values(grouped), // Data: Total amounts
  };
}

// Group transactions by type per hour for the selected day
groupByTypePerHourForDay(transactions: Transaction[], day: 'current' | 'previous'): { labels: string[]; data: number[] } {
  const currentDate = new Date();
  let selectedDate;

  if (day === 'current') {
    // Set selectedDate to the current day
    selectedDate = new Date(currentDate.toISOString().split('T')[0]); // Strip time to get just the date
  } else {
    // Set selectedDate to the previous day
    selectedDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
    selectedDate = new Date(selectedDate.toISOString().split('T')[0]); // Strip time
  }

  const grouped: { [key: string]: number } = {};

  transactions.forEach((txn) => {
    const txnDate = new Date(txn.date);
    const txnHour = txn.time.split(':')[0]; // Get hour from time string

    if (txnDate.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]) {
      const key = `${txnHour}:00 (${txn.type})`; // Combine hour and type for the label
      if (!grouped[key]) grouped[key] = 0;
      grouped[key] += txn.amount;
    }
  });

  return {
    labels: Object.keys(grouped), // Labels: "Hour (Transaction Type)"
    data: Object.values(grouped), // Data: Total amounts
  };
}


// Group transactions by type for the current day
groupByTypeForDay(transactions: Transaction[]): { labels: string[]; data: number[] } {
  const currentDate = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format

  const grouped: { [key: string]: number } = {};

  transactions.forEach((txn) => {
    const txnDate = new Date(txn.date).toISOString().split('T')[0];
    if (txnDate === currentDate) {
      if (!grouped[txn.type]) grouped[txn.type] = 0;
      grouped[txn.type] += txn.amount;
    }
  });

  return {
    labels: Object.keys(grouped), // Transaction types (e.g., Spend, Save)
    data: Object.values(grouped), // Total amounts for each type
  };
}

  // Group transactions by day
  groupByDay(transactions: Transaction[]): { labels: string[]; data: number[] } {
    const grouped: { [key: string]: number } = {};

    transactions.forEach((txn) => {
      const date = new Date(txn.date).toISOString().split('T')[0]; // Get date as string (YYYY-MM-DD)
      if (!grouped[date]) grouped[date] = 0;
      grouped[date] += txn.amount;
    });

    return {
      labels: Object.keys(grouped), // Dates
      data: Object.values(grouped), // Total amounts for each day
    };
  }

  // Create the doughnut chart
  createChart(labels: string[], data: number[]) {
    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;

    if (this.doughnutChart) {
      this.doughnutChart.destroy(); // Destroy the existing chart before creating a new one
    }

    this.doughnutChart = new Chart(ctx, {
      type: 'doughnut', // Doughnut chart type
      data: {
        labels: labels, // Labels for the segments
        datasets: [
          {
            data: data, // Amounts for the segments
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 99, 132, 0.6)',
              'rgba(255, 162, 132, 0.6)',
              'rgba(255, 99, 64, 0.6)',
              'rgba(255, 102, 132, 0.6)',
              'rgba(75, 99, 132, 0.6)',
            ], // Segment colors
            borderColor: 'rgba(255, 255, 255, 0.8)', // Border color for segments
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
}
