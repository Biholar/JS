"use strict";
function NormalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function NormalizeUrl(url) {
  if (!url.includes("http://")) url = "http://" + url;
  return url;
}

function NormalizeDescription(desc) {
  if (desc.length > 15) desc = desc.slice(0, 14) + "...";
  return desc;
}

function NormalizeDate(date) {
  return moment(date).format("YYYY MMMM DD, hh:mm:ss");
}

function Normalize() {
  this.map((x) => {
    x.name = NormalizeName(x.name);
    x.url = NormalizeUrl(x.url);
    x.description = NormalizeDescription(x.description);
    x.date = NormalizeDate(x.date);
    x.isVisible = x.params.status;
    x.params = x.params.status + " => " + x.params.progress;
  });
  return data;
}

(function () {
  let clearData = JSON.parse(JSON.stringify(data));
  clearData.normalize = Normalize;
  clearData.normalize();

  let btn = document.getElementById("play"),
    firstBlock = document.querySelector("#first-line"),
    secondBlock = document.querySelector("#second-line"),
    thirdBlock = document.querySelector("#third-line");

  function init() {
    let UserChoise = document.getElementById("type-selector").value;
    let c = document.getElementById("line-selector").value;

    document.querySelector(".first-group").classList.remove("show");
    document.querySelector(".second-group").classList.remove("show");
    document.querySelector(".third-group").classList.remove("show");

    if (UserChoise == 1) {
      document.querySelector(".first-group").classList.add("show");
      document.querySelector(".second-group").classList.add("hide");
      document.querySelector(".third-group").classList.add("hide");
      var replaceItemTemplate =
        '<div class="col-sm-3 col-xs-6">\
        <img src="$url" alt="$name" class="img-thumbnail">\
        <div class="info-wrapper">\
        <div class="text-muted">$name</div>\
        <div class="text-muted top-padding">$description</div>\
        <div class="text-muted">$date</div>\
        </div>\
        </div>';
      let resultHTML = "";

      for (let i = 0; i < c; i++) {
        resultHTML += replaceItemTemplate
          .replace(/\$name/gi, clearData[i].name)
          .replace("$url", clearData[i].url)
          .replace("$description", clearData[i].description)
          .replace("$date", clearData[i].date);
      }
      firstBlock.innerHTML = resultHTML;
    } else if (UserChoise == 2) {
      document.querySelector(".first-group").classList.add("hide");
      document.querySelector(".second-group").classList.add("show");
      document.querySelector(".third-group").classList.add("hide");
      let resultHTML = "";
      for (let i = 0; i < c; i++) {
        resultHTML += `<div class="col-sm-3 col-xs-6">\
        <img src="${clearData[i].url}" alt="${clearData[i].name}" class="img-thumbnail">\
        <div class="info-wrapper">\
            <div class="text-muted">${clearData[i].name}</div>\
            <div class="text-muted top-padding">${clearData[i].description}</div>\
            <div class="text-muted">${clearData[i].date}</div>\
        </div>\
        </div>`;
      }
      secondBlock.innerHTML = resultHTML;
    } else if (UserChoise == 3) {
      document.querySelector(".first-group").classList.add("hide");
      document.querySelector(".second-group").classList.add("hide");
      document.querySelector(".third-group").classList.add("show");
      thirdBlock.innerHTML = "";

      for (let i = 0; i < c; i++) {
        let div = document.createElement("div"),
          img = document.createElement("img"),
          cardBody = document.createElement("div"),
          divTxt1 = document.createElement("div"),
          divTxt2 = document.createElement("div"),
          divTxt3 = document.createElement("div");

        div.setAttribute("class", "col-sm-3 col-xs-6");
        cardBody.setAttribute("class", "info-wrapper");
        divTxt1.setAttribute("class", "text-muted");
        divTxt2.setAttribute("class", "text-muted top-padding");
        divTxt3.setAttribute("class", "text-muted");
        img.setAttribute("class", "img-thumbnail");
        divTxt1.textContent = clearData[i].name;
        divTxt2.textContent = clearData[i].description;
        divTxt3.textContent = clearData[i].date;

        div.appendChild(img);
        cardBody.appendChild(divTxt1);

        cardBody.appendChild(divTxt2);
        cardBody.appendChild(divTxt3);
        div.appendChild(cardBody);

        img.setAttribute("src", clearData[i].url);

        thirdBlock.appendChild(div);
      }
    }
  }

  btn.addEventListener("click", init);
})();
