import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8080/bookings';

  constructor(private http: HttpClient) { }

  getBooking(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBooking(booking: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, booking);
  }

  updateBooking(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBookingList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
