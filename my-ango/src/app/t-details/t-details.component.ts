
import { Booking } from '../booking';
import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../booking.service';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-t-details',
  templateUrl: './t-details.component.html',
  styleUrls: ['./t-details.component.css']
})
export class TDetailsComponent implements OnInit {

  id: string;
  booking: Booking;

  constructor(private route: ActivatedRoute,private router: Router,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.booking = new Booking();

    this.id = this.route.snapshot.params['id'];
    
    this.bookingService.getBooking(this.id)
      .subscribe(data => {
        console.log(data)
        this.booking = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['bookings']);
  }
}


