import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events = [
    { id: 1, title: 'Concert', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnouvMv_QiHpV3ScRWNENmYAL0Xm7ATh3b9w&s' },
    { id: 2, title: 'Art Exhibition', imageUrl: 'https://seattlerefined.com/resources/media2/16x9/full/1015/center/80/55fa1942-e1cf-4976-b45b-db3f2c784ca1-large16x9_IMG5871.jpg' },
    { id: 3, title: 'Theater Play', imageUrl: 'https://api-cdn.arte.tv/img/v2/image/R3bk6kMhojoumuq9tZcF8i/480x480' },
    // Add more events as needed
  ];
}
