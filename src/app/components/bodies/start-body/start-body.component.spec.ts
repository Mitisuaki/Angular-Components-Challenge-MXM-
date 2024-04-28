import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBodyComponent } from './start-body.component';

describe('StartBodyComponent', () => {
  let component: StartBodyComponent;
  let fixture: ComponentFixture<StartBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
