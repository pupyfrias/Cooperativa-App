import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title = 'Login';
  hide = true;
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private client: HttpClient
  ) { }

  get id() { return this.formGroup.get('id'); }
  get password() { return this.formGroup.get('password'); }


  ngOnInit() {

    this.formGroup = this.fb.group({

      id: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
      password: ['', [Validators.required]],

    });

  }

  async handleButtonClick() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',

    });

    await loading.present();

    await this.client.get('http://webscraping.com:8045/api/Items/')
      .subscribe(data =>{
        console.log(data);
      }, null, async () => {
        await loading.dismiss();
      });

  }

}
