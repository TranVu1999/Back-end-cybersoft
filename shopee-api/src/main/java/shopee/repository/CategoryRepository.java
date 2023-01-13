package shopee.repository;

import org.apache.catalina.LifecycleState;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import shopee.entity.CategoryEntity;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {
    List<CategoryEntity> findAll();

    @Query("SELECT c FROM category c ORDER BY c.categoryId ASC ")
    List<CategoryEntity> getTopCategory(Pageable pageable);

    List<CategoryEntity> findByLevelOrderByCategoryIdAsc(int level);
}
