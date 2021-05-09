import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionComponent } from './transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankingService } from '../services/banking.service';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      imports: [
        HttpClientTestingModule, BrowserAnimationsModule,ReactiveFormsModule
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('is service injected',() => {

    let fixture = TestBed.createComponent(TransactionComponent);

    let service = fixture.debugElement.injector.get(BankingService)

    expect(service).toBeInstanceOf(BankingService)

  })

  it('Valid amount accepted',() => {

    let fixture = TestBed.createComponent(TransactionComponent);

    component = fixture.componentInstance;
    
    let amount = component.transactionform.controls['amount'];
    
    amount.setValue("100");

    expect(amount.hasError('required')).toBeFalse();

    expect(amount.hasError('pattern')).toBeFalse();

    expect(component.transactionform.valid).toBeTrue();

  })

  

  it('Invalid amount rejected',() => {

    let fixture = TestBed.createComponent(TransactionComponent);

    component = fixture.componentInstance;
    
    let amount = component.transactionform.controls['amount'];
    
    amount.setValue("100.33333");

    expect(amount.hasError('pattern')).toBeTrue();

    expect(component.transactionform.valid).toBeFalse();
  })

});
