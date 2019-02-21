import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessinateursComponent } from './dessinateurs.component';

describe('DessinateursComponent', () => {
  let component: DessinateursComponent;
  let fixture: ComponentFixture<DessinateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessinateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessinateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
