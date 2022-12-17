package shopee.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import shopee.shopee.model.AccountModel;
import shopee.shopee.model.AccountModelRowMapper;
import shopee.shopee.repository.AccountRepository;

import java.util.List;

@Repository
public class AccountRepositoryImp implements AccountRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<AccountModel> getListAccount() {
        List<AccountModel> accounts = jdbcTemplate.query("select * from account", new AccountModelRowMapper());
        return accounts;
    }
}
