import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Contacts } from './contacts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contactinfo: FormGroup;
  
  constructor(private formbuilder: FormBuilder) {}
  
  ngOnInit() {
    this.contactinfo = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      contactno: ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  
  onSubmit({value, valid}: {value: Contacts, valid: boolean}) {
    console.log(value, valid);
  }
}
