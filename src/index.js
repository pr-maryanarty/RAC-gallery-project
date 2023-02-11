const project1 = document.querySelector("#project1");
const button1 = document.querySelector("#button1");

button1.addEventListener("click", readMore);

function readMore() {
  console.log();
  if (project1.className == "open") {
    // read less
    project1.className = "";
    button1.innerHTML = "Show more";
  } else {
    //read more
    project1.className = "open";
    button1.innerHTML = "Show less";
  }
}
// const project2 = document.querySelector("#project2");
// const button2 = document.querySelector("#button2");

// button2.addEventListener("click", readMore);

// function readMore() {
//   if (project2.className == "open") {
//     // read less
//     project2.className = "";
//     button2.innerHTML = "Show more";
//   } else {
//     //read more
//     project2.className = "open";
//     button2.innerHTML = "Show less";
//   }
// }
// const project3 = document.querySelector("#project3");
// const button3 = document.querySelector("#button3");

// button3.addEventListener("click", readMore);

// function readMore() {
//   if (project3.className == "open") {
//     // read less
//     project3.className = "";
//     button3.innerHTML = "Show more";
//   } else {
//     //read more
//     project3.className = "open";
//     button3.innerHTML = "Show less";
//   }
// }
// const project4 = document.querySelector("#project4");
// const button4 = document.querySelector("#button4");

// button4.addEventListener("click", readMore);

// function readMore() {
//   if (project4.className == "open") {
//     // read less
//     project4.className = "";
//     button4.innerHTML = "Show more";
//   } else {
//     //read more
//     project4.className = "open";
//     button4.innerHTML = "Show less";
//   }
// }
// const project5 = document.querySelector("#project5");
// const button5 = document.querySelector("#button5");

// button5.addEventListener("click", readMore);

// function readMore() {
//   if (project5.className == "open") {
//     // read less
//     project5.className = "";
//     button5.innerHTML = "Show more";
//   } else {
//     //read more
//     project5.className = "open";
//     button5.innerHTML = "Show less";
//   }
// }
// const project6 = document.querySelector("#project6");
// const button6 = document.querySelector("#button6");

// button6.addEventListener("click", readMore);

// function readMore() {
//   if (project6.className == "open") {
//     // read less
//     project6.className = "";
//     button6.innerHTML = "Show more";
//   } else {
//     //read more
//     project6.className = "open";
//     button6.innerHTML = "Show less";
//   }
// }
// const project7 = document.querySelector("#project7");
// const button7 = document.querySelector("#button7");

// button7.addEventListener("click", readMore);

// function readMore() {
//   if (project7.className == "open") {
//     // read less
//     project7.className = "";
//     button7.innerHTML = "Show more";
//   } else {
//     //read more
//     project7.className = "open";
//     button7.innerHTML = "Show less";
//   }
// }
