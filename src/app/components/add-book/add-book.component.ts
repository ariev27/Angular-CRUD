import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { BookService } from "src/app/services/book.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  book: Book = new Book();
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigate(["/book"]);
  }

  addBook() {
    this.bookService.postBook(this.book).subscribe(data => {
      if (data["code"] == 200) {
        alert(data["message"]);
        this.book = data["data"];
        this.navigate();
      } else {
        alert(data["message"]);
      }
    });
  }
}
