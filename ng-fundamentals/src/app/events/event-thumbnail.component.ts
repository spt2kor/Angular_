import {Component,Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:`
        <div class="well hoverwell thumbnail">
            <h2>{{_eventThumbnail?.name}}</h2>
            <div>Date: {{_eventThumbnail?.date}}</div>
            <div [ngSwitch]="_eventThumbnail?.time">
                Time: {{_eventThumbnail?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{_eventThumbnail?.price}}</div>
            <div *ngIf="_eventThumbnail?.location">
                <span>Location: {{_eventThumbnail?.location?.address}}</span>                
                <span class="pad-left"> {{_eventThumbnail?.location?.city}} , {{_eventThumbnail?.location?.country}}</span>
            </div>         
            <div *ngIf="_eventThumbnail?.OnlineUrl">
            Online Url: {{_eventThumbnail?.OnlineUrl}}
            </div>  
        </div>
    `,
    styles:[`
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb ;}
    `]
})
 
export class EventThumbnailComponent{
    @Input() _eventThumbnail:any;
}