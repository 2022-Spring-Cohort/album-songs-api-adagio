package org.wcci.apimastery.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.wcci.apimastery.entities.Album;
import org.wcci.apimastery.entities.Song;

import java.util.Optional;

public interface AlbumRepository extends CrudRepository <Album, Long>{

}
