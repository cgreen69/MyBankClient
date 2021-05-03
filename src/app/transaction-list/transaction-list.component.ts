import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
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
  public hasTransactions : Boolean = false;
  public loading : Boolean = false;

  constructor(private bankingService: BankingService) { }

  ngOnInit(): void {

   this.loadTransactions();

  }

  public setActiveTransaction(trans:TransactionType) {

    this.ActiveTransaction = trans;
    
  }

  public loadTransactions() {

    this.loading = true;

    this.transactions$ = this.bankingService.getTransactions().pipe(tap(d=> {
      this.loading = false;
      this.hasTransactions = d.length > 0;
    }
      ),
      shareReplay(1));

  }

}
