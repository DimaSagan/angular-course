import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperHeroComponent } from './swiper-hero.component';

describe('SwiperHeroComponent', () => {
  let component: SwiperHeroComponent;
  let fixture: ComponentFixture<SwiperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
