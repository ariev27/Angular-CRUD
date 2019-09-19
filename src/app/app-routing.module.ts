import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';


const routes: Routes = [
  {path: 'book', component: BookComponent},
  {path: 'add-book', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
