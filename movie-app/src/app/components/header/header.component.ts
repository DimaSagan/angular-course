import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() favoriteListIds: any
  @Input() bookmarksListIds: any
  
  constructor(private router: Router) { }
  navigateWhisData(data: any, favorite?: any) {
    
    const dataArray = Array.from(data)
    console.log(dataArray)
    const dataString = JSON.stringify(dataArray)
    const path = favorite ? 'favorite' : 'bookmark'
    this.router.navigate([{ outlets: { outlet2: [path] } }], { queryParams: { data: dataString } })
    // console.log(dataString)
  }
}
