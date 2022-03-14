package org.wcci.apimastery.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entities.Ratings;

public interface RatingRepository extends CrudRepository <Ratings, Long> {
}
