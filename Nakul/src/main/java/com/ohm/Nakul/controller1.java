package com.ohm.Nakul;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller1 {

    @RequestMapping("/greet")
    public String Greet(){
        return "<h2>Wellcome to Spring boot Buddy...badi mushkil se pahuche ho yha..!!</h2>";
    }

    @RequestMapping("/search2")
    public  String getMovies(){

          return "<h2>hanji so which movie you want to watch....wait for sometime...coming soon</h2>";

    }

//    this controller is just for checking



}
