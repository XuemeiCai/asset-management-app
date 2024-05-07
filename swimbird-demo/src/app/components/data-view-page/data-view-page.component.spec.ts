import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewPageComponent } from './data-view-page.component';

describe('DataViewPageComponent', () => {
  let component: DataViewPageComponent;
  let fixture: ComponentFixture<DataViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
