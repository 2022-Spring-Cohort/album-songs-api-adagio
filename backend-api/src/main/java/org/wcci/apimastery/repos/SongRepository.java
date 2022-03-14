package org.wcci.apimastery.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entities.Songs;

public interface SongRepository extends CrudRepository<Songs, Long> {
}
