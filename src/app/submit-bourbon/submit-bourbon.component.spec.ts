import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBourbonComponent } from './submit-bourbon.component';

describe('SubmitBourbonComponent', () => {
  let component: SubmitBourbonComponent;
  let fixture: ComponentFixture<SubmitBourbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitBourbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitBourbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
