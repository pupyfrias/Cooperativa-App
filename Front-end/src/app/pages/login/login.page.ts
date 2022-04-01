import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup ,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title ='Login';
  hide = true;
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  get id() {return this.formGroup.get('id');}
  get password() {return this.formGroup.get('password');}


  ngOnInit() {

    this.formGroup = this.fb.group({

      id: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(12)]],
      password: ['',[Validators.required]],

    });

  }

}
