import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsContainerComponent } from './manage-products-container.component';

describe('ManageProductsContainerComponent', () => {
  let component: ManageProductsContainerComponent;
  let fixture: ComponentFixture<ManageProductsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
