import { TestBed } from '@angular/core/testing';

import { ConvertorService } from './convertor.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ConverterService', () => {
  let service: ConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
