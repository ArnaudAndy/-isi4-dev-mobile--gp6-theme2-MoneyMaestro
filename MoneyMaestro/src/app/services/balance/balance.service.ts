import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Balance } from "src/app/models/balance/balance";
import { Transaction } from "src/app/models/transaction/transaction";

@Injectable({
  providedIn: "root",
})
export class BalanceService {
  private dbInstance!: SQLiteObject;

  constructor(private sqlite: SQLite) {}

  async getAllBalances() {
    let balances: Balance[] = [];
    return this.sqlite
      .create({ name: "balance.db", location: "default" })
      .then((db) => {
        this.dbInstance = db;
        db.executeSql(
          `CREATE TABLE IF NOT EXISTS BALANCES (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date DATE NOT NULL,
            time TIME NOT NULL,
            total DECIMAL(10, 2) NOT NULL,
            saved DECIMAL(10, 2) NOT NULL,
            loaned DECIMAL(10, 2) NOT NULL,
            borrowed DECIMAL(10, 2) NOT NULL,
            spent DECIMAL(10, 2) NOT NULL,
            received DECIMAL(10, 2) NOT NULL
          )`,
          []
        ).catch((e) => console.error("Error creating BALANCES table: ", e));
        balances = this.getAllRecords();
      })
      .catch()
      .then((e) => {
        console.error("Error initializing database: ", e);
        if (balances.length === 0) {
          balances = [
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
          this.addBalance(balances[0]);
        }
        return balances;
      });
  }

  private getAllRecords(): Balance[] {
    let balances: Balance[] = [];
    this.dbInstance
      .executeSql("SELECT * FROM BALANCES", [])
      .then((res) => {
        for (let i = 0; i < res.rows.length; i++) {
          let row = res.rows.item(i);
          balances.push({
            id: row.id,
            date: new Date(row.date),
            time: row.time,
            total: row.total,
            saved: row.saved,
            loaned: row.loaned,
            borrowed: row.borrowed,
            spent: row.spent,
            received: row.received,
          });
        }
      })
      .catch((e) => {
        console.error("Error fetching balances: ", e);
      });
    return balances;
  }

  async getBalanceById(id: number) {
    return this.sqlite
      .create({ name: "balance.db", location: "default" })
      .then((db) => {
        this.dbInstance = db;
        return db.executeSql("SELECT * FROM BALANCES WHERE id = ?", [id]);
      })
      .then((res) => {
        if (res.rows.length > 0) {
          let row = res.rows.item(0);
          return {
            id: row.id,
            date: new Date(row.date),
            time: row.time,
            total: row.total,
            saved: row.saved,
            loaned: row.loaned,
            borrowed: row.borrowed,
            spent: row.spent,
            received: row.received,
          };
        } else {
          return null;
        }
      })
      .catch((e) => {
        console.error("Error fetching balance by ID: ", e);
        return null;
      });
  }

  async addBalance(balance: Balance) {
    this.dbInstance
      .executeSql(
        `INSERT INTO BALANCES (date, time, total, saved, loaned, borrowed, spent, received) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          balance.date.toISOString().split("T")[0],
          balance.time,
          balance.total,
          balance.saved,
          balance.loaned,
          balance.borrowed,
          balance.spent,
          balance.received,
        ]
      )
      .catch((e) => console.error("Error adding balance: ", e));
    return this.getAllRecords();
  }
  async addBalanceWithTransaction(t: Transaction) {
    let balances: Balance[] = []
    this.getAllBalances().then((b) => {
      balances = b;
    });

    let balance: Balance = balances[balances.length - 1];
    balance.date = t.date;
    balance.time = t.time;

    if (t.type === "Loan") {
      balance.loaned += t.amount;
      balance.total -= t.amount;
    }

    if (t.type === "Borrow") {
      balance.borrowed += t.amount;
      balance.total += t.amount;
    }

    if (t.type === "Spend") {
      balance.spent += t.amount;
      balance.total -= t.amount;
    }

    if (t.type === "Save") {
      balance.saved += t.amount;
      balance.total -= t.amount;
    }

    if (t.type === "Top-up") {
      balance.received += t.amount;
      balance.total += t.amount;
    }

    this.dbInstance
      .executeSql(
        `INSERT INTO BALANCES (date, time, total, saved, loaned, borrowed, spent, received) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          balance.date.toISOString().split("T")[0],
          balance.time,
          balance.total,
          balance.saved,
          balance.loaned,
          balance.borrowed,
          balance.spent,
          balance.received,
        ]
      )
      .catch((e) => console.error("Error adding balance: ", e));
    return this.getAllRecords();
  }

  async updateBalance(balance: Balance) {
    this.dbInstance
      .executeSql(
        `UPDATE BALANCES 
         SET date = ?, 
             time = ?, 
             total = ?, 
             saved = ?, 
             loaned = ?, 
             borrowed = ?, 
             spent = ?, 
             received = ? 
         WHERE id = ?`,
        [
          balance.date.toISOString().split("T")[0],
          balance.time,
          balance.total,
          balance.saved,
          balance.loaned,
          balance.borrowed,
          balance.spent,
          balance.received,
          balance.id,
        ]
      )
      .catch((e) => console.error("Error updating balance: ", e));
    return this.getAllRecords();
  }

  async deleteBalance(id: number) {
    this.dbInstance
      .executeSql("DELETE FROM BALANCES WHERE id = ?", [id])
      .catch((e) => console.error("Error deleting balance: ", e));
    return this.getAllRecords();
  }
}
