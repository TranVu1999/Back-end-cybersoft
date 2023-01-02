package shopee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shopee.payload.request.SignInRequest;
import shopee.payload.response.DataResponse;
import shopee.service.AccountService;


@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    AccountService accountService;
    @GetMapping("/test")
    public String test(){
        return "asdasd";
    }
    @PostMapping("")
    public ResponseEntity<?> signin(@RequestBody SignInRequest signInRequest){
        DataResponse dataResponse = new DataResponse();
        dataResponse.setStatus(HttpStatus.OK.value());
        dataResponse.setDescription("");
        System.out.println(signInRequest.getEmail());
        System.out.println(signInRequest.getPassword());
        dataResponse.setData("");
        dataResponse.setSuccess(accountService.checkLogin(signInRequest.getEmail(), signInRequest.getPassword()));


        return new ResponseEntity<>(dataResponse, HttpStatus.OK);
    }

}
