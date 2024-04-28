import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAreaComponent } from './questions-area.component';

describe('QuestionsAreaComponent', () => {
  let component: QuestionsAreaComponent;
  let fixture: ComponentFixture<QuestionsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
