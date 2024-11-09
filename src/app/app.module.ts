import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For ngModel
import { HttpClientModule } from '@angular/common/http'; // For HTTP requests
import { AppComponent } from './app.component';
import { NutritionService } from './nutrition.service';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { withFetch } from '@angular/common/http';
import { NutritionListComponent } from './components/nutrition-list/nutrition-list.component';
import { NutritionAddComponent } from './components/nutrition-add/nutrition-add.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NutritionEditComponent } from './nutrition-edit/nutrition-edit.component';


@NgModule({
    declarations: [
      AppComponent,
      NutritionListComponent,
      NutritionAddComponent,
      NutritionEditComponent,

    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      CommonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
    
    ],

    
    providers: [NutritionService, provideHttpClient(withFetch())],
    bootstrap: [AppComponent]
})
export class AppModule { }
