import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:3000/api/books/';
  constructor(private httpClient: HttpClient) {}

  public getBooks(): Observable<Book> {
    return this.httpClient.get<Book>(this.url);
  }

  public getBookByBookId(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(this.url + bookId);
  }

  public deleteBookById(bookId: number) {
    return this.httpClient.delete(this.url + bookId);
  }

  public postBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.url, book);
  }

  public post(book: Book) {
    return this.httpClient.post(this.url, book);
  }

  public putBook(bookId: number, book): Observable<Book> {
    return this.httpClient.put<Book>(this.url + bookId, book);
  }
}
