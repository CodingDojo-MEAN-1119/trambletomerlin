import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyCreateComponent } from './toy-create.component';

describe('ToyCreateComponent', () => {
  let component: ToyCreateComponent;
  let fixture: ComponentFixture<ToyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
