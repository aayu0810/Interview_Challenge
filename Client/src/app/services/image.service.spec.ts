import { TestBed } from '@angular/core/testing';
import { ImageService } from  '../services/image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({


    });
    service = TestBed.get(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
