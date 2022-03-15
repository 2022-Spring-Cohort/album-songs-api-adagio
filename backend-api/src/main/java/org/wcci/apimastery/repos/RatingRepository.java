package org.wcci.apimastery.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entities.Rating;

public interface RatingRepository extends CrudRepository <Rating, Long> {
}
