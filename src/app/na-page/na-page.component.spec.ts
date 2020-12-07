import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaPageComponent } from './na-page.component';

describe('NaPageComponent', () => {
  let component: NaPageComponent;
  let fixture: ComponentFixture<NaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
