const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
(async () => {
  const browser = await puppeteer.launch({
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

  const jsHandle = await page.evaluate(async () => {
    let arr = [];

    function ScrollAndGetNodes() {
      console.log("scrolling");
      let elementToScroll = document.getElementsByClassName(
        "section-layout section-scrollbox scrollable-y scrollable-show"
      )[0];
      elementToScroll.scrollTo({
        top: 1000000,
        left: 0,
        behavior: "smooth"
      });
      arr = document.querySelectorAll(".gallery-image-high-res.loaded");
      arr.forEach(elem => {
        console.log(elem.style.backgroundImage);
      })
      /* console.log(
        "arr inside",
        document.querySelectorAll(".gallery-image-high-res.loaded")
      ); */
    }
    //console.log("scrolling");
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
  setTimeout(() => {
    console.log(jsHandle);
  }, 6000);

  /*   console.log("JSHANDLE", arr);
  const result = await page.evaluate(e => {
    console.log("E=>", e);
    console.log("e[0]=>", e[0]);
    //e[0].innerHTML;
  }, jsHandle); */
  //console.log(result);
  //await browser.close();
})();
