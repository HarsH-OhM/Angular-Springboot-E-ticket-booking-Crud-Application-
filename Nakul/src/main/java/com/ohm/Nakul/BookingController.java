package com.ohm.Nakul;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class BookingController {

    @RequestMapping("/testmovie")
    public String testMovie(){
        return "<h2>Wellcome to Spring boot Controller Component Buddy...badi mushkil se pahuche ho yha..!!</h2>";

    }

    @Autowired
    private BookingService bookingServic;

    @CrossOrigin
    @RequestMapping("/bookings")
    public java.util.List<Booking> getAllBookings() {

        return bookingServic.getAllBookings();

    }

    @CrossOrigin
    @RequestMapping("/bookings/{id}")
    public Optional<Booking> getBookings(@PathVariable String id) {

        return bookingServic.getBookings(id);
    }

    @CrossOrigin
    @RequestMapping(method=RequestMethod.POST, value= "/bookings")
    public void addBookings(@RequestBody Booking newmov) {
        bookingServic.addBookings(newmov);
    }



    @CrossOrigin
    @RequestMapping(method=RequestMethod.DELETE, value= "/bookings/{id}")
    public void deleteBookings(@PathVariable String id) {
        bookingServic.deleteBookings(id);
    }


    @CrossOrigin
    @RequestMapping(method=RequestMethod.PUT,value="/bookings/{id}")
    public void updateBookings(@RequestBody Booking updatedMov, @PathVariable String id) {
        bookingServic.updateBookings(updatedMov,id);
    }





}








