package shopee.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @GetMapping("/test")
    public String test(){
        return "asdasd";
    }
    @PostMapping("")
    public ResponseEntity<?> signin(){



        return new ResponseEntity<>("AAA", HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
