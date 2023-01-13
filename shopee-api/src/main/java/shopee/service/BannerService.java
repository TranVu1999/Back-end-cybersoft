package shopee.service;

import shopee.entity.BannerEntity;

import java.util.List;

public interface BannerService {
    List<BannerEntity> getAllBannerAndOrderByPriorityAsc();
}
