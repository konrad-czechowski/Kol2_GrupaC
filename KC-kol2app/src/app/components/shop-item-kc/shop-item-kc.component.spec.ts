import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemKCComponent } from './shop-item-kc.component';

describe('ShopItemKCComponent', () => {
  let component: ShopItemKCComponent;
  let fixture: ComponentFixture<ShopItemKCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemKCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemKCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
