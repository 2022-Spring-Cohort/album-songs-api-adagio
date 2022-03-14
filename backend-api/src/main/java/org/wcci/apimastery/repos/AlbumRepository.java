package org.wcci.apimastery.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entities.Albums;

public interface AlbumRepository extends CrudRepository <Albums, Long>{
}
