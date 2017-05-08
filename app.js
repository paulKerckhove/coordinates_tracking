

// Test values

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
    lon: 11,
    time: 1484847603027
  }
];



const gpsPoint = {
  lat: 25,
  lon: 22,
  time: 1484847603028
};




/**
 * function that checks if gpsTrack is in the square formed by @pointNorthWest and @pointSouthEast
 * @param {object} pointNorthWest - Point on the top-left corner
 * @param {object} pointSouthEast - Point on the bottom-left corner
 * @param {object} gpsTrack - User's position
 * @returns {boolean} Returns true if gpsTrack is in the square or false if gpsTrack is out of it
 */

function trackEntersTheBox(pointNorthWest, pointSouthEast, gpsTrack) {
  return (gpsTrack.lat >= pointNorthWest.lat && gpsTrack.lat <= pointSouthEast.lat && gpsTrack.lon <= pointNorthWest.lon && gpsTrack.lon >= pointSouthEast.lon)
}
console.log(trackEntersTheBox(pointNorthWest, pointSouthEast, gpsTrack));




/**
 * function that checks if the gps track is in the square formed by pointNorthWest and pointSouthEast
 * @param {object} pointNorthWest - Point on the top-left corner
 * @param {object} pointSouthEast - Point on the bottom-left corner
 * @param {array} gpsTracks - A set of GPS coordinates with a timestamp for each point
 * @returns {boolean} Returns true if the tracks are in the square or false if out of it
 */

function trackIsInTheBox(gpsTracks, pointNorthWest, pointSouthEast) { 
  return gpsTracks.filter(trackEntersTheBox.bind(null, pointNorthWest, pointSouthEast)).length == gpsTracks.length
}
// console.log(trackIsInTheBox(gpsTracks, pointNorthWest, pointSouthEast));




/**
 * function that returns the minimum distance between a point and a gps track 
 * @param {object} gpsPoint - A gps track 
 * @param {object} gpsTrack - User's position
 * @returns {number} Returns the minimum distance between two points
 * I used the formula to calculte the distance between two points
 * I'm using the same array (gpsTracks) to test it 
 */

let calculateDistanceBetweenLatandLon = function(a, b) {
  return Math.sqrt(((b.lat - a.lat) * (b.lat - a.lat) + (b.lon - a.lon) * (b.lon - a.lon)))
}

function getDistanceBetweenPointAndNearestGpsPoint(gpsTrack, gpsPoint) {
  return Math.min.apply(null, gpsTracks.map(calculateDistanceBetweenLatandLon.bind(null, gpsPoint)))
}
// console.log("the minimum distance is : " , getDistanceBetweenPointAndNearestGpsPoint(gpsTracks, gpsPoint));
