import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern(this.EMAILPATTERN)]),
    password: new FormControl('',[Validators.required, Validators.minLength(10)]),
  });

  ngOnInit() {
    this.loginForm.controls;
  }

  onSubmit(){
    if(this.loginForm.value.email === undefined || this.loginForm.value.email === null){
      this.validateAlert('Error Datos', 'Ingrese un correo');
    } else if (this.loginForm.value.password === undefined || this.loginForm.value.password === null){
      this.validateAlert('Error Datos', 'Inglese una contraseña');
    } else {
            
    }
  }


  async validateAlert(title, message){
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    (await alert).present();
  }
  
}
