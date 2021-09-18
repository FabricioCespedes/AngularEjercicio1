import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InaComponent } from './ina.component';

describe('InaComponent', () => {
  let component: InaComponent;
  let fixture: ComponentFixture<InaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
