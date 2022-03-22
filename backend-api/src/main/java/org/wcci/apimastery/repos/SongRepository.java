package org.wcci.apimastery.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entities.Song;

import java.util.Optional;

public interface SongRepository extends CrudRepository<Song, Long> {
    public Optional<Song> findByTitleIgnoreCase(String title);
}
