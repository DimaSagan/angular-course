import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { filter, skip, takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable';
import { Store } from '@ngrx/store';
import { checkUserLogin, searchMovie, userLogOut } from '../../store/actions';
import { selectedSearchResult } from '../../store/selectors';
import { ClickOutsideDirective } from '../../directives/clickOutsade';
import { PopupService } from '../../servises/popup.service';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ClickOutsideDirective,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends ClearObservable implements OnInit {
  searchForm!: FormGroup
  searchResults!: any
  userName!: string | null
  showMenu:boolean=false
  // userId:string
  constructor(
    private store: Store,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private login: PopupService,
    private auth: Auth
  ) { super() }

  ngOnInit(): void {
    
    this.searchForm = new FormGroup({
      searchItem: new FormControl('', Validators.minLength(2))
    })

    this.searchForm.valueChanges.pipe(
      skip(3),
      takeUntil(this.destroy$),
      filter(() => this.router.url !== '/search')
    ).subscribe(res => {
      this.searchResults = false
      this.store.dispatch(searchMovie({ title: res.searchItem }))
      this.store.select(selectedSearchResult).pipe(
        takeUntil(this.destroy$)).subscribe(searchResults => {
          this.searchResults = searchResults?.results
        })
    })
    
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.userName = user.displayName
        console.log('User:', user);
        console.log(this.userName)
      }
    })
    
  }

  onSubmit() {
    this.store.dispatch(searchMovie({ title: this.searchForm.value.searchItem }))
    this.router.navigate(['search'])
    setTimeout(() => {
      this.searchResults = false
    }, 100)
  }

  clearSearchResults(): void {
    
    // this.searchForm.reset()
    // this.searchForm.patchValue({ searchItem: '' })
    this.searchResults = false;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

  loginUser() {
    this.login.showPopup('/')
  }

  logOut() {
    this.store.dispatch(userLogOut())
    this.userName = null
    this.toggleMenu()
  }
}
