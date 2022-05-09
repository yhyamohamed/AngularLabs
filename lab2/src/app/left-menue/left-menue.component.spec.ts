import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenueComponent } from './left-menue.component';

describe('LeftMenueComponent', () => {
  let component: LeftMenueComponent;
  let fixture: ComponentFixture<LeftMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
