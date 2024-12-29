
export interface Transaction {
    id: number;
    type: string;
    amount: number;
    date: Date;
    time: string; // SQLite doesn't directly support JavaScript Time; use string
    contact: string;
    isReturned: boolean;
  }
