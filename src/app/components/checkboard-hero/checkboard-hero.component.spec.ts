import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboardHeroComponent } from './checkboard-hero.component';

describe('CheckboardHeroComponent', () => {
  let component: CheckboardHeroComponent;
  let fixture: ComponentFixture<CheckboardHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboardHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboardHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
