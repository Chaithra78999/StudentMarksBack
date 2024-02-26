import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StudentMarksComponent } from "./studentmarks/student-marks.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        StudentMarksComponent
  
    ],
  
    imports: [
      BrowserModule
    ],
    
    providers: [
      
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }