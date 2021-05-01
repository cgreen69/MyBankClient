import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BankingService } from './banking.service';

describe('BankingService', () => {
  let service: BankingService;

  beforeEach(() => {
    

    TestBed.configureTestingModule({
      
      imports: [
        HttpClientTestingModule, BrowserAnimationsModule
      ],

    })
    .compileComponents();

    service = TestBed.inject(BankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
