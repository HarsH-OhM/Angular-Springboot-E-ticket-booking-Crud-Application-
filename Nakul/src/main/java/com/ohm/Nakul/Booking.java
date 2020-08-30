package com.ohm.Nakul;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Booking {



    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String phone;
    private String address;
    private String source;
    private String destination;
    private String date;

    public Booking() {
        //default constructor.
    }

    public Booking(String firstName, String lastName, String emailId, String phone, String address, String source, String destination, String date) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.phone = phone;
        this.address = address;
        this.source = source;
        this.destination = destination;
        this.date = date;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }




}
