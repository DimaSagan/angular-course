import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PopupService } from '../../servises/popup.service';
import { Store } from '@ngrx/store';
import { createNewUser, emailAndPassLogin, googleLoginInDataBase, setUserDetails } from '../../store/actions';
import { LoaderService } from '../../servises/loader.service';
import { selectedLoginFailure } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { AuthFireBase } from '../../servises/autnFireBase.service';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss'
})
export class LoginPopupComponent implements OnInit {
  visible!: any
  form!: FormGroup 
  formCreateUser!: FormGroup
  loginFailure: boolean = false
  passwordVisible: boolean = false
  createNewUser:boolean = false
  @ViewChild('formRef') formElementRef!: ElementRef
  @ViewChild('newUserRef') newUserEelementRef!: ElementRef
  
  constructor(
    private popupService: PopupService,
    private store: Store,
    private loaderService: LoaderService,
    private authDb: AuthFireBase
  ) { }

  

  ngOnInit(): void {
    this.store.select(selectedLoginFailure).subscribe(error => {
      this.loginFailure = !!error
    })
    this.popupService.popupVisibleSubject.subscribe(res => {
      this.visible = res
    })
    this.form = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required)
    })

    this.formCreateUser = new FormGroup({
      userName: new FormControl('', Validators.required),
      newEmail: new FormControl('', [Validators.required, Validators.email]),
      newPass: new FormControl('', Validators.required)
    })
  }

  dbAuth() {
    this.store.dispatch(googleLoginInDataBase())
    this.closeDialog()
  }

  passwordVisibility() {
    this.passwordVisible = !this.passwordVisible
  }

  toggleCreateNewUser() {
    this.createNewUser = !this.createNewUser
  }

  onSubmit() {
    if (this.form.valid) {
      const { userEmail, pass } = this.form.value;
      // this.store.dispatch(setUserDetails({ userName, pass }))
      // this.loaderService.showLoader();
      this.store.dispatch(emailAndPassLogin({email: userEmail, password: pass}))
      this.closeDialog()
    }
  }

  createUser() {
    if (this.formCreateUser.valid) {
      const { userName, newEmail, newPass } = this.formCreateUser.value
      // this.authDb.createNewUser(userName, newEmail, newPass)
      // console.log({ userName, newEmail, newPass })
      // this.loaderService.showLoader();
      this.store.dispatch(createNewUser({ userName: userName, email: newEmail, password: newPass }))
      this.toggleCreateNewUser()
    }
  }

  closeDialog() {
    this.popupService.hidePopup()
  }
}


