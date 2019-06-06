import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileSizesListComponent } from './file-sizes-list/file-sizes-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { FormatSizePipe } from './format-size.pipe';
import { ColoredSizeDirective } from './colored-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    FileSizesListComponent,
    FormatSizePipe,
    ColoredSizeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
