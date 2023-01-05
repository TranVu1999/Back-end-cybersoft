package shopee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shopee.entity.AccountEntity;


import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer> {
    List<AccountEntity> findByEmailAndPassword(String email, String password);
    List<AccountEntity> findByEmail(String email);

}
