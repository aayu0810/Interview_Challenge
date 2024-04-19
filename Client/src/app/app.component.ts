import { Component } from '@angular/core';
import { PictureSelectionService, DropDownData } from './services/picture-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Generic Angular starting point: the html/scss hold the page 
// structure, with control and map panes that do the actual work

export class AppComponent {
    public picData: DropDownData;

    constructor( private pictureSelectionSerice: PictureSelectionService ) {
       
    }
}
