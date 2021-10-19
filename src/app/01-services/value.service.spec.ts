import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getValue should return a string: real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('getObservableValue should return an Observable<string>: observable value', (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('getPromiseValue should return a Promise<string>: promise value', (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });
});
