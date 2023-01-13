package shopee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shopee.entity.CategoryEntity;
import shopee.payload.response.GetAllCategoryResponse;
import shopee.service.CategoryService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    CategoryService categoryService;
    @GetMapping("")
    public ResponseEntity<?> getAllCategoryLevel1(){
//        Pageable pageable = PageRequest.of(0,5);
        List<CategoryEntity> categoryEntities = categoryService.getCategoryWithLevel1(1);
        GetAllCategoryResponse categoryResponse = new GetAllCategoryResponse();
        categoryResponse.setStatus(HttpStatus.OK.value());
        if (categoryEntities.size() > 0){

            categoryResponse.setSuccess(true);
            categoryResponse.setMessage("successful");
            categoryResponse.setData(categoryEntities);
        }else {

            categoryResponse.setSuccess(false);
            categoryResponse.setMessage("fail");
            categoryResponse.setData("empty data");
        }
        return new ResponseEntity<>(categoryResponse, HttpStatus.OK);
    }
}
