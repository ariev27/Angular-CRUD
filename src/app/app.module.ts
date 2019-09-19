import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ModalComponent } from './components/modal/modal.component';
import { Book } from './models/book';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    AddBookComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [NgbActiveModal, Book, BookComponent],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {}
