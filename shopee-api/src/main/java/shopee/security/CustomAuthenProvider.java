package shopee.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import shopee.entity.AccountEntity;
import shopee.service.AccountService;

@Component
public class CustomAuthenProvider implements AuthenticationProvider {

    @Autowired
    AccountService accountService;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        System.out.println("kiem tra " + username + " + " + password );
        AccountEntity account = accountService.checkLogin(username);

        if (account != null){
            boolean isPasswordMatched = passwordEncoder.matches(password, account.getPassword());
            if (isPasswordMatched){
                return new UsernamePasswordAuthenticationToken(account.getEmail(), account.getPassword());
            }else {
                return null;
            }
        }else {
            return null;
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
