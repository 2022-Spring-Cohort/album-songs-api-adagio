package org.wcci.apimastery.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entities.Comment;

public interface CommentRepository extends CrudRepository<Comment, Long> {
}
