import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction/transaction'; // Import Transaction model

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group
    this.form = this.formBuilder.group({
      operationType: [''], // For selecting expenditure, inflow, etc.
      dataPeriod: [''], // For selecting day or week
    });

    // Mock transaction data (for testing purposes)
    this.transactions = [
      {
        id: 1,
        description: 'Groceries',
        type: 'Spend',
        amount: 100,
        date: new Date('2025-01-01'),
        time: '14:30',
        contact: 'Supermarket',
        isReturned: false,
      },
      {
        id: 2,
        description: 'Salary',
        type: 'Top-up',
        amount: 2000,
        date: new Date('2025-01-01'),
        time: '09:00',
        contact: 'Employer',
        isReturned: false,
      },
      {
        id: 3,
        description: 'Loan Payment',
        type: 'Loan',
        amount: 500,
        date: new Date('2025-01-02'),
        time: '10:00',
        contact: 'Bank',
        isReturned: true,
      },
      {
        id: 4,
        description: 'Savings',
        type: 'Save',
        amount: 300,
        date: new Date('2025-01-03'),
        time: '12:00',
        contact: 'Savings Account',
        isReturned: false,
      },
    ];

    // Generate data for the doughnut chart based on selected values
    this.updateChart();
  }

  // Method to update the chart based on form control selections
  async updateChart() {
    const selectedOperationType = this.form.get('operationType')?.value;
    const selectedDataPeriod = this.form.get('dataPeriod')?.value;

    let filteredTransactions = this.transactions;

    // Filter transactions by operation type
    if (selectedOperationType) {
      filteredTransactions = filteredTransactions.filter(
        (txn) => txn.type.toLowerCase() === selectedOperationType.toLowerCase()
      );
    }

    // Group transactions by day or week
    let groupedData;
    if (selectedDataPeriod === 'week') {
      groupedData = this.groupByWeek(filteredTransactions);
    } else {
      groupedData = this.groupByDay(filteredTransactions);
    }

    // Check if there's any data to display
    if (groupedData.data.length === 0) {
      console.log('No data available for the selected filters');
      this.isDataAvailable = false; // Set flag to false for no data
    } else {
      this.isDataAvailable = true; // Set flag to true if there is data
      this.createChart(groupedData.labels, groupedData.data);
    }
  }

  // Group transactions by week
  groupByWeek(transactions: Transaction[]): { labels: string[]; data: number[] } {
    const grouped: { [key: string]: number } = {};

    transactions.forEach((txn) => {
      const date = new Date(txn.date);
      const weekStart = new Date(date.setDate(date.getDate() - date.getDay())); // First day of the week
      const key = weekStart.toISOString().split('T')[0]; // YYYY-MM-DD

      if (!grouped[key]) grouped[key] = 0;
      grouped[key] += txn.amount;
    });

    return {
      labels: Object.keys(grouped), // Week start dates
      data: Object.values(grouped), // Total amounts for each week
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
