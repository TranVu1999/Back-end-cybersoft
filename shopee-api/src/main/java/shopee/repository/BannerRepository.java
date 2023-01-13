package shopee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shopee.entity.BannerEntity;

import java.util.List;
@Repository
public interface BannerRepository extends JpaRepository<BannerEntity, Integer> {

    List<BannerEntity> findAllByOrderByPriorityAsc();
}
