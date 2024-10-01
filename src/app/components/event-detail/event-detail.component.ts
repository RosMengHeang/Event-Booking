import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../dashboard/dashboard.component'; // Import the Event interface if needed

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event | undefined; // Store event details
  ticketTypes: { type: string; price: number }[] = [
    { type: 'VIP', price: 100 },
    { type: 'Normal', price: 50 }
  ];
  selectedTicketType: string = '';
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Retrieve the event ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    // Fetch the event details based on the ID (for now, hardcoded)
    this.event = this.getEventById(id); // Create this function to get event details
  }

  getEventById(id: string | null): Event | undefined {
    // Here you can fetch the event details from a service or an array based on the ID
    const events = [
      { name: 'Summer Music Festival', location: 'Central Park, New York', date: new Date('2024-07-15'), imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxMDkz/z/q30AAOSwR29ZGxS6/$_57.JPG?set_id=8800005007' },
      { name: 'Tech Conference 2024', location: 'Convention Center, San Francisco', date: new Date('2024-09-22'), imageUrl: 'https://i.ebayimg.com/images/g/nncAAOSw5VFWIMDD/s-l400.jpg' },
      { name: 'Food & Wine Expo', location: 'Exhibition Hall, Chicago', date: new Date('2024-10-05'), imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxHXHVmgL5ptPBR_x7G6vPhUMe0TvFjJTcw&s' },
      { name: 'Art & Culture Festival', location: 'Downtown Gallery, Los Angeles', date: new Date('2024-11-01'), imageUrl: 'https://i.pinimg.com/236x/e2/41/0d/e2410d8cedcceba59474d3b122d2027b.jpg' }
    ];
    return events[+id!]; // Assuming ID is the index of the events array
  }

  bookTicket(): void {
    // Logic for booking ticket
    alert('Your ticket has been booked!'); // Show message
    this.router.navigate(['/tickets']); // Navigate to ticket page
  }
}
