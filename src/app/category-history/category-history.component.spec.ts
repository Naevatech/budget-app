import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHistoryComponent } from './category-history.component';

describe('CategoryHistoryComponent', () => {
  let component: CategoryHistoryComponent;
  let fixture: ComponentFixture<CategoryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
