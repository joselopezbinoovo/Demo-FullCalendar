import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-create-source-model',
  templateUrl: './create-source-model.component.html',
  styleUrls: ['./create-source-model.component.css']
})
export class CreateSourceModelComponent implements OnInit {
  formEdit: any;

  title:string=''
  eventColor:string=''
  cities: City[];



  constructor(public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,) {
    this.formEdit = new FormGroup({
      title: new FormControl(this.title, Validators.required),
      eventColor: new FormControl(this.eventColor, Validators.required),
   })

   this.cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
   }

  ngOnInit(): void {

  }

crear(){
    this.ref.close(this.formEdit.value)
}

}
