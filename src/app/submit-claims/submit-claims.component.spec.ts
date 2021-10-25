import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitClaimsComponent } from './submit-claims.component';

describe('SubmitClaimsComponent', () => {
  let component: SubmitClaimsComponent;
  let fixture: ComponentFixture<SubmitClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
