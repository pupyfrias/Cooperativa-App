import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { MainService } from 'src/app/services/main.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    private client: HttpClient,
    private service: MainService,
    private router: Router
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
      message: 'Por favor, espere...',

    });

    await loading.present();

    const formData: any = new FormData();
    formData.append('usuario', `${this.id.value}`);
    formData.append('clave', `${this.password.value}`);

    await this.client.post<any>('https://coopdgii.com/coopvirtual/App/login', formData)
    .pipe(catchError(this.service.handleError))
      .subscribe({
        next: (data) => {

          if(data.success){

            this.router.navigate(['./cuentas']);
            console.log(data.data.token);
          }
          else{
            this.service.showToastMessage(data.mensaje);
            this.id.setErrors({incorrect: true});
            this.password.setErrors({incorrect: true});
          }
        },
        error: async (error) => {
          this.service.showToast(error);
          await loading.dismiss();
        },
        complete: async () => {
          await loading.dismiss();
        }

      });
  }

}
