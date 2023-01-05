package shopee.service;

import shopee.entity.AccountEntity;

public interface AccountService {
    boolean checkLogin(String email, String password);
    AccountEntity checkLogin(String email);
}
