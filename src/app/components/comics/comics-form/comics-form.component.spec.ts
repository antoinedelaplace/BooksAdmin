import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsFormComponent } from './comics-form.component';

describe('ComicsFormsComponent', () => {
  let component: ComicsFormComponent;
  let fixture: ComponentFixture<ComicsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
