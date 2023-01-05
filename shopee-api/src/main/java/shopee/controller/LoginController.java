package shopee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import shopee.jwt.JwtTokenHelper;
import shopee.payload.request.SignInRequest;
import shopee.payload.response.DataResponse;
import shopee.payload.response.DataTokenResponse;
import shopee.service.AccountService;


@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    AccountService accountService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtTokenHelper jwtTokenHelper;
    private long expiredDate = 8 * 60 * 60 * 1000; // đổi 8 tiếng ra mili giây
    private long refreshExpiredDate = 80 * 60 * 60 * 1000; // đổi 8 tiếng ra mili giây

    @GetMapping("/test")
    public String test(){
        return "This Page is used to check authen request";
    }
    @PostMapping("")
    public ResponseEntity<?> signin(@RequestBody SignInRequest signInRequest){
        boolean isSuccess = false;
        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(signInRequest.getEmail(), signInRequest.getPassword());
        Authentication auth = authenticationManager.authenticate(authRequest);

        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(auth);

        String token = jwtTokenHelper.generateToken(signInRequest.getEmail(),"authen", expiredDate); // tạo token lưu username
        String refreshToken = jwtTokenHelper.generateToken(signInRequest.getEmail(),"refresh", refreshExpiredDate);
        isSuccess = true;
        DataTokenResponse dataTokenResponse = new DataTokenResponse();
        dataTokenResponse.setToken(token);
        dataTokenResponse.setRefreshToken(refreshToken);

        DataResponse dataResponse = new DataResponse();
        dataResponse.setStatus(HttpStatus.OK.value());
        dataResponse.setDescription("");
        dataResponse.setData(dataTokenResponse);
        dataResponse.setSuccess(isSuccess);
//        dataResponse.setSuccess(accountService.checkLogin(signInRequest.getEmail(), signInRequest.getPassword()));

        return new ResponseEntity<>(dataResponse, HttpStatus.OK);
    }

}
