import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Transaction } from '../types/transaction';
import { TransactionType } from '../types/transaction-type';

@Injectable({
  providedIn: 'root',
})
export class BankingService {
  public process = (amount: number, ccy: string, type: TransactionType) => {


    let url = `${environment.apiUrl}/process`;

    let body = { "amount": amount, "ccy": ccy, "transactiontype" : type };

    return this.httpClient.post(url, body).pipe(
      catchError(this.handleError)
    )


  }


  constructor(
    private readonly httpClient: HttpClient,
  ) { }


  getTransactions(): Observable<Transaction[]> {
    let url = `${environment.apiUrl}/transactions`;
    return this.httpClient.get<Transaction[]>(url).pipe(
      catchError(this.handleError)

    );
  }

  handleError(error) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      // client-side error

      errorMessage = `Error: ${error.error.message}`;

    } else {

      // server-side error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    //  window.alert(errorMessage);

    return throwError(errorMessage);

  }
  
}

