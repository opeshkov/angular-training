import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSizesListComponent } from './file-sizes-list.component';

describe('FileSizesListComponent', () => {
  let component: FileSizesListComponent;
  let fixture: ComponentFixture<FileSizesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSizesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSizesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
