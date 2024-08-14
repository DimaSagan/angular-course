import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { filter, skip, takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable';
import { Store } from '@ngrx/store';
import { searchMovie } from '../../store/actions';
import { selectedSearchResult } from '../../store/selectors';
import { ClickOutsideDirective } from '../../directives/clickOutsade';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ClickOutsideDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends ClearObservable implements OnInit {
  searchForm!: FormGroup
  searchResults!: any
  constructor(
    private store: Store,
    private activatedRouter: ActivatedRoute,
    private router: Router
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
  }

  onSubmit() {
    this.store.dispatch(searchMovie({ title: this.searchForm.value.searchItem }))
    this.router.navigate(['search'])
    setTimeout(() => {
      this.searchResults = false
    }, 100)
  }

  clearSearchResults(): void {
    this.searchResults = false;
  }
}
