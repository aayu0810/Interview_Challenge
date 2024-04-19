import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ControlPaneComponent } from './control-pane/control-pane.component';
import { DisplayPaneComponent } from './display-pane/display-pane.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ControlPaneComponent,
    DisplayPaneComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
