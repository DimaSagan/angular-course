import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit{
  @Input() data: any
  @Output() addFavorite = new EventEmitter<any>()
  @Output() addBookmarks = new EventEmitter<any>()
  public movie: any
  ngOnInit(){
    this.movie = this.data
  }
  addToFavorite() {
    this.addFavorite.emit(this.movie[0])
  }
  addToBookmarks() {
    this.addBookmarks.emit(this.movie[0])
  }
}
