import { Component, Input, OnInit } from '@angular/core';
import { BankingService } from '../services/banking.service';
import { Output, EventEmitter } from '@angular/core';
import {TransactionType} from '../types/transaction-type';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Output() transactionCompleted = new EventEmitter<Boolean>();
  @Output() transactionCancelled = new EventEmitter<Boolean>();
  @Input() transactionType : TransactionType
  
  currencies = [
    "GBP",
    "EUR",
    "USD"
  ];

  
  public selectedCurrency:string = "GBP"
  
  public amount:number = 0

  constructor(private bankingService: BankingService) { }

  ngOnInit(): void {
    
  }

  public processTransaction = (amount:number, ccy:string) => {

    this.bankingService.process(amount,ccy,this.transactionType).subscribe(_=> {
      
      this.transactionCompleted.emit(true);
      
    }
    

    );
    

  }

  public cancelTransaction = () => {

    this.transactionCancelled.emit(true);
  }

}
