// dashboard.component.ts
import { Component, OnInit } from '@angular/core';

interface Event {
  name: string;
  date: Date;
  ticketsSold: number;
  revenue: number;
}

interface UpcomingEvent {
  title: string;
  imageUrl: string;
  location: string;
  date: Date;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalEvents: number = 24;
  upcomingEvents: number = 8;
  ticketsSold: number = 1234;
  revenue: number = 12345;

  upcomingEventsList: UpcomingEvent[] = [
    {
      title: 'Summer Music Festival',
      imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxMDkz/z/q30AAOSwR29ZGxS6/$_57.JPG?set_id=8800005007',
      location: 'Central Park, New York',
      date: new Date('2024-07-15T14:00:00'),
      description: 'Join us for a day of music and fun at the Summer Music Festival in Central Park!'
    },
    {
      title: 'Tech Conference 2024',
      imageUrl: 'https://i.ebayimg.com/images/g/nncAAOSw5VFWIMDD/s-l400.jpg',
      location: 'Convention Center, San Francisco',
      date: new Date('2024-09-22T09:00:00'),
      description: 'Discover the latest innovations in technology at the Tech Conference 2024.'
    },
    {
      title: 'Food & Wine Expo',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxHXHVmgL5ptPBR_x7G6vPhUMe0TvFjJTcw&s',
      location: 'Exhibition Hall, Chicago',
      date: new Date('2024-10-05T11:00:00'),
      description: 'Savor delicious food and wine from around the world at this exquisite expo.'
    },
    {
      title: 'Art & Culture Festival',
      imageUrl: 'https://i.pinimg.com/236x/e2/41/0d/e2410d8cedcceba59474d3b122d2027b.jpg',
      location: 'Downtown Gallery, Los Angeles',
      date: new Date('2024-11-01T10:00:00'),
      description: 'Experience a celebration of art and culture featuring local and international artists.'
    }
  ];
  

  selectedEvent: UpcomingEvent | null = null;
  selectedTicketType: string = 'Normal';
  ticketQuantity: number = 1;

  constructor() { }

  ngOnInit(): void {
    // You would typically fetch this data from a service
  }

  selectEvent(event: UpcomingEvent): void {
    this.selectedEvent = event;
    this.ticketQuantity = 1; // Reset quantity when selecting a new event
  }

  closeEventDetails(): void {
    this.selectedEvent = null; // Close the event details
  }

  bookTicket(): void {
    if (this.ticketQuantity < 1) {
      alert('Please select a valid quantity.');
      return;
    }
    alert(`Your ticket has been booked!\nType: ${this.selectedTicketType}\nQuantity: ${this.ticketQuantity}`);
    this.closeEventDetails(); // Close the event details after booking
  }
}
