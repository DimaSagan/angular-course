import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TimeFormatPipe } from '../../pipes/time-format/time-format.pipe';
import { RouterModule } from '@angular/router';
import { RateFormatPipe } from "../../pipes/rate-format/rate-format.pipe";
@Component({
    selector: 'app-primeng-movie-card',
    standalone: true,
    templateUrl: './primeng-movie-card.component.html',
    styleUrl: './primeng-movie-card.component.scss',
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        TimeFormatPipe,
        RouterModule,
        RateFormatPipe
    ]
})
export class PrimengMovieCardComponent implements OnInit {
  @Input() mov: any
  @Output() addToFavorite = new EventEmitter<any>()
  @Output() addToBookmarks = new EventEmitter<any>()
  public animatedRate: number = 0;
  ngOnInit(): void {
    this.animateRate() 
  }

  animateRate() {
    const increment = this.mov.vote_average / 100
    let currentRate = 0
    const interval = setInterval(() => {
      currentRate += increment
      this.animatedRate = Math.min(Math.round(currentRate * 10) / 10, this.mov.vote_average)
      if (currentRate >= this.mov.vote_average) {
        clearInterval(interval);
      }
    }, 20)
  }

  addMovieToFavorite(mov:any) {
    this.addToFavorite.emit(mov)
  }
  addMovieToBookmarks(mov:any) {
    this.addToBookmarks.emit(mov)
  }
}
