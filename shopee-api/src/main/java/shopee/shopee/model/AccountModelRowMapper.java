package shopee.shopee.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountModelRowMapper implements RowMapper<AccountModel> {
    @Override
    public AccountModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        AccountModel accountModel = new AccountModel();

        accountModel.setAccountId(rs.getInt("account_id"));
        accountModel.setPassword(rs.getString("password"));
        accountModel.setEmail(rs.getString("email"));

        return accountModel;
    }
}
