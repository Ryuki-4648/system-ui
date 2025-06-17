const includeSidenavi = new XMLHttpRequest();
includeSidenavi.open("GET", "include/sidenavi.html", true);
includeSidenavi.onreadystatechange = function () {
  if (includeSidenavi.readyState === 4 && includeSidenavi.status === 200) {
    const sidenaviHTML = includeSidenavi.responseText;
    const sidenavi = document.querySelector("#sidenavi");
    sidenavi.insertAdjacentHTML("afterbegin", sidenaviHTML);
  }
};
includeSidenavi.send();