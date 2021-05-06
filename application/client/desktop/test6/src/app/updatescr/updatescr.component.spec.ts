import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatescrComponent } from './updatescr.component';

describe('UpdatescrComponent', () => {
  let component: UpdatescrComponent;
  let fixture: ComponentFixture<UpdatescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});