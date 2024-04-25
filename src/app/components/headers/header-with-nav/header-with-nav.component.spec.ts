import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithNavComponent } from './header-with-nav.component';

describe('HeaderWithNavComponent', () => {
  let component: HeaderWithNavComponent;
  let fixture: ComponentFixture<HeaderWithNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWithNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderWithNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
