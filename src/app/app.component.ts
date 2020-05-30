import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { Country } from './models/country.model';
import { DexieService } from './services/dexie.service';
import { GenreService } from './services/genre.service';
import { Genre } from './models/genre.model';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';

  constructor(
    private dexieService: DexieService,
    private countryService: CountryService,
    private genreService: GenreService,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    // Populates the database only when it is created
    this.populateDB();
  }

  populateDB() {
    this.dexieService.on('populate', () => {
      // Countries
      this.countryService.add(new Country('Brazil', null));
      this.countryService.add(new Country('France', null));
      this.countryService.add(new Country('Germany', null));
      this.countryService.add(new Country('Italy', null));
      this.countryService.add(new Country('Spain', null));
      this.countryService.add(new Country('United State', null));
      // Genres
      this.genreService.add(new Genre('Action', 1));
      this.genreService.add(new Genre('Adventure', 2));
      this.genreService.add(new Genre('Drama', 3));
      // Movies
      this.movieService.add(new Movie(
        'Bad Boys for Life',
        'Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/badboys-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/badboys.mp4',
        1,
        null
      ));
      this.movieService.add(new Movie(
        'Birds of Prey',
        'Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/birdsofprey-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/birdsofprey.mp4',
        1,
        null
      ));
      this.movieService.add(new Movie(
        'Extraction',
        'Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/extraction-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/extraction.mp4',
        1,
        null
      ));
      this.movieService.add(new Movie(
        'Ford v Ferrari',
        'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/fordferrari-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/fordferrari.mp4',
        1,
        null
      ));
      this.movieService.add(new Movie(
        'Inception',
        'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/inception-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/inception.mp4',
        1,
        null
      ));

      this.movieService.add(new Movie(
        'Avengers: Infinity War',
        'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/avengers-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/avengers.mp4',
        2,
        null
      ));
      this.movieService.add(new Movie(
        'Deadpool 2',
        'Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy\'s life.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/deadpool-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/deadpool.mp4',
        2,
        null
      ));
      this.movieService.add(new Movie(
        'Mission: Impossible - Fallout',
        'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
        'http://mini-netflix.s3-sa-east-1.amazonaws.com/images/mission-image2.jpg',
        'http://mini-netflix.s3-sa-east-1.amazonaws.com/videos/mission.mp4',
        2,
        null
      ));
      this.movieService.add(new Movie(
        'Spider-Man: Far from Home',
        'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/spiderman-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/spiderman.mp4',
        2,
        null
      ));
      this.movieService.add(new Movie(
        'Thor: Ragnarok',
        'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/thor-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/thor.mp4',
        2,
        null
      ));

      this.movieService.add(new Movie(
        '1917',
        'At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/1917-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/1917.mp4',
        3,
        null
      ));
      this.movieService.add(new Movie(
        'Interstellar',
        'Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/interstellar-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/interstellar.mp4',
        3,
        null
      ));
      this.movieService.add(new Movie(
        'Joker',
        'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/joker-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/joker.mp4',
        3,
        null
      ));
      this.movieService.add(new Movie(
        'Parasite',
        'All unemployed, Ki-taek\'s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/parasite-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/parasite.mp4',
        3,
        null
      ));
      this.movieService.add(new Movie(
        'The Call of the Wild',
        'Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/images/thecall-image2.jpg',
        'https://mini-netflix.s3-sa-east-1.amazonaws.com/videos/thecall.mp4',
        3,
        null
      ));
    });
  }
}
