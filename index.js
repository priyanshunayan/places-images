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
    args: ["--no-sandbox", '--disable-setuid-sandbox'],
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
    "https://www.google.com/maps/place/Azad+Maidan/@15.500124,73.8261919,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNEtxfaIxjH3SACtq2i3GzZyFgLc7cwa2JjO_UI!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNEtxfaIxjH3SACtq2i3GzZyFgLc7cwa2JjO_UI%3Dw224-h298-k-no!7i3456!8i4608!4m5!3m4!1s0x3bbfc0893c21dc7f:0x565baf15933571ea!8m2!3d15.500124!4d73.8261919"
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
      const script1 = document.createElement('script');
      script1.src = "https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js";
      document.getElementsByTagName('head')[0].appendChild(script1);
      const script2 = document.createElement('script');
      script2.src = "https://www.gstatic.com/firebasejs/7.6.1/firebase.js";
      document.getElementsByTagName('head')[0].appendChild(script2);
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
        for (let i = 0; i < 1000000000; i++) {};
        elementToScroll.scrollBy({
          top: 5000,
          left: 0,
          behavior: "smooth"
        });
        arr = document.querySelectorAll(".gallery-image-high-res.loaded");
        console.log(arr.length);
        arr.forEach(elem => {
          let $string = elem.style.backgroundImage.split('"');
          let data = $string[1].split("/");

          if (data.length > 4) {
            //console.log(data);
            let key = data[4].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            const updates = {};
            updates[key] = $string[1];
            database.ref(`church_of_st_francis_of_assisi_goa/`).update(updates);
          }

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
      setInterval(ScrollAndGetNodes, 4000);

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
