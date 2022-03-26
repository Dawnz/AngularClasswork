import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopDealsComponent } from './pop-deals.component';

describe('PopDealsComponent', () => {
  let component: PopDealsComponent;
  let fixture: ComponentFixture<PopDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
