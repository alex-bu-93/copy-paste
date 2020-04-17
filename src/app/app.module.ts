import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule }            from '@angular/common';
import { FormsModule }             from '@angular/forms';
import { NzInputModule }           from 'ng-zorro-antd/input';
import { NzTableModule }           from 'ng-zorro-antd/table';
import { AppComponent }            from './app.component';

const ANT_DESIGN_MODULES = [NzInputModule, NzTableModule];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
