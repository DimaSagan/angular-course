import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";

@Component({
  selector: 'app-bookmarks-page',
  standalone: true,
  templateUrl: './bookmarks-page.component.html',
  styleUrl: './bookmarks-page.component.scss',
  imports: [PrimengMovieCardComponent]
})
export class BookmarksPageComponent implements OnInit {
  data: string[] | undefined
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const dataString = params['data'];
      this.data = dataString ? JSON.parse(dataString) : [];
      console.log(this.data); // Проверка данных
    });
  }
}
