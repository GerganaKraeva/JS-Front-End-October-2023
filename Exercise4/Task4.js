function movieInfo(array) {
    let movies = [];

    array.forEach((info) => {
        if (info.includes(`addMovie`)) {
            let movie = info.split("addMovie ")[1];
            movies.push({ name: movie });
        } else if (info.includes(`directedBy`)) {
            let [movie, director] = info.split(` directedBy `);

            let searching = movies.find((el) => el.name === movie);
            if (searching) {
                searching[`director`] = director;
            }
        } else if (info.includes(`onDate`)) {
            let [movie, date] = info.split(` onDate `);

            let searching = movies.find((el) => el.name === movie);
            if (searching) {
                searching[`date`] = date;
            }

        }

    });
    movies.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}


movieInfo([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis FordCoppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

]);
