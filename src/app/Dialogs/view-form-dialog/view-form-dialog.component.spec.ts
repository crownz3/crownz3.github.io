import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormDialogComponent } from './view-form-dialog.component';

describe('ViewFormDialogComponent', () => {
  let component: ViewFormDialogComponent;
  let fixture: ComponentFixture<ViewFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
