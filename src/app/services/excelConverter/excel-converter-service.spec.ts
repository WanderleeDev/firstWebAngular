import { TestBed } from '@angular/core/testing';

import { ExcelConverterServiceTsService } from './excel-converter-service';

describe('ExcelConverterServiceTsService', () => {
  let service: ExcelConverterServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelConverterServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
