package shopee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import shopee.entity.CategoryEntity;
import shopee.repository.CategoryRepository;

import java.util.List;

@Repository
public class CategoryServiceImp implements CategoryService{

    @Autowired
    CategoryRepository categoryRepository;
    @Override
    public List<CategoryEntity> getAllCategory() {

        List<CategoryEntity> categoryEntities = categoryRepository.findAll();
        return categoryEntities;
    }

    @Override
    public List<CategoryEntity> getTopCategory(Pageable pageable) {

        List<CategoryEntity> categoryEntities = categoryRepository.getTopCategory(pageable);
        return categoryEntities;
    }

    @Override
    public List<CategoryEntity> getCategoryWithLevel1(int level) {
        List<CategoryEntity> categoryEntities = categoryRepository.findByLevelOrderByCategoryIdAsc(level);
        return categoryEntities;
    }




}
