import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicsComponent } from './basics.component';



describe('BasicsComponent', () => {
  let component: BasicsComponent;
  let fixture: ComponentFixture<BasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('lightState should change when button is clicked', () => {
    component.switchToggle();
    expect(component.lightState).withContext('should change to true').toBeTruthy();
    expect(component.message).toBe('ON');
    component.switchToggle();
    expect(component.lightState).withContext('should change to false').toBeFalsy();
    expect(component.message).toBe('OFF');
  });

});
