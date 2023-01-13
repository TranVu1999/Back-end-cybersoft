package shopee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shopee.entity.BannerEntity;
import shopee.repository.BannerRepository;

import java.util.List;
@Service
public class BannerServiceImp implements BannerService{
    @Autowired
    BannerRepository bannerRepository;
    @Override
    public List<BannerEntity> getAllBannerAndOrderByPriorityAsc() {
        List<BannerEntity> bannerEntities = bannerRepository.findAllByOrderByPriorityAsc();
        return bannerEntities;
    }
}
