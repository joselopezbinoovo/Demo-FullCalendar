import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css'],
  providers: [MessageService, ConfirmationService,DialogService]

})
export class ModalUpdateComponent implements OnInit {
  formEdit: any;
  data:any;
  event:string[]=[];

  constructor(public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService) {

      this.data = this.config.data

      this.formEdit = new FormGroup({
        title: new FormControl(this.data?.title, Validators.required),
        start: new FormControl(this.data?.start, Validators.required),
        end: new FormControl(this.data?.end, Validators.required),
        allDay : new FormControl(this.data?.allDay, Validators.required),
        eventColor:  new FormControl(this.data?.color, Validators.required),
      })
     }

  ngOnInit(): void {
  console.log(this.data);

  }
  editar(){
    this.ref.close(this.formEdit.value)
    }

  delete(){

    this.ref.close(false)

  }
}

