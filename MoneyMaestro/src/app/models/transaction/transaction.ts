
export interface Transaction {
    id: number;
    type: string;
    amount: number;
    date: Date;
    contact: string;
    isReturned: boolean;
}
