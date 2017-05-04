let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let index = require('./routes/index');
let fs = require('fs');
let app = express();


/*
 trackEntersTheBox(gpsTrack, pointNorthWest, pointSouthEast) :
 Vérifie si la trace GPS entre dans le carré formé par pointNorthWest et pointSouthEast
*/




const pointNorthWest = {
    lat : 5,
    lon : 20
};

const gpsTrack = {
    lat : 18,
    lon : 2
};

const pointSouthEast = {
    lat : 20,
    lon : 5
};


let trackEntersTheBox = function (gpsTrack, pointNorthWest, pointSouthEast){
  return (gpsTrack.lat >= pointNorthWest.lat && gpsTrack.lat <= pointSouthEast.lat && gpsTrack.lon <= pointNorthWest.lon && gpsTrack.lon >= pointSouthEast.lon)
}

console.log(trackEntersTheBox(gpsTrack, pointNorthWest, pointSouthEast));


// gpsTrack.lat >= pointNorthWest.lat && gpsTrack.lat <= pointSouthEast.lat && gpsTrack.lon >= pointNorthWest.lon && gpsTrack.lon <= pointSouthEast.lon
