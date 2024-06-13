import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeFormatPipe } from '../../pipes/time-format/time-format.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, TimeFormatPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit {
  @Input() item: any
  @Output() addFavorite = new EventEmitter<any>()
  @Output() addBookmarks = new EventEmitter<any>()
  // public item: any
  ngOnInit() {
    // this.item = this.data
  }

  addToFavorite(movie: any) {
    this.addFavorite.emit(movie)
  }
  addToBookmarks(movie: any) {
    this.addBookmarks.emit(movie)
  }
}
