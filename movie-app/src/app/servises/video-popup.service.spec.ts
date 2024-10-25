import { TestBed } from '@angular/core/testing';

import { VideoPopupService } from './video-popup.service';

describe('VideoPopupService', () => {
  let service: VideoPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
