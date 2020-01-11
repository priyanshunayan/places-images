var fs = require("fs"),
  request = require("request");
const firebase = require("firebase");
var download = require("download-file");
const https = require("https");
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
/* 
function saveToDisk(url, localPath) {
  console.log("SAVEING+++++");
  const string = localPath.split("/");
  const string_name = "agoda_fort" + string[4];
  const file = fs.createWriteStream(string_name);
  const request = https.get(url, res => {
    //console.log("RES", res);
    res.pipe(file);
  });
} */

return firebase
  .database()
  .ref("/aguada_fort/")
  .once("value")
  .then(function (snapshot) {
    Object.values(snapshot.val()).forEach((val, index) => {
      console.log(val, val.url);
      const options = {
        directory: "aguada_fort/",
        filename: val.split("/")[4],
        timeout: 50000000
      };
      download(val, options, err => {
        console.log("ERRor", err, val);
      });
      /*       const options = {
        url: val,
        dest: `/agoda_fort/${val}` // Save to /path/to/dest/image.jpg
      };

      download
        .image(options)
        .then(({ filename, image }) => {
          console.log("Saved to", filename);
        })
        .catch(err => console.error(err)); */
    });
  });
