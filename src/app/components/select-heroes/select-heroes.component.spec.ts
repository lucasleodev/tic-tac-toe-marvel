import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHeroesComponent } from './select-heroes.component';

describe('SelectHeroesComponent', () => {
  let component: SelectHeroesComponent;
  let fixture: ComponentFixture<SelectHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
