import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Transaction } from 'src/app/models/transaction/transaction';



@Injectable({
  providedIn: 'root',
})
export class DbService {
  private dbInstance!: SQLiteObject;

  constructor(private sqlite: SQLite) {}

  async initializeDb() {
    return this.sqlite
      .create({ name: 'data.db', location: 'default' })
      .then((db) => {
        this.dbInstance = db;
        return db.executeSql(
          `CREATE TABLE IF NOT EXISTS TRANSACTIONS (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description VARCHAR(255) NOT NULL,
            type VARCHAR(50) NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            contact VARCHAR(100) NOT NULL,
            isReturned BOOLEAN NOT NULL
          )`,
          []
        );
      })
      .catch((e) => console.error('Error initializing database:', e));
  }

  async getAllTransactions(): Promise<Transaction[]> {
    let transactions: Transaction[] = [];
    return this.dbInstance
      .executeSql('SELECT * FROM TRANSACTIONS', [])
      .then((res) => {
        for (let i = 0; i < res.rows.length; i++) {
          let row = res.rows.item(i);
          transactions.push({
            id: row.id,
            type: row.type,
            amount: row.amount,
            date: new Date(row.date), // Convert SQLite date string to JS Date
            time: row.time,
            contact: row.contact,
            isReturned: row.isReturned === 1, // Convert SQLite boolean to JS boolean
          });
        }
        return transactions;
      })
      .catch((e) => {
        console.error('Error fetching transactions:', e);
        return [];
      });
  }

  async getTransactionById(id: number): Promise<Transaction | null> {
    return this.dbInstance
      .executeSql('SELECT * FROM TRANSACTIONS WHERE id = ?', [id])
      .then((res) => {
        if (res.rows.length > 0) {
          let row = res.rows.item(0);
          return {
            id: row.id,
            type: row.type,
            amount: row.amount,
            date: new Date(row.date),
            time: row.time,
            contact: row.contact,
            isReturned: row.isReturned === 1,
          };
        }
        return null;
      })
      .catch((e) => {
        console.error('Error fetching transaction by ID:', e);
        return null;
      });
  }

  async getTransactionsByType(type: string): Promise<Transaction[]> {
    let transactions: Transaction[] = [];
    return this.dbInstance
      .executeSql('SELECT * FROM TRANSACTIONS WHERE type = ?', [type])
      .then((res) => {
        for (let i = 0; i < res.rows.length; i++) {
          let row = res.rows.item(i);
          transactions.push({
            id: row.id,
            type: row.type,
            amount: row.amount,
            date: new Date(row.date),
            time: row.time,
            contact: row.contact,
            isReturned: row.isReturned === 1,
          });
        }
        return transactions;
      })
      .catch((e) => {
        console.error('Error fetching transactions by type:', e);
        return [];
      });
  }

  async getTransactionsByDate(date: Date): Promise<Transaction[]> {
    let transactions: Transaction[] = [];
    const formattedDate = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    return this.dbInstance
      .executeSql('SELECT * FROM TRANSACTIONS WHERE date = ?', [formattedDate])
      .then((res) => {
        for (let i = 0; i < res.rows.length; i++) {
          let row = res.rows.item(i);
          transactions.push({
            id: row.id,
            type: row.type,
            amount: row.amount,
            date: new Date(row.date),
            time: row.time,
            contact: row.contact,
            isReturned: row.isReturned === 1,
          });
        }
        return transactions;
      })
      .catch((e) => {
        console.error('Error fetching transactions by date:', e);
        return [];
      });
  }

  async getTransactionsByTime(time: string): Promise<Transaction[]> {
    let transactions: Transaction[] = [];
    return this.dbInstance
      .executeSql('SELECT * FROM TRANSACTIONS WHERE time = ?', [time])
      .then((res) => {
        for (let i = 0; i < res.rows.length; i++) {
          let row = res.rows.item(i);
          transactions.push({
            id: row.id,
            type: row.type,
            amount: row.amount,
            date: new Date(row.date),
            time: row.time,
            contact: row.contact,
            isReturned: row.isReturned === 1,
          });
        }
        return transactions;
      })
      .catch((e) => {
        console.error('Error fetching transactions by time:', e);
        return [];
      });
  }

  async addTransaction(transaction: Transaction) {
    return this.dbInstance
      .executeSql(
        `INSERT INTO TRANSACTIONS (type, amount, date, time, contact, isReturned) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          transaction.type,
          transaction.amount,
          transaction.date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
          transaction.time,
          transaction.contact,
          transaction.isReturned ? 1 : 0, // Convert JS boolean to SQLite boolean
        ]
      )
      .then(() => this.getAllTransactions())
      .catch((e) => {
        console.error('Error adding transaction:', e);
        return [];
      });
  }

  async updateTransaction(transaction: Transaction) {
    return this.dbInstance
      .executeSql(
        `UPDATE TRANSACTIONS 
         SET type = ?, 
             amount = ?, 
             date = ?, 
             time = ?, 
             contact = ?, 
             isReturned = ? 
         WHERE id = ?`,
        [
          transaction.type,
          transaction.amount,
          transaction.date.toISOString().split('T')[0],
          transaction.time,
          transaction.contact,
          transaction.isReturned ? 1 : 0,
          transaction.id,
        ]
      )
      .then(() => this.getAllTransactions())
      .catch((e) => {
        console.error('Error updating transaction:', e);
        return [];
      });
  }

  async deleteTransaction(id: number) {
    return this.dbInstance
      .executeSql('DELETE FROM TRANSACTIONS WHERE id = ?', [id])
      .then(() => this.getAllTransactions())
      .catch((e) => {
        console.error('Error deleting transaction:', e);
        return [];
      });
  }
}
