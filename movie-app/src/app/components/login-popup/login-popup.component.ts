import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PopupService } from '../../servises/popup.service';
import { Store } from '@ngrx/store';
import { setUserDetails } from '../../store/actions';
import { LoaderService } from '../../servises/loader.service';
import { selectedLoginFailure } from '../../store/selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss'
})
export class LoginPopupComponent implements OnInit{
  visible!:any
  form!: FormGroup 
  loginFailure: boolean = false
  
  constructor(
    private popupService: PopupService,
    private store: Store,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.store.select(selectedLoginFailure).subscribe(error => {
      this.loginFailure = !!error
    })
    this.popupService.popupVisibleSubject.subscribe(res => {
      this.visible = res
    })
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const { userName, pass } = this.form.value;
      this.store.dispatch(setUserDetails({userName, pass}))
      this.loaderService.showLoader();
      this.closeDialog()
    }
  }

  closeDialog() {
    this.popupService.hidePopup();
  }
}
