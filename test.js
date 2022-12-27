// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value !== '') {
        if (!recordCollection[id]) {
            recordCollection[id][prop] = value;
        } else {
            if (prop !== 'tracks') {
                recordCollection[id][prop] = value;
            } else if (prop === 'tracks') {
                recordCollection[id][prop] = [];
                recordCollection[id][prop].push(value);
            }
        }
    }
  
return records;
}

// console.table(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))
// console.table(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// console.table(updateRecords(recordCollection, 2548, "artist", ""));
// console.table(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// console.table(updateRecords(recordCollection, 2548, "tracks", ""));
console.table(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));