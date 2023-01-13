package shopee.service;

import org.springframework.data.domain.Pageable;
import shopee.entity.CategoryEntity;

import java.util.List;

public interface CategoryService {
    List<CategoryEntity> getAllCategory();
    List<CategoryEntity> getTopCategory(Pageable pageable);
    List<CategoryEntity> getCategoryWithLevel1(int level);
}
