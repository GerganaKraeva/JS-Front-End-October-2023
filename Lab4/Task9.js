function getSongs(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = arr.shift();
    let typeSong = arr.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arr[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (typeSong === "all") {
        songs.forEach(song => console.log(song.name));
    } else {
        // songs.forEach(song => {
        //     if (song.type === typeSong) {
        //         console.log(song.name);
        //     }
        // });
        
        let filter =songs.filter(song => song.type ===typeSong);
        filter.forEach(song => console.log(song.name))
    }
}
getSongs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);