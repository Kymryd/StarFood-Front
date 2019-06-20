import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product.ComponentComponent } from './product.component.component';

describe('Product.ComponentComponent', () => {
  let component: Product.ComponentComponent;
  let fixture: ComponentFixture<Product.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
