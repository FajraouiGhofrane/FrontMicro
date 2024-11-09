import { Routes } from '@angular/router';
import { NutritionListComponent } from './components/nutrition-list/nutrition-list.component';
import { NutritionAddComponent } from './components/nutrition-add/nutrition-add.component';
import { NutritionEditComponent } from './nutrition-edit/nutrition-edit.component';

// Déclarez vos routes ici
const routes: Routes = [
    { path: 'nutritions', component: NutritionListComponent },
    { path: 'edit/:id', component: NutritionEditComponent },
    { path: 'addnutrition', component: NutritionAddComponent },
    { path: '', redirectTo: '/nutritions', pathMatch: 'full' }
  ];
  
  // Exportez les routes ici
  export { routes };
  