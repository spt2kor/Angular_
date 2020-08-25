import {Component} from '@angular/core'

@Component({
    selector:'event-list',
    template: `
    <div class="well hoverwell thumbnail">
        <h1>
            Upcomming Angular Events
        </h1>

        <div class="well">
            <h2>Good Morning </h2>
        </div>
        <hr/>
        <event-thumbnail #childThumbnail [_eventThumbnail]="_eventFromEventList" 
        (_eventForOnClickThumbnailBtn)="OnChildThumbnailBtnClickEvent($event)" ></event-thumbnail>
         
        <h3> {{childThumbnail._lable}}</h3>
        <button class="btn btn-primary" (click)="childThumbnail.OnParentClickByRef()"> 
            call Chield by ref </button>
    </div>
    `
})

export class EventListComponent{
    _eventFromEventList = {
        id: 1,
        name: 'Angular Connect',
        date: '1/1/2021',
        time: '10.00am',
        price: 199.99,
        imageUrl:'assets/images/angularconnect-shield.png',
        location:{
            address:'Marthahalli',
            city:'Bangalore',
            country:'India'
        }
    };

    OnChildThumbnailBtnClickEvent(passedMsg){
        console.log("EventsList: Received Event from chiled = " , passedMsg);
    }
}