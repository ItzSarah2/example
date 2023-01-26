import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddVocabularyComponent } from './add-vocabulary/add-vocabulary.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { VocabularyTestComponent } from './vocabulary-test/vocabulary-test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

const appRoutes: Routes = [
  { path: "addVocabulary", component: AddVocabularyComponent },
  { path: "vocabularyTest", component: VocabularyTestComponent },
  { path: "home", component: AppComponent }
]
RouterModule 

@NgModule({
  declarations: [
    AppComponent,
    AddVocabularyComponent,
    VocabularyTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
