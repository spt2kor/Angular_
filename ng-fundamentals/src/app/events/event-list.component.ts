import {Component} from '@angular/core'

@Component({
    selector:'event-list',
    template: `
    <div class="well hoverwell thumbnail">
        <h1>
            Upcomming Angular Events
        </h1>
        <hr/>
        <event-thumbnail [_eventThumbnail]="_eventFromEventList"></event-thumbnail>         
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
}