import {Component,Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:`
        <div class="well hoverwell thumbnail">
            <h2>{{_eventThumbnail.name}}</h2>
            <div>
                <img src={{_eventThumbnail.imageUrl}} alt="">
            </div>
            <div>Date: {{_eventThumbnail.date}}</div>
            <div>Time: {{_eventThumbnail.time}}</div>
            <div>Price: \${{_eventThumbnail.price}}</div>
            <div>
                <span>Location: {{_eventThumbnail.location.address}}</span>
                
                <span class="pad-left"> {{_eventThumbnail.location.city}} , {{_eventThumbnail.location.country}}</span>
            </div>
            <button class="btn btn-primary" (click)="handleThumbnailClick()" > Click Me! </button>
        </div>
    `,
    styles:[`
        .pad-left {margin-left:20px;}
        .well div {color: red;}
    `]
})
 
export class EventThumbnailComponent{
    @Input() _eventThumbnail:any;
    @Output() _eventForOnClickThumbnailBtn = new EventEmitter();
    _lable:any = "This is Chiled Label";
    handleThumbnailClick(){
        console.log("thumbnail button is clicked!!!");
        this._eventForOnClickThumbnailBtn.emit(this._eventThumbnail.name);
    }

    OnParentClickByRef(){
        console.log("call by parent !!! ");
    }
}