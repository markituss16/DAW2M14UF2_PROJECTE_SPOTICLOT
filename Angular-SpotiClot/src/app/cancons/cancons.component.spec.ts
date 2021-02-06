import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanconsComponent } from './cancons.component';

describe('CanconsComponent', () => {
  let component: CanconsComponent;
  let fixture: ComponentFixture<CanconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
