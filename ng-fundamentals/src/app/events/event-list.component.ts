import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service'
import { toBase64String } from '@angular/compiler/src/output/source_map';
import {ToastrService} from './../common/toastr.service'

@Component({
    selector:'event-list',
    template: `
    <div class="well hoverwell thumbnail">
        <h1>
            Upcomming Angular Events
        </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let anEvent of eventsList" class="col-md-5">
              <event-thumbnail (click)="onEventThumbnailClick(anEvent.name)" [_eventThumbnail]="anEvent"></event-thumbnail>         
            </div>
        </div>
    </div>
    `
})

export class EventListComponent implements OnInit {
    eventsList:any[]

    constructor(private _eventService: EventService, private _toastr:ToastrService){
        //toastr.success("EventListComponent");
    }
    onEventThumbnailClick(anEventName){
        console.log("onEventThumbnailClick: ", anEventName);
        //toastr.success(anEventName);
        this._toastr.success(anEventName,anEventName);
    }

    ngOnInit(){
      this.eventsList = this._eventService.getEvents();
    }
}