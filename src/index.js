button.onclick = function () {
  if (project_1.className == "open") {
    // read less
    project_1.className = "";
    button.innerHTML = "Show more";
  } else {
    //read more
    project_1.className = "open";
    button.innerHTML = "Show less";
  }
};
