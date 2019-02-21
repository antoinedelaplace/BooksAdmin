import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaristesComponent } from './scenaristes.component';

describe('ScenaristesComponent', () => {
  let component: ScenaristesComponent;
  let fixture: ComponentFixture<ScenaristesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaristesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaristesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
