import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-application-process',
  templateUrl: './application-process.component.html',
  styleUrls: ['./application-process.component.scss']
})
export class ApplicationProcessComponent implements OnInit {

  selectedFile: File = null;
  aplicantInfoFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    mobilePhone: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

  onFileSelected(event){
    console.log(event)
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
    console.log(this.aplicantInfoFormGroup)
  }



}
