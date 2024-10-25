import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-sort-bar',
  standalone: true,
  imports: [],
  templateUrl: './sort-bar.component.html',
  styleUrl: './sort-bar.component.scss'
})
export class SortBarComponent implements OnInit {
  @Output() sortByRating = new EventEmitter<any>()
  @Output() sortByTitle  = new EventEmitter<any>()
  sortButtonByRateType: boolean = true
  sortButtonByTitleType: boolean = true
  ngOnInit(): void {
  }


  sortMoviesByRating() {
    this.sortByRating.emit()
    this.sortButtonByRateType = !this.sortButtonByRateType
  }

  sortMoviesByTitle() {
    this.sortByTitle.emit()
    this.sortButtonByTitleType = !this.sortButtonByTitleType
  }
}
