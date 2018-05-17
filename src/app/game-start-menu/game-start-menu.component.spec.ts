import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStartMenuComponent } from './game-start-menu.component';

describe('GameStartMenuComponent', () => {
  let component: GameStartMenuComponent;
  let fixture: ComponentFixture<GameStartMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStartMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
