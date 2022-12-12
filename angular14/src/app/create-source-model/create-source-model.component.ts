import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-source-model',
  templateUrl: './create-source-model.component.html',
  styleUrls: ['./create-source-model.component.css']
})
export class CreateSourceModelComponent implements OnInit {
  formEdit: any;

  title:string=''
  eventColor:string=''

  constructor(public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,) {
    this.formEdit = new FormGroup({
      title: new FormControl(this.title, Validators.required),
      eventColor: new FormControl(this.eventColor, Validators.required),
   })
   }

  ngOnInit(): void {
  }

crear(){
    this.ref.close(this.formEdit.value)
}

}
