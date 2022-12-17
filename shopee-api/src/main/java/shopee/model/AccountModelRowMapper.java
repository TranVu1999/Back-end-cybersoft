package shopee.model;

import org.springframework.jdbc.core.RowMapper;
import shopee.shopee.model.AccountModel;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountModelRowMapper implements RowMapper<shopee.shopee.model.AccountModel> {
    @Override
    public shopee.shopee.model.AccountModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        shopee.shopee.model.AccountModel accountModel = new AccountModel();

        accountModel.setAccountId(rs.getInt("account_id"));
        accountModel.setPassword(rs.getString("password"));
        accountModel.setEmail(rs.getString("email"));

        return accountModel;
    }
}
