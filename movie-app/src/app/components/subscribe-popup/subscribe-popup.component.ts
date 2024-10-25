import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CalendarModule } from 'primeng/calendar';
import { setUserSubscription, unsubscribe } from '../../store/actions';
import { UserSubsribe } from '../../servises/userSubcribe.servisce';
import { selectedUserSubscription } from '../../store/selectors';
@Component({
  selector: 'app-subscribe-popup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  templateUrl: './subscribe-popup.component.html',
  styleUrl: './subscribe-popup.component.scss'
})
export class SubscribePopupComponent implements OnInit{

  visible!: boolean
  form!: FormGroup 
  subscribeMessage: boolean = false
  visibleMessage:boolean =true
  
  constructor(private store: Store, private userSubsribe: UserSubsribe) { }
  
  ngOnInit(): void {
    this.userSubsribe.popupVisibleSubject$.subscribe(res => {
       this.visible = res
     })
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      userSurname: new FormControl('', Validators.required),
      userMail: new FormControl('', [Validators.email, Validators.required]),
      date: new FormControl<Date | null>(null, Validators.required),
      agreement: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    let userSubscribeDetails = this.form.value
    let userName = userSubscribeDetails.userName
    let userSurname = userSubscribeDetails.userSurname
    let userMail = userSubscribeDetails.userMail
    const options = { year: 'numeric', month: 'short', day: 'numeric' } as const;
    let date = userSubscribeDetails.date.toLocaleDateString('en-US', options)
    console.log('userName',userName,'userSurname',userSurname,'userMail',userMail, 'date',date)
    this.store.dispatch(setUserSubscription({ userName: userName, userSurname: userSurname, email: userMail, birthDate: date, genre: 'test' }))
    if (this.store.select(selectedUserSubscription)) {
      this.subscribeMessage=true
      setTimeout(() => this.closeDialog(), 3000)
    }
  }

  unsubscribe() {
    this.store.dispatch(unsubscribe())
    this.visibleMessage = false
    setTimeout(() => {
      this.closeDialog()
      this.subscribeMessage=false
    }, 3000)
  }

  closeDialog() {
    this.userSubsribe.hidePopup()
    console.log('close component ts')
  }
}
