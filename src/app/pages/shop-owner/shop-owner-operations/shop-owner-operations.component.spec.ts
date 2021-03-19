import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOwnerOperationsComponent } from './shop-owner-operations.component';

describe('ShopOwnerOperationsComponent', () => {
  let component: ShopOwnerOperationsComponent;
  let fixture: ComponentFixture<ShopOwnerOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopOwnerOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOwnerOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
