import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDetailsComponent } from './t-details.component';

describe('TDetailsComponent', () => {
  let component: TDetailsComponent;
  let fixture: ComponentFixture<TDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
