package shopee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shopee.entity.BannerEntity;
import shopee.service.BannerService;

import java.util.List;

@RestController
@RequestMapping("/hero-banner")
public class GetBannerController {
    @Autowired
    BannerService bannerService;
    @GetMapping("")
    public ResponseEntity<?> getBannerWithPriority(){
        List<BannerEntity> bannerEntities = bannerService.getAllBannerAndOrderByPriorityAsc();
        return new ResponseEntity<>(bannerEntities, HttpStatus.OK);
    }
}
