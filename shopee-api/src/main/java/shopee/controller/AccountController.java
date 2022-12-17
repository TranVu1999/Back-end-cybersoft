package shopee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shopee.shopee.model.AccountModel;
import shopee.shopee.repository.AccountRepository;

import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    AccountRepository accountRepository;

    @GetMapping("")
    public ResponseEntity<?> getListAccount() {
        List<AccountModel> accounts = accountRepository.getListAccount();
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }
}
