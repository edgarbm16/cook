import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { SignUpService } from 'src/app/service/sign-up.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  private session: any;
  private user: any;

  constructor(
    private registerService: SignUpService,
    private alertCtrl: AlertController
  ) { }
  registroForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.EMAILPATTERN)]),
    password: new FormControl('', [Validators.required]),
    passwordtwo: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  });

  ngOnInit() {
    this.registroForm.controls;
  }

  onSubmit() {
    if (this.registroForm.invalid) {
      console.log("FormsInvalid");
      
    }else if(this.registroForm.value.password == undefined || this.registroForm.value.password == null ){
      this.validAlert('Contraseña', 'Ingrese una contraseña Valida');
    }else if (this.registroForm.value.password != this.registroForm.value.passwordtwo){
      this.validAlert('Contraseña', 'Las Contraseñas no Coinciden');
    } else {
      this.user = {
        username: this.registroForm.value.name,
        email: this.registroForm.value.email,
        password: this.registroForm.value.password,
        telefono: this.registroForm.value.tel,
      }
      this.registerService.signUp(this.user).subscribe((response) => {
        this.session = response;
      })
    }
  }


  async validAlert(tittle, message) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: tittle,
      message: message,
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss", role);

  }
}
