import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNimg2Component } from './text-nimg-2.component';

describe('TextNimg2Component', () => {
  let component: TextNimg2Component;
  let fixture: ComponentFixture<TextNimg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextNimg2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextNimg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
