import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVocabularyComponent } from './add-vocabulary/add-vocabulary.component';
import { VocabularyTestComponent } from './vocabulary-test/vocabulary-test.component';

const routes: Routes = [
  { path:"add-vocabulary.component.html", component:AddVocabularyComponent},
  { path:"vocabulary-test.component.html", component: VocabularyTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
