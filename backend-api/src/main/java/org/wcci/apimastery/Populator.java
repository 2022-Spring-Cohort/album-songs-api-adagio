package org.wcci.apimastery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.entities.Album;
import org.wcci.apimastery.entities.Song;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    AlbumRepository albumRepo;
    @Autowired
    SongRepository songRepo;


    @Override
    public void run(String... args) throws Exception {
        Album album1 = new Album("Heaven Tonight", "Cheap Trick", "http://placekitten.com/200/300","Epic Records",4.0);
        Album album2 = new Album("Nevermind","Nirvana","https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg", "DGC Records", 4.6);
        Album album3 = new Album("Channel Orange","Frank Ocean", "https://preview.redd.it/0twt7jdw3pu01.png?width=640&crop=smart&auto=webp&s=80099c3f3cd5d940c84f52f432e9ea4873a36f1d", "Def Jam Records", 5.0);
        Album album4 = new Album("Forever Young", "Alphaville", "https://i.ebayimg.com/images/g/IZkAAOSwBRlcd7-q/s-l400.jpg", "Warner Atlantic Rhino", 4.3 );
        Album album5 = new Album("Fantasy", "Landmvrks", "https://images.genius.com/08255622ffb626190c4ca43682459074.500x500x1.jpg", "Arising Empire", 4.1 );
        Album album6 = new Album("Dreamland", "Glass Animals", "https://media.pitchfork.com/photos/5f2daa5bbcc4654c5fe16cd4/1:1/w_600/dreamland_glass%20animals.jpg", "Republic", 4.5);
        Album album7 = new Album("My Beautiful Dark Twisted Fantasy", "Kanye West", "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/MBDTF_ALT.jpg/220px-MBDTF_ALT.jpg", "Def Jam Records", 4.9 );
        Album album8 = new Album("Pretty Hate Machine", "Nine Inch Nails","https://upload.wikimedia.org/wikipedia/en/f/f1/Nine_Inch_Nails_-_Pretty_Hate_Machine.png", "Bike Music", 4.7);
        Album album9 = new Album("Deadpan Love", "Cautious Clay", "https://lastfm.freetls.fastly.net/i/u/500x500/e22aae3dae8cd6585e3cd55b3eab9e52.jpg", "Independent", 4.2);
        Album album10 = new Album("Dear Catastrophe Waitress", "Belle & Sebastian", "https://belleandsebastian.com/wp-content/uploads/2017/05/DearCatastropheWaistress.jpg", "Rough Trade Records", 4.0);
        Album album11 = new Album("IV", "Led Zeppelin", "https://m.media-amazon.com/images/I/51h-cJeHf0L.jpg", "Atlantic Records", 5.0);


        albumRepo.save(album1);
        albumRepo.save(album2);
        albumRepo.save(album3);
        albumRepo.save(album4);
        albumRepo.save(album5);
        albumRepo.save(album6);
        albumRepo.save(album7);
        albumRepo.save(album8);
        albumRepo.save(album9);
        albumRepo.save(album10);
        albumRepo.save(album11);


        Song song1 = new Song("Surrender",album1,4.16,10.0);
        Song song2 = new Song("Smells Like Teen Spirit",album2,5.01,10.0);
        Song song3 = new Song("Sweet Life",album3,4.22,10.0);
        Song song4 = new Song("Big in Japan",album4,4.40,10.0);
        Song song5 = new Song("Scars",album5,4.12,10.0);
        Song song6 = new Song("Heat Waves",album6,3.58,10.0);
        Song song7 = new Song("Devil In A New Dress",album7,5.51,10.0);
        Song song8 = new Song("Head Like A Hole",album8,5.02,10.0);
        Song song9 = new Song("Wildfire",album9,2.31,10.0);
        Song song10 = new Song("Step Into My Office Baby",album10,4.12,10.0);
        Song song11 = new Song("Black Dog",album11,4.55,10.0);


        songRepo.save(song1);
        songRepo.save(song2);
        songRepo.save(song3);
        songRepo.save(song4);
        songRepo.save(song5);
        songRepo.save(song6);
        songRepo.save(song7);
        songRepo.save(song8);
        songRepo.save(song9);
        songRepo.save(song10);
        songRepo.save(song11);




    }
}