import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, Calendar, CalendarApi, CalendarDataManager, EventDropArg  } from '@fullcalendar/angular';
import { ResourceInput } from '@fullcalendar/resource-common';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { DateTimeFormatter, LocalDateTime, ZonedDateTime } from '@js-joda/core';
import { Dialog } from 'primeng/dialog';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { data ,events} from 'src/data';
import { CreaterModalComponent } from './creater-modal/creater-modal.component';
import { startCase } from 'lodash';
import { CreateSourceModelComponent } from './create-source-model/create-source-model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, ConfirmationService,DialogService]
})
export class AppComponent implements OnInit{

  val:String="";

  currentEvents: EventApi[] = [];
  calendarInst?: Calendar;

  calendarOptions: CalendarOptions = {
    locale:'es',
    headerToolbar: {
      left: 'prev,next today myCustomButton',
      center: 'title',
      right: 'resourceTimelineDay resourceTimelineWeek resourceTimelineMonth'
    },
    customButtons: {
      myCustomButton: {
        text: 'Añadir maquina',
        click: () => this.addSource()
      }
    },
    editable: true,
    resourceAreaHeaderContent: 'Maquinas',
    resources: data,
     //businessHours: true,
    events:events,
    initialView: 'resourceTimelineDay',

    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    nowIndicator: true,
    weekends: true,
    selectable: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
   eventDrop: this.draggingSameTime.bind(this),
    views: {
      timeGrid: {
        dayMaxEventRows: 6 // adjust to 6 only for timeGridWeek/timeGridDay
      }
    }
  };
  items: MenuItem[]=[];

constructor( private messageService: MessageService,public dialogService: DialogService,
  private confirmationService: ConfirmationService){}

  ngOnInit(): void {
    const calendarEl = document.getElementById('calendar')!;
    this.calendarInst = new Calendar(calendarEl);
  }


  private get calendar(): Calendar {
    return this.calendarInst!;
  }


  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }


  addSource(){
    const dialog = this.dialogService.open(CreateSourceModelComponent,{
      header: 'Crear Maquina',
      width: '500px',
      height:'500px'

    })
    dialog.onClose.subscribe((res: any) => {
      if (res) {

           data.push({
             title: res.title,
             eventColor: res.eventColor,
             id: createEventId(),
             children: []
           })
          }
    })


  }


  handleDateSelect(selectInfo: DateSelectArg) {

    const calendarApi = selectInfo.view.calendar;

    const dialog = this.dialogService.open( CreaterModalComponent, {
      header: 'Crear Evento',
      height: '500px',
      width: '500px'
    })
    dialog.onClose.subscribe((res: any) => {

      if (res) {
          calendarApi.addEvent({

          id: createEventId(),
          resourceId: selectInfo.resource?.id,
          title:res.title,
          descripcion: res.descripcion,
          start: res.start,
          end: res.end,
          allDay: res.allDay,
          eventColor: res.eventColor
        });
      }
  });
  }

  handleEventClick(oldResource: EventClickArg) {

    console.log(oldResource);

    const title = oldResource.event.title
    const start = oldResource.event.start
    const end = oldResource.event.end
    const backgroundColor = oldResource.event.backgroundColor


    let obje = {
      title: title,
      start: start,
      end:end,
      backgroundColor:backgroundColor
    }

    const modal = this.dialogService.open(ModalUpdateComponent, {
      data: obje,
      header: 'Actualizar Evento',
      height: '500px',
      width: '500px'
    });
    modal.onClose.subscribe((res: any) =>{
      if (res == false) {
        oldResource.event.remove();
    }else {
      this.calendar.batchRendering(() => {
        // remove all events
        this.calendar.getEvents().forEach(event => event.remove());
       let events={
          id: createEventId(),
          resourceId: 'c',
          title:res.title,
          //descripcion: res.descripcion,
          start: res.start,
          end: res.end,
          allDay: res.allDay,
          eventColor: res.eventColor
        }
        this.calendar.addEvent(events);
      });
    }
    });
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
  scrollToNow() {
    const time = ZonedDateTime.now().withFixedOffsetZone().toString();
    console.debug("Scroll to time", { time });
    this.calendar.scrollToTime(time);
  }



getEventId(idEvent:EventClickArg){
   let id = idEvent.event.id
      return id
  }

 draggingSameTime(event:EventDropArg){

let id = event.event.id;
let relation = this.currentEvents
let start = event.event.startStr

console.log(start);



let all_day_object = {
  allDay: false
};


let end = event.event.endStr

console.log( relation);


let relationShip = relation.map(element => { let relationIds = element._def.extendedProps['relatedEvents']
  //console.log(relationIds);

if ( relationIds === id ) {


   let a = this.currentEvents.filter ( element => element._def.extendedProps['relatedEvents'] === id, console.log(element._def.title) )


  a.forEach(element => console.log(element.setDates(`${start}`, `${end}`),all_day_object))
}else {

}

})





}


}











/*
   handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    } */

