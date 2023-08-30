import { Component, OnInit } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
  Calendar,
  EventDropArg,
  EventHoveringArg,
} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { ZonedDateTime } from '@js-joda/core';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { data, events } from 'src/data';
import { CreaterModalComponent } from './creater-modal/creater-modal.component';
import { CreateSourceModelComponent } from './create-source-model/create-source-model.component';
import { Draggable, DropArg } from '@fullcalendar/interaction';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, ConfirmationService, DialogService],
})
export class AppComponent implements OnInit {

  eventNotHaveResourceId:any[]=[]
  popoverEvent: EventApi | null = null;
  events:any[] = events
  popoverVisible = false;
  resources:any[]=[]
  popoverX = 0;
  popoverY = 0;
  val: String = '';
  currentEvents: EventApi[] = [];
  calendarInst?: Calendar;
  calendarOptions: CalendarOptions = {
    locale: 'es',
    headerToolbar: {
      left: 'prev,next today myCustomButton',
      center: 'title',
      right: 'resourceTimelineDay resourceTimelineWeek resourceTimelineMonth',
    },
    customButtons: {
      myCustomButton: {
        text: 'Añadir Usario',
        click: () => this.addSource(),
      },
    },
    editable: true,
    resourceAreaHeaderContent: 'Usuarios',
    resources:data,
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
    eventMouseEnter: this.handleEventMouseEnter.bind(this),
    eventMouseLeave: this.handleEventMouseLeave.bind(this),
    droppable: true, // this allows things to be dropped onto the calendar
    drop: this.dropIntoCalendar.bind(this),
    views: {

      timeGrid: {
        dayMaxEventRows: 6, // adjust to 6 only for timeGridWeek/timeGridDay
      },
    },
    }
  items: MenuItem[] = [];

  nodes!: any[];

  constructor(
    public dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    const calendarEl = document.getElementById('calendar')!;
    var containerExternal = document.getElementById('external')!;

    this.calendarInst = new Calendar(calendarEl);
    this.eventNotHaveResourceId =  this.events.filter((index:any) => {
        return index.resourceId === ''
    })
    new Draggable(containerExternal, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText
        };
      }
    });
    this.resources = data


    this.nodes = [
      {
          key: '0',
          label: 'Introduction',
          children: [
              { key: '0-0', label: 'What is Angular', data: 'https://angular.io', type: 'url' },
              { key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url' },
              { key: '0-2', label: 'Learn and Explore', data: 'https://angular.io/guide/architecture', type: 'url' },
              { key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url' }
          ]
      },
      {
          key: '1',
          label: 'Components In-Depth',
          children: [
              { key: '1-0', label: 'Component Registration', data: 'https://angular.io/guide/component-interaction', type: 'url' },
              { key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'url' },
              { key: '1-2', label: 'Hooks', data: 'https://angular.io/guide/lifecycle-hooks', type: 'url' },
              { key: '1-3', label: 'Attribute Directives', data: 'https://angular.io/guide/attribute-directives', type: 'url' }
          ]
      }
  ];

  }

  private get calendar(): Calendar {
    return this.calendarInst!;
  }


  dropIntoCalendar(info:DropArg){
    info.draggedEl.parentNode?.removeChild(info.draggedEl);

  }


/*   drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      return;
    }

    const draggedItem = event.item.data;
    const resource: any = {
      id: 'resource_' + (this.calendarOpcalendartions.resources.length + 1), // Asigna un nuevo ID para el recurso
      title: draggedItem.title,
    };

    this.calendar.addResource(resource);

    // Remueve el elemento arrastrado de la lista del contenedor
    this.eventNotHaveResourceId = this.eventNotHaveResourceId.filter(item => item !== draggedItem);
  }
 */

  eventDragStop(model: any) {
    console.log(model);
  }
  handleEventMouseEnter(arg: EventHoveringArg) {
    const eventApi: EventApi = arg.event;
    const boundingRect = arg.el.getBoundingClientRect();

    this.popoverEvent = eventApi;
    this.popoverX = boundingRect.left + window.scrollX;
    this.popoverY = boundingRect.top + window.scrollY - 10;
    this.popoverVisible = true;
  }

  // Función para manejar el evento de salida del ratón
  handleEventMouseLeave() {
    this.popoverVisible = false;
  }

  // Función para obtener la hora actual formateada
  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }

/*   loadTippyStyles(): void {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/tippy.js/dist/tippy.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  } */
/*   addTooltipToEvent(info: any): void {
    tippy(info.el, {
      theme: 'tomato',
      content: `${info.event.title}<br>${info.event.start.toLocaleString()}`,
    });
  } */

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  addSource() {
    const dialog = this.dialogService.open(CreateSourceModelComponent, {
      header: 'Crear Actividad',
      width: '500px',
      height: '500px',
    });
    dialog.onClose.subscribe((res: any) => {

      if (res) {
       this.calendar.addResource({
          title: res.title,
          eventColor: res.eventColor,
          id: createEventId(),
          children: [],
        })

      }
    });
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const calendarApi = selectInfo.view.calendar;

    const dialog = this.dialogService.open(CreaterModalComponent, {
      header: 'Crear Evento',
      height: '500px',
      width: '500px',
    });
    dialog.onClose.subscribe((res: any) => {
      if (res) {
        calendarApi.addEvent({
          id: createEventId(),
          resourceId: selectInfo.resource?.id,
          title: res.title,
          descripcion: res.descripcion,
          start: res.start,
          end: res.end,
          allDay: res.allDay,
          eventColor: res.eventColor,
        });
      }
    });
  }

  handleEventClick(oldResource: EventClickArg) {
    console.trace(oldResource);

    const title = oldResource.event.title;
    const start = oldResource.event.start;
    const end = oldResource.event.end;
    const backgroundColor = oldResource.event.backgroundColor;

    let obje = {
      title: title,
      start: start,
      end: end,
      backgroundColor: backgroundColor,
    };

    const modal = this.dialogService.open(ModalUpdateComponent, {
      data: obje,
      header: 'Actualizar Evento',
      height: '500px',
      width: '500px',
    });
    modal.onClose.subscribe((res: any) => {
      if (res == false) {
        oldResource.event.remove();
      } else {
        this.calendar.batchRendering(() => {
          // remove all events
          this.calendar.getEvents().forEach((event) => event.remove());
          let events = {
            id: createEventId(),
            resourceId: 'c',
            title: res.title,
            //descripcion: res.descripcion,
            start: res.start,
            end: res.end,
            allDay: res.allDay,
            eventColor: res.eventColor,
          };
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
    this.calendar.scrollToTime(time);
  }

  getEventId(idEvent: EventClickArg) {
    let id = idEvent.event.id;
    return id;
  }

  draggingSameTime(event: EventDropArg) {
    let id = event.event.id;
    let relation = this.currentEvents;
    let start = event.event.startStr;


    let all_day_object = {
      allDay: false,
    };

    let end = event.event.endStr;


    let relationShip = relation.map((element) => {
      let relationIds = element._def.extendedProps['relatedEvents'];
      if (relationIds === id) {
        let a = this.currentEvents.filter(
          (element) => element._def.extendedProps['relatedEvents'] === id,
        );

        a.forEach((element) =>
          console.log(element.setDates(`${start}`, `${end}`), all_day_object)
        );
      } else {
      }
    });
  }
}

/*
   handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    } */
