import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Transaction } from "src/app/models/transaction/transaction";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  private dbInstance!: SQLiteObject;

  constructor(private sqlite: SQLite) {}

  async getAllTransactions() {
    let transactions: Transaction[] = [];
    return this.sqlite
      .create({ name: "data.db", location: "default" })
      .then((db) => {
        this.dbInstance = db;
        db.executeSql(
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
        ).catch((e) => console.error("Error fetching transactions: ", e));
        transactions = this.getAllRecords();
      })
      .catch()
      .then((e) => {
        console.error("Error fetching transactions:", e);
        return transactions;
      });
  }

  private getAllRecords(): Transaction[] {
    let transactions: Transaction[] = [];
    this.dbInstance
      .executeSql("SELECT * FROM TRANSACTIONS", [])
      .then((res) => {
        for (let i = 0; i < res.rows.length; i++) {
          let row = res.rows.item(i);
          transactions.push({
            id: row.id,
            description: row.description,
            type: row.type,
            amount: row.amount,
            date: new Date(row.date), // Convert SQLite date string to JS Date
            time: row.time,
            contact: row.contact,
            isReturned: row.isReturned === 1, // Convert SQLite boolean to JS boolean
          });
        }
      })
      .catch((e) => {
        console.error("Error fetching transactions:", e);
      });
    return transactions;
  }

  async getTransactionbyId(id: number) {
    return this.sqlite
      .create({ name: "data.db", location: "default" })
      .then((db) => {
        this.dbInstance = db;
        // Query the COURSES table for the course with the given code
        return db.executeSql(`SELECT * FROM TRANSACTIONS WHERE id = ?`, [id]);
      })
      .then((resultSet) => {
        if (resultSet.rows.length > 0) {
          // If a course is found, return it as a CourseInterface object
          let row = resultSet.rows.item(0);
          return {
            id: row.id,
            description: row.description,
            type: row.type,
            amount: row.amount,
            date: new Date(row.date),
            time: row.time,
            contact: row.contact,
            isReturned: row.isReturned === 1,
          };
        } else {
          // If no course is found, return null
          return null;
        }
      })
      .catch((error) => {
        console.error("Error in getTransactionbyId:", error);
        return null;
      });
  }
  async getTransactionbyType(type: string) {
    let transactions: Transaction[] = [];
    return this.sqlite
      .create({ name: "data.db", location: "default" })
      .then((db) => {
        this.dbInstance = db;
        // Query the COURSES table for the course with the given code
        return db.executeSql(`SELECT * FROM TRANSACTIONS WHERE type = ?`, [
          type,
        ]);
      })
      .then((resultSet) => {
        if (resultSet.rows.length > 0) {
          // If a course is found, return it as a CourseInterface object
          for (let i = 0; i < resultSet.rows.length; i++) {
            let row = resultSet.rows.item(i);
            transactions.push({
              id: row.id,
              description: row.description,
              type: row.type,
              amount: row.amount,
              date: new Date(row.date), // Convert SQLite date string to JS Date
              time: row.time,
              contact: row.contact,
              isReturned: row.isReturned === 1, // Convert SQLite boolean to JS boolean
            });
          }
          return transactions;
        } else {
          // If no course is found, return null
          return transactions;
        }
      })
      .catch((error) => {
        console.error("Error in getTransactionbyId:", error);
        return transactions;
      });
  }
  async getTransactionbyDate(date: Date) {
    let transactions: Transaction[] = [];
    const formattedDate = date.toISOString().split("T")[0];
    return this.sqlite
      .create({ name: "data.db", location: "default" })
      .then((db) => {
        this.dbInstance = db;
        // Query the COURSES table for the course with the given code
        return db.executeSql(`SELECT * FROM TRANSACTIONS WHERE date = ?`, [
          formattedDate,
        ]);
      })
      .then((resultSet) => {
        if (resultSet.rows.length > 0) {
          for (let i = 0; i < resultSet.rows.length; i++) {
            let row = resultSet.rows.item(i);
            transactions.push({
              id: row.id,
              description: row.description,
              type: row.type,
              amount: row.amount,
              date: new Date(row.date), // Convert SQLite date string to JS Date
              time: row.time,
              contact: row.contact,
              isReturned: row.isReturned === 1, // Convert SQLite boolean to JS boolean
            });
          }
        } else {
          // If no course is found, return null
          return transactions;
        }
      })
      .catch((error) => {
        console.error("Error in getTransactionbyId:", error);
        return transactions;
      });
  }
  async getTransactionbyTime(time: string) {
    return this.sqlite
      .create({ name: "data.db", location: "default" })
      .then((db) => {
        this.dbInstance = db;
        // Query the COURSES table for the course with the given code
        return db.executeSql(`SELECT * FROM TRANSACTIONS WHERE time = ?`, [
          time,
        ]);
      })
      .then((resultSet) => {
        if (resultSet.rows.length > 0) {
          // If a course is found, return it as a CourseInterface object
          let row = resultSet.rows.item(0);
          return {
            id: row.id,
            description: row.description,
            type: row.type,
            amount: row.amount,
            date: new Date(row.date),
            time: row.time,
            contact: row.contact,
            isReturned: row.isReturned === 1,
          };
        } else {
          // If no course is found, return null
          return null;
        }
      })
      .catch((error) => {
        console.error("Error in getTransactionbyId:", error);
        return null;
      });
  }

  async addTransaction(transaction: Transaction) {
    this.dbInstance
      .executeSql(
        `INSERT INTO TRANSACTIONS (description, type, amount, date, time, contact, isReturned) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          transaction.description,
          transaction.type,
          transaction.amount,
          transaction.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
          transaction.time,
          transaction.contact,
          transaction.isReturned ? 1 : 0, // Convert JS boolean to SQLite boolean
        ]
      )
      .catch((e) => console.log(e));
    return this.getAllRecords();
  }

  async updateTransaction(transaction: Transaction) {
    this.dbInstance
      .executeSql(
        `UPDATE TRANSACTIONS 
         SET description = ?,
             type = ?, 
             amount = ?, 
             date = ?, 
             time = ?, 
             contact = ?, 
             isReturned = ? 
         WHERE id = ?`,
        [
          transaction.description,
          transaction.type,
          transaction.amount,
          transaction.date.toISOString().split("T")[0],
          transaction.time,
          transaction.contact,
          transaction.isReturned ? 1 : 0,
          transaction.id,
        ]
      )
      .catch((e) => console.log(e));
    return this.getAllRecords();
  }

  async deleteTransaction(id: number) {
    this.dbInstance
      .executeSql("DELETE FROM TRANSACTIONS WHERE id = ?", [id])
      .catch((e) => console.log(e));
    return this.getAllRecords();
  }
}
