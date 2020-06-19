import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopKCComponent } from './shop-kc.component';

describe('ShopKCComponent', () => {
  let component: ShopKCComponent;
  let fixture: ComponentFixture<ShopKCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopKCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopKCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
