package shopee.shopee.model;

import lombok.Data;

import java.sql.ResultSet;
import java.sql.SQLException;

@Data
public class AccountModel {
    private int accountId;
    private String email;
    private String password;
}
