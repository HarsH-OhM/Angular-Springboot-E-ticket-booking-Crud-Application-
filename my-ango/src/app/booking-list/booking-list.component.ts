import { TDetailsComponent } from '../t-details/t-details.component';
import { Observable } from "rxjs";
import { BookingService } from "../booking.service";
import { Booking } from "../booking";

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings: Observable<Booking[]>;

  constructor(private bookingService: BookingService,
    private router: Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {
    this.bookings = this.bookingService.getBookingList();
  }

  deleteBooking(id: string){
    this.bookingService.deleteBooking(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          
        },
        error => console.log(error));
  }

  bookingDetails(id: string){
    this.router.navigate(['details', id]);

  }

  updateBooking(id: string){

    this.router.navigate(['update', id]);

  }


}


