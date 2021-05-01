import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { BankingService } from '../services/banking.service';
import { Transaction } from '../types/transaction';
import { TransactionType } from '../types/transaction-type';

@Component({
  selector: 'app-transactions',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})

export class TransactionListComponent implements OnInit {


  public transactions$ :Observable<Transaction[]>; 
  public TransactionType = TransactionType;
  public ActiveTransaction : TransactionType = null;

  constructor(private bankingService: BankingService) { }

  ngOnInit(): void {

   this.loadTransactions();

  }

  public setActiveTransaction(trans:TransactionType) {

    this.ActiveTransaction = trans;
    
  }

  public loadTransactions() {

    this.transactions$ = this.bankingService.getTransactions().pipe(shareReplay(1));

  }

}
