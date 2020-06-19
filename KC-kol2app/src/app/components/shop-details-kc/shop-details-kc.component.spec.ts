import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsKCComponent } from './shop-details-kc.component';

describe('ShopDetailsKCComponent', () => {
  let component: ShopDetailsKCComponent;
  let fixture: ComponentFixture<ShopDetailsKCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsKCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsKCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
