import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/models/book";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input() public bookId: number;
  @Input() public title: string;
  @Input() public author: string;
  @Input() public price: number;
  @Input() public stock: number;

  constructor(
    public activeModal: NgbActiveModal,
    private bookService: BookService,
    public book: Book
  ) {}

  ngOnInit() {}

  public updateBook() {
    const bookId = this.bookId;
    const book = {
      title: this.title,
      price: this.price,
      author: this.author,
      stock: this.stock
    };
    this.bookService.putBook(bookId, book).subscribe(data => {
      if (data["code"] == 200) {
        alert(data["message"]);
        this.activeModal.close(true);
      }
    });
  }
}
