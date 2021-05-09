import { Component, Input, OnInit } from '@angular/core';
import { BankingService } from '../services/banking.service';
import { Output, EventEmitter } from '@angular/core';
import {TransactionType} from '../types/transaction-type';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';

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
    "HKD",
    "JPY",
    "USD"
  ];

  
  public selectedCurrency:string = "GBP"

  public transactionform: FormGroup 
  
  constructor(private bankingService: BankingService, private fb: FormBuilder) { 

    this.transactionform = this.fb.group({
      amount: ["",[Validators.required,Validators.max(50000),Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      selectedCurrency: ["GBP"],
    });
    
  }

  ngOnInit(): void {
  

  } 

  public processTransaction = () => {

    this.bankingService.process(this.transactionform.get('amount').value,this.transactionform.get('selectedCurrency').value,this.transactionType).subscribe(_=> {
      
      this.transactionCompleted.emit(true);
      
    }
    

    );
    

  }

  public cancelTransaction = () => {

    this.transactionCancelled.emit(true);
  }

}
