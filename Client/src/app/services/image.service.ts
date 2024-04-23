import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imagesUrl = 'assets/images.json'; // Adjusted to point to your JSON file
  private selectedImageSource = new BehaviorSubject<string | null>(null);
  selectedImage$ = this.selectedImageSource.asObservable();

  constructor(private http: HttpClient) { }

  getImages(): Observable<any[]> {
    // Use HttpClient to fetch the JSON file
    return this.http.get<any[]>(this.imagesUrl);
  }

  selectImage(imageUrl: string | null): void {
    this.selectedImageSource.next(imageUrl);
  }
}
