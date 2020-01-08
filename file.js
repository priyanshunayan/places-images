var fs = require("fs"),
  request = require("request");

const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAuyruCuUsb-GQjvuuHX-QTBNKDfcKm5yE",
  authDomain: "sih2020-c52a5.firebaseapp.com",
  databaseURL: "https://sih2020-c52a5.firebaseio.com",
  projectId: "sih2020-c52a5",
  storageBucket: "sih2020-c52a5.appspot.com",
  messagingSenderId: "488560607914",
  appId: "1:488560607914:web:6030dafe76c027933846d3",
  measurementId: "G-SGEWJV8X9Q"
};
firebase.initializeApp(firebaseConfig);
//const database = firebase.database();
const download = function(uri, filename, callback) {
  request.head(uri, function(err, res, body) {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);

    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on("close", callback);
  });
};
return firebase
  .database()
  .ref("/aguada_fort/")
  .once("value")
  .then(function(snapshot) {
    Object.values(snapshot.val()).forEach((val, index) => {
      download(val.url, index, function() {
        console.log("done");
      });
      console.log(val.url);
    });
    //console.log();
  });
