import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionComponent } from './transaction.component';
import { FormsModule } from '@angular/forms';
import { BankingService } from '../services/banking.service';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      imports: [
        HttpClientTestingModule, BrowserAnimationsModule,FormsModule
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

});
