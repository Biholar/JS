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

let normData = JSON.parse(JSON.stringify(data));
normData.normalize = Normalize;
normData.normalize();

let imgCount = 0;
let imgStorage = window.localStorage;

let btn = document.getElementById("play"),
  imageBlock = document.querySelector("#image-block"),
  sortSelect = document.getElementById("SortSelect");

if (imgStorage.getItem("Sorted")) sort(imgStorage.getItem("Sorted"));
imgStorage.clear();

headRefreash();

function addImg(img) {
  imageBlock.innerHTML += `<div class="col-sm-3 col-xs-6">\
    <img src="${img.url}" alt="${img.name}" class="img-thumbnail">\
    <div class="info-wrapper">\
        <div class="text-muted">${img.name}</div>\
        <div class="text-muted top-padding">${img.description}</div>\
        <div class="text-muted">${img.date}</div>\
        <div class="btn-danger" id = "${img.name}">Видалити</div>
    </div>\
    </div>`;
}

function add() {
  if (imgCount++ < normData.length) {
    for (let i = 0; i < normData.length; i++) {
      if (!imgStorage.getItem(normData[i].name)) {
        addImg(normData[i]);
        imgStorage.setItem(normData[i].name, normData[i].name);

        break;
      }
    }

    headRefreash();

    if (imgCount === normData.length) {
      btn.style.backgroundColor = "#6a6a6a";
      btn.style.borderColor = "#2a2a2a";
    }
  } else {
    popupinfo.style.display = "block";
    document.body.classList.add("active");
    back.style.display = "none";
  }
}

function hide() {
  popupinfo.style.display = "none";
  document.body.classList.remove("active");
  back.style.display = "block";
}

btn.addEventListener("click", add);
document.getElementById("close").addEventListener("click", hide);

imageBlock.onclick = function (event) {
  if (event.target.className !== "btn-danger") return;

  event.target.closest(".col-sm-3.col-xs-6").remove();
  imgStorage.removeItem(event.srcElement.id);
  console.log(imgStorage);

  if (imgCount-- === normData.length) {
    btn.style.backgroundColor = "#337ab7";
    btn.style.borderColor = "#2e6da4";
  }

  headRefreash();
};

function headRefreash() {
  document.getElementsByTagName(
    "h3"
  )[1].textContent = `Завантажено ${imgCount}\\${normData.length} зображень`;

  if (imgCount === 0) {
    sortSelect.classList.remove("show");
    sortSelect.classList.add("hide");
  } else {
    sortSelect.classList.remove("hide");
    sortSelect.classList.add("show");
  }
}

function listSort(list, field) {
  list.sort((a, b) => (a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0));
}

function reversSort(list, field) {
  list.sort((a, b) => (a[field] < b[field] ? 1 : b[field] < a[field] ? -1 : 0));
}

function sort(sortType) {
  let sortedList = [];
  for (let i = 0; i < normData.length; i++)
    if (imgStorage.getItem(normData[i].name)) {
      sortedList.push(normData[i]);
    }

  switch (sortType) {
    case "1":
      listSort(sortedList, "name");
      break;
    case "-1":
      reversSort(sortedList, "name");
      break;
    case "2":
      listSort(sortedList, "date");
      break;
    case "-2":
      reversSort(sortedList, "date");
      break;
  }

  imageBlock.innerHTML = "";

  for (let img in sortedList) addImg(sortedList[img]);

  imgStorage.setItem("Sorted", sortType);
  imgCount = sortedList.length;
}

document.getElementById("sort").addEventListener("click", function () {
  sort(document.getElementById("sort-type").value);
});
