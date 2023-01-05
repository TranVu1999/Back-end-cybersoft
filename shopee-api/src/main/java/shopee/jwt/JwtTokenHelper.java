package shopee.jwt;

import com.google.gson.Gson;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Component
public class JwtTokenHelper {
    private final String strKey = "JUMqRi1KYU5kUmdValhuMnI1dTh4L0E/RChHK0tiUGU="; // strKey dung de ma hoa secretKey
    private SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(strKey));
    private Gson gson = new Gson();

    public String generateToken(String data, String type, long expiredDate){
        Date now = new Date();
        Date dateExpired = new Date(now.getTime() + expiredDate);

        Map<String, Object> subjectData = new HashMap<>();
        subjectData.put("username", data);
        subjectData.put("type", type);

        String json = gson.toJson(subjectData);
        return Jwts.builder()
                .setSubject(json) // luu tru data vao token
                .setIssuedAt(now) // thoi diem tao token
                .setExpiration(dateExpired) // tao thoi gian het han cho token
                .signWith(secretKey, SignatureAlgorithm.HS256) // quy dinh kieu ma hoa cung voi key
                .compact(); // cuoi cung tra ra 1 chuoi json kieu String
    }

    public String decodeToken(String token){
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody().getSubject(); // lấy data đã chuyển thành token ở trên ngoài ra còn .getIssuedAt, .getExpiration
    }

    public boolean validateToken(String token){
        boolean isSuccess = false;
        try {
            Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token);
            isSuccess = true;
        }catch (MalformedJwtException ex) {
            System.out.println("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            System.out.println("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            System.out.println("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            System.out.println("JWT claims string is empty.");
        }
        return isSuccess;
    }
}
