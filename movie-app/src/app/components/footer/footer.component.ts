import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserSubsribe } from '../../servises/UserSubcribe.servisce';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private userSubsribe:UserSubsribe){}

  subscribe() {
    this.userSubsribe.showPopup()
  }
}
