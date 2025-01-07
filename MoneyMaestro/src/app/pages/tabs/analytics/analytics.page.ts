import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  form: FormGroup;  // Form group for the form control
  doughnutChart: any;
  transactions: any[] = [];  // Array to store transactions
  isDataAvailable: boolean = true;  // Flag to track data availability

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group
    this.form = this.formBuilder.group({
      operationType: [''], // For selecting expenditure, inflow, etc.
      dataPeriod: [''],     // For selecting day or week
    });

    // Mock transaction data (for testing purposes)
    this.transactions = [
      { date: '2025-01-01', type: 'expenditure', amount: 100 },
      { date: '2025-01-01', type: 'inflow', amount: 200 },
      { date: '2025-01-02', type: 'expenditure', amount: 50 },
      { date: '2025-01-02', type: 'inflow', amount: 150 },
      { date: '2025-01-03', type: 'borrowing', amount: 500 },
      { date: '2025-01-03', type: 'loan', amount: 300 },
      { date: '2025-01-04', type: 'saving', amount: 200 },
      { date: '2025-01-04', type: 'inflow', amount: 100 },
    ];

    // Generate data for the doughnut chart based on selected values
    this.updateChart();
  }

  // Method to update the chart based on form control selections
  async updateChart() {
    const selectedOperationType = this.form.get('operationType')?.value;
    const selectedDataPeriod = this.form.get('dataPeriod')?.value;

    let filteredTransactions = this.transactions;

    // Filter transactions by operation type (expenditure, inflow, etc.)
    if (selectedOperationType) {
      filteredTransactions = filteredTransactions.filter(
        (txn) => txn.type === selectedOperationType
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
  groupByWeek(transactions: any[]): { labels: string[]; data: number[] } {
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
  groupByDay(transactions: any[]): { labels: string[]; data: number[] } {
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
      type: 'doughnut', // Change the type to 'doughnut'
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
