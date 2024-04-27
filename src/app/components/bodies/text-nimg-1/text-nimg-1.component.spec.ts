import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNimg1Component } from './text-nimg-1.component';

describe('TextNimg1Component', () => {
  let component: TextNimg1Component;
  let fixture: ComponentFixture<TextNimg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextNimg1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextNimg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
