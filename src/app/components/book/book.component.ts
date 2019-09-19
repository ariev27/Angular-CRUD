import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Book } from "../../models/book";
import { ModalComponent } from "../modal/modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService, private ngbModal: NgbModal) {}

  private getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data["data"];
    });
  }

  private findBookById(bookId: number) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].bookId == bookId) {
        return this.books[i];
      }
    }
  }

  ngOnInit() {
    this.getBooks();
  }

  public deleteBook(bookId: number) {
    this.bookService.deleteBookById(bookId).subscribe(data => {
      if (data["code"] == 200) {
        alert(data["message"]);
        this.getBooks();
      } else {
        alert(data["message"]["name"]);
      }
    });
  }

  openModal(bookId: number) {
    const modalRef = this.ngbModal.open(ModalComponent, {
      backdrop: "static",
      keyboard: false,
      centered: true
    });
    var book = this.findBookById(bookId);
    console.log("OpenModal " + JSON.stringify(book));
    console.log(book.bookId);
    modalRef.componentInstance.bookId = book.bookId;
    modalRef.componentInstance.title = book.title;
    modalRef.componentInstance.price = book.price;
    modalRef.componentInstance.author = book.author;
    modalRef.componentInstance.stock = book.stock;

    modalRef.result.then(nilai => {
      if (nilai == true) {
        this.getBooks();
      }
    });
  }
}
