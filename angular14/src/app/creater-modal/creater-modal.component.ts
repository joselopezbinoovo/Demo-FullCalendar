import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { createEventId } from '../event-utils';


@Component({
  selector: 'app-creater-modal',
  templateUrl: './creater-modal.component.html',
  styleUrls: ['./creater-modal.component.css']
})
export class CreaterModalComponent implements OnInit {

  formEdit: any;
  title: string= '';
  descripcion:string='';
  start:string= '';
  end : string ='';
  allDay: boolean=false
  eventColor: string = '#1976D2';
  constructor(public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService) {

      this.formEdit = new FormGroup({
        title: new FormControl(this.title, Validators.required),
        descripcion: new FormControl(this.descripcion, Validators.required),
        start: new FormControl(this.start, Validators.required),
        end: new FormControl(this.end, Validators.required),
        allDay: new FormControl(this.allDay, Validators.required),
        eventColor: new FormControl(this.eventColor, Validators.required),
     })
    }
  ngOnInit(): void {
  }


  crear(){
    this.ref.close(this.formEdit.value)
  }

  }


