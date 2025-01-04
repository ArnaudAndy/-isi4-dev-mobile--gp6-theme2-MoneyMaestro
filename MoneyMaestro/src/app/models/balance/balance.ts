export interface Balance {
    id?: number; // Primary key
    date: Date; // Date of the balance
    time: string; // Time of the balance in HH:mm:ss format
    total: number; // Total balance amount
    saved: number; // Amount saved
    loaned: number; // Amount loaned out
    borrowed: number; // Amount borrowed
    spent: number; // Amount spent
    received: number; // Amount received
  }
  