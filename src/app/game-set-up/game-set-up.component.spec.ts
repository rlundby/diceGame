import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSetUpComponent } from './game-set-up.component';

describe('GameSetUpComponent', () => {
  let component: GameSetUpComponent;
  let fixture: ComponentFixture<GameSetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSetUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
