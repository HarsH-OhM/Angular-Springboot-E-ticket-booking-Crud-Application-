import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  


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

updateBooking() {
  this.bookingService.updateBooking(this.id, this.booking)
    .subscribe(data => {
      console.log(data);
      this.booking = new Booking();
      this.gotoList();
    }, error => console.log(error));
}

onSubmit() {
  this.updateBooking();    
}

gotoList() {
  this.router.navigate(['/bookings']);
}

}