import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {
  ticketId: string | null = null;
  ticketDetails: any = {}; // Adjust to match your ticket details structure

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ticketId = params.get('id');
      this.fetchTicketDetails(this.ticketId);
    });
  }

  fetchTicketDetails(id: string | null) {
    if (id) {
      // Example static data (replace with real data fetch logic)
      this.ticketDetails = {
        id: id,
        eventName: 'Concert Night',
        location: 'Downtown Arena',
        date: '2024-10-15',
        imageUrl: 'assets/concert.jpg', // Use a real image path
        price: 100,
        quantity: 1
      };
    }
  }
}
