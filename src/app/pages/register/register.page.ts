import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  constructor() { }
  registroForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.pattern(this.EMAILPATTERN)]),
    password: new FormControl('',[Validators.required]),
    passwordtwo: new FormControl('',[Validators.required]),
    tel: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  });

  ngOnInit() {
    this.registroForm.controls;
  }

  onSubmit(){
    
  }
}
