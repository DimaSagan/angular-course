import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPupupComponent } from './video-pupup.component';

describe('VideoPupupComponent', () => {
  let component: VideoPupupComponent;
  let fixture: ComponentFixture<VideoPupupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPupupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoPupupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
