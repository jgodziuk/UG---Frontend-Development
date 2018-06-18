import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SListComponent } from './s-list/s-list.component';
import { SAddComponent } from './s-add/s-add.component';
import { SDetailComponent } from './s-detail/s-detail.component';
import { SSearchComponent } from './s-search/s-search.component';
import { SServiceService } from './s-service.service';

const appRoutes: Routes = [
  {
    path: 'list',
    component: SListComponent
  },
  {
    path: 'add',
    component: SAddComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    SListComponent,
    SAddComponent,
    SDetailComponent,
    SSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [SServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
