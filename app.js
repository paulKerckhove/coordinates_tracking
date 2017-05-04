


const pointNorthWest = {
    lat : 5,
    lon : 20
};

const gpsTrack = {
    lat : 10,
    lon : 10
};

const pointSouthEast = {
    lat : 20,
    lon : 5
};

const gpsTracks = [
  {
    lat: 10,
    lon: 10,
    time: 1484847603025
  },
  {
    lat: 12,
    lon: 11,
    time: 1484847603026
  },
  {
    lat: 10,
    lon: 2,
    time: 1484847603027
  }
];

const gpsPoint = {
  lat: 25,
  lon: 22,
  time: 1484847603028
};


/**
 * first function that checks if @gpsTrack is in the square shapped by @pointNorthWest and @pointSouthEast
 * @pointNorthWest {object} Point on the top-left corner.
 * @pointSouthEast {object} Point on the bottom-left corner.
 */

function trackEntersTheBox(pointNorthWest, pointSouthEast, gpsTrack){
  console.log(gpsTrack , pointNorthWest, pointSouthEast);
  return (gpsTrack.lat >= pointNorthWest.lat && gpsTrack.lat <= pointSouthEast.lat && gpsTrack.lon <= pointNorthWest.lon && gpsTrack.lon >= pointSouthEast.lon)
}

// console.log(trackEntersTheBox(pointNorthWest, pointSouthEast, gpsTrack));

function trackIsInTheBox(gpsTracks, pointNorthWest, pointSouthEast){
  return gpsTracks.filter(trackEntersTheBox.bind(null, pointNorthWest, pointSouthEast)).length == gpsTracks.length
}

// console.log(trackIsInTheBox(gpsTracks, pointNorthWest, pointSouthEast));

let calc = function(a, b){
  return Math.sqrt(((b.lat - a.lat) * (b.lat - a.lat) + (b.lon - a.lon) * (b.lon - a.lon)))
}

function getDistanceBetweenPointAndNearestGpsPoint(gpsTrack, gpsPoint){
  return Math.min.apply(null, gpsTracks.map(calc.bind(null, gpsPoint)))
}

// console.log(getDistanceBetweenPointAndNearestGpsPoint(gpsTracks, gpsPoint));
