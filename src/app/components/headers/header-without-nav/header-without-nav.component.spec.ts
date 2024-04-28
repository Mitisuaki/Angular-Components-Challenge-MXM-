import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithoutNavComponent } from './header-without-nav.component';

describe('HeaderWithoutNavComponent', () => {
  let component: HeaderWithoutNavComponent;
  let fixture: ComponentFixture<HeaderWithoutNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWithoutNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderWithoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
