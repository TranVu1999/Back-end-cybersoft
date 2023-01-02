package shopee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shopee.entity.AccountEntity;
import shopee.repository.AccountRepository;

import java.util.List;
@Service
public class AccountServiceImp implements AccountService{
    @Autowired
    AccountRepository accountRepository;
    @Override
    public boolean checkLogin(String email, String password) {
        List<AccountEntity> accountList = accountRepository.findByEmailAndPassword(email, password);
        System.out.println(accountList.size());
        return accountList.size() > 0;
    }
}
