package shopee.shopee.repository;

import org.springframework.stereotype.Repository;
import shopee.shopee.model.AccountModel;

import java.util.List;

@Repository
public interface AccountRepository {
    List<AccountModel> getListAccount();
}
