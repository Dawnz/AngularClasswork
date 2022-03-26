import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmzAdsComponent } from './amz-ads.component';

describe('AmzAdsComponent', () => {
  let component: AmzAdsComponent;
  let fixture: ComponentFixture<AmzAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmzAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmzAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
