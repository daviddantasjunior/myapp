import Dexie from 'dexie';

export class AppDatabase extends Dexie {

    movies: Dexie.Table<Movie, number>;

    constructor() {

        super("mini_netflix");

        var db = this;

        //
        // Define tables and indexes
        //
        db.version(1).stores({
            movies: '++id, name, hind',
        });

        // Let's physically map Movie class to movies table.
        // This will make it possible to call loadEmailsAndPhones()
        // directly on retrieved database objects.
        db.movies.mapToClass(Movie);
    }
}

export class Movie {
    id: number;
    name: string;
    hind: string;

    constructor(name: string, hind: string, id?:number) {
        this.name = name;
        this.hind = hind;
        if (id) this.id = id;
    }


    save() {
        return db.transaction('rw', db.movies, async () => {

            // Add or update our selves. If add, record this.id.
            this.id = await db.movies.put(this);
        });
    }
}

export var db = new AppDatabase();
