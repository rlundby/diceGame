import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayersComponent } from './create-players.component';

describe('CreatePlayersComponent', () => {
  let component: CreatePlayersComponent;
  let fixture: ComponentFixture<CreatePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
