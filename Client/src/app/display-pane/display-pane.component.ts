// display-pane.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-display-pane',
  templateUrl: './display-pane.component.html',
  styleUrls: ['./display-pane.component.scss']
})
export class DisplayPaneComponent implements OnInit, OnDestroy {
  selectedImageUrl: string | null = null;
  private imageSubscription: Subscription;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageSubscription = this.imageService.selectedImage$.subscribe(
      imageUrl => this.selectedImageUrl = imageUrl
    );
  }

  ngOnDestroy() {
    if (this.imageSubscription) {
      this.imageSubscription.unsubscribe();
    }
  }
}
