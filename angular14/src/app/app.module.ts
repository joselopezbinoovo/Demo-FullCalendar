import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AppComponent } from './app.component';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { SharedModuleModule } from './sharedModule';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreaterModalComponent } from './creater-modal/creater-modal.component';
import { CreateSourceModelComponent } from './create-source-model/create-source-model.component';
import 'tippy.js/themes/light.css';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
  resourceTimelinePlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    ModalUpdateComponent,
    CreaterModalComponent,
    CreateSourceModelComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    SharedModuleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
