import { Component, OnInit } from "@angular/core";
import { ImageService } from "../services/image.service";

@Component({
  selector: "app-control-pane",
  templateUrl: "./control-pane.component.html",
  styleUrls: ["./control-pane.component.scss"],
})
export class ControlPaneComponent implements OnInit {
  images: any[] = [];
  selectedImage: string | null = null;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    // Using fetch to get the list of images from the server
    fetch("http://localhost:3000/getAllImages")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.images = data; // Assuming the server sends back an array of images
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });

    // Subscribe to updates from the image service if it's necessary
    // to receive updates not related to the initial fetch request
    this.imageService.getImages().subscribe(
      (images) => {
        this.images = images;
      },
      (error) => console.error("Error fetching images from service", error)
    );
  }

  onImageSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedImage = selectElement.value;
    this.imageService.selectImage(this.selectedImage);
  }
}
