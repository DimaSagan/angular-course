import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";

@Component({
    selector: 'app-favorites-page',
    standalone: true,
    templateUrl: './favorites-page.component.html',
    styleUrl: './favorites-page.component.scss',
    imports: [PrimengMovieCardComponent]
})
export class FavoritesPageComponent implements OnInit {
  data: string[] | undefined
  constructor(private route: ActivatedRoute) { }
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      const dataString = params['data'];
      this.data = dataString ? JSON.parse(dataString) : [];
      console.log(this.data); // Проверка данных
    });
  }
  
}
