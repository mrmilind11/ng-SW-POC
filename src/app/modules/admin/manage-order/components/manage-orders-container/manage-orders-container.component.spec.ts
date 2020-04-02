import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrdersContainerComponent } from './manage-orders-container.component';

describe('ManageOrdersContainerComponent', () => {
  let component: ManageOrdersContainerComponent;
  let fixture: ComponentFixture<ManageOrdersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrdersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrdersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
