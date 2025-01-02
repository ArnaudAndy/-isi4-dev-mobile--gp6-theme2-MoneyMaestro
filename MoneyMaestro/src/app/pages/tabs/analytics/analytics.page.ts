import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {

  weeklyChart: any;
  dailyChart: any;
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  async ngOnInit() {
    // Récupérer toutes les transactions
    this.transactions = await this.transactionService.getAllTransactions();

    // Générer les données pour les graphiques
    const weeklyData = this.groupByWeek(this.transactions);
    const dailyData = this.groupByHour(this.transactions);

    // Créer les graphiques
    this.createChart('weeklyChart', 'Transactions Hebdomadaires', weeklyData.labels, weeklyData.data);
    this.createChart('dailyChart', 'Transactions Journalières (par heure)', dailyData.labels, dailyData.data);
  }

  // Regrouper les transactions par semaine
  groupByWeek(transactions: any[]): { labels: string[]; data: number[] } {
    const grouped: { [key: string]: number } = {};

    transactions.forEach((txn) => {
      const date = new Date(txn.date);
      const weekStart = new Date(date.setDate(date.getDate() - date.getDay())); // Premier jour de la semaine
      const key = weekStart.toISOString().split('T')[0]; // YYYY-MM-DD

      if (!grouped[key]) grouped[key] = 0;
      grouped[key] += txn.amount;
    });

    return {
      labels: Object.keys(grouped), // Dates de début de chaque semaine
      data: Object.values(grouped), // Totaux des montants
    };
  }

  // Regrouper les transactions par heure
  groupByHour(transactions: any[]): { labels: string[]; data: number[] } {
    const grouped: { [key: string]: number } = {};

    transactions.forEach((txn) => {
      const hour = txn.time.split(':')[0]; // Extraire l'heure
      if (!grouped[hour]) grouped[hour] = 0;
      grouped[hour] += txn.amount;
    });

    return {
      labels: Object.keys(grouped).map((hour) => `${hour}:00`), // Heures formatées (e.g., "14:00")
      data: Object.values(grouped), // Totaux des montants
    };
  }

  // Créer un graphique
  createChart(chartId: string, label: string, labels: string[], data: number[]) {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Périodes',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Montant (en FCFA)',
            },
          },
        },
      },
    });
  }
}
