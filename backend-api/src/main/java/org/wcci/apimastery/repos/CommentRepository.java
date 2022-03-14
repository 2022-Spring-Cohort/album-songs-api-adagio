package org.wcci.apimastery.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entities.Comments;

public interface CommentRepository extends CrudRepository<Comments, Long> {
}
