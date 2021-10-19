import { TestBed } from '@angular/core/testing';
import { ValueService } from '../01-services/value.service';

import { MasterService } from './master.service';

// pruebas a servicios con dependencias
describe('MasterService', () => {
  let service: MasterService;
  let masterService: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getValue should return real value from the real service ', () => {
    // No conviene ya que se usa el servicio real
    expect(service.getValue()).toBe('real value');
  });

  it('getValue should return faked value from a fake service ', () => {
    // No conviene ya que se tiende a repetir mucho código
    const fake = { getValue: () => 'fake value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('getValue should return stubbed value from the spy service ', () => {
    // Es el más conveniente ya que permite pruebas mucho más específicas
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);
    masterService = new MasterService(valueServiceSpy)
    expect(masterService.getValue()).toBe(stubValue);
    // expect(valueServiceSpy.getValue.calls.count()).toBe(1);
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });
});
