const puppeteer = require("puppeteer");

/* const firebaseConfig = {
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
const database = firebase.database(); */

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: false
  });
  const page = await browser.newPage();

  /* await page.setRequestInterception(true);
  page.on("request", interceptedRequest => {
    if (interceptedRequest.resourceType() == "image") {
      console.log(interceptedRequest, "======");
      interceptedRequest.continue();
    } else {
      interceptedRequest.abort();
    } */
  /* if (interceptedRequest.url().endsWith('.png') || interceptedRequest.url().endsWith('.jpg'))
      interceptedRequest.abort();
    else
      interceptedRequest.continue(); */
  /*   }); */
  await page.goto(
    "https://www.google.com/maps/place/Aguada+Fort/@15.492457,73.7738906,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMtO6F8Ni_a7ppfg07eOzBiPGZVPRshBDZsSfFf!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMtO6F8Ni_a7ppfg07eOzBiPGZVPRshBDZsSfFf%3Dw160-h120-k-no!7i4032!8i3024!4m5!3m4!1s0x3bbfc175c68cbd6b:0xa3837630b3697b1c!8m2!3d15.4925631!4d73.7731561"
  );
  // await page.screenshot({ path: "google.png" });
  console.log("Waiting....");
  //await page.waitForSelector(".gallery-image-high-res .loaded");
  await page.addScriptTag({
    url: "https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"
  });
  await page.addScriptTag({
    url: "https://www.gstatic.com/firebasejs/7.6.1/firebase.js"
  });
  const jsHandle = await page
    .evaluate(async () => {
      /* */
      let arr = [];

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
      console.log(firebase, "FIREBASE");
      const database = firebase.database();
      function ScrollAndGetNodes() {
        console.log("scrolling");
        let elementToScroll = document.getElementsByClassName(
          "section-layout section-scrollbox scrollable-y scrollable-show"
        )[0];
        elementToScroll.scrollTo({
          top: 100000,
          left: 0,
          behavior: "smooth"
        });
        arr = document.querySelectorAll(".gallery-image-high-res.loaded");

        arr.forEach(elem => {
          let $string = elem.style.backgroundImage.split('"');
          database.ref(`aguada_fort/`).push({
            url: $string[1]
          });
          console.log($string[1]);
        });
        /* console.log(
        "arr inside",
        document.querySelectorAll(".gallery-image-high-res.loaded")
      ); */
      }
      //console.log("scrolling");
      /*  while (arr.length <= 100) {
       setTimeout(ScrollAndGetNodes, 500);
     } */
      if (arr.length <= 100) {
        setInterval(ScrollAndGetNodes, 2000);
      }

      /*  setTimeout(() => {
      new Promise((resolve, reject) => {
        console.log("Inside promise", 9007199254740991);

        
        resolve(true);
      }).then(() => {
        console.log("inside then");
        //document.querySelectorAll(".gallery-image-high-res.loaded");
        console.log(
          "arr inside",
          document.querySelectorAll(".gallery-image-high-res.loaded")
        );
      });
    }, 4000); */

      /*  const $selector = document.querySelectorAll(
      ".gallery-image-high-res.loaded"
    );
    console.log("Logging", $selector); */
      return arr;
    })
    .then(res => {
      console.log("RES is", res);
    });
  /*   await page.waitForSelector(".gallery-image-high-res.loaded");
  page
    .$$(".gallery-image-high-res.loaded")
    .then(res => {
      console.log("Results,", res);
    })
    .catch(e => {
      console.log("ERR", e);
    }); */
  /*   console.log("JSHANDLE", arr);
  const result = await page.evaluate(e => {
    console.log("E=>", e);
    console.log("e[0]=>", e[0]);
    //e[0].innerHTML;
  }, jsHandle); */
  //console.log(result);
  //await browser.close();
  console.log(jsHandle);
})();
