reearth.ui.show(
  `
<style>
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}

html,
body {
  margin: 0; /* Change here for your specific plugin's width */
  overflow: hidden;
}

#wrapper {
  display: block;
  gap: 20px;
  max-width: 312px;
  background: #171618;
  overflow: hidden;
  border-radius: 4px;
}
div#form-wrapper {
  margin-bottom: 18px;
  margin-left: 15px;
  margin-right: 15px;
}
p,
h3,
span,
label {
  color: #bfbfbf;
}
#title {
  font-family: "Roboto" !important;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  margin: 0px;
  height: 30px;
  background: #171618;
  border-radius: 4px 4px 0px 0px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  padding-bottom: 16px;
}
.group-div:first-child .group-title {
    margin-top: 0px;
}
.height-46 {
  height:46px;
  border-radius: 4px;
}
.section .extendedh, .extendedh { width: 100%; cursor: pointer;}
.section .extendedv, .extendedv { height: 100%; }
#wrapper { box-sizing: border-box; }
.extendedh body, .extendedh #wrapper { width: 100%; border-radius: 4px; }
.extendedv body, .extendedv #wrapper { height: 46px; min-height: 46px; overflow: hidden;}

span#logo {
  margin-right: 14px;
  margin-left: 14px;
  margin-top: 19px;
}

span#closed-logo svg {
  margin-top: 8px;
  margin-left: 8px;
}

h3#title p {
    margin-top: 27px;
}

.group-title {
  width: 100%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  margin-bottom: 12px;
  margin-top: 16px;
}
.group-title p {
  margin: 0px 8px;
}
.input-title {
  display: block;
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  padding: 9px 0px 12px 0px;
  width: 105px;
  margin: 0px;
  float: left;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
input[type="number"],
input[type="text"],
select {
  width: calc(100% - 120px);
  background: transparent;
  border: 1px solid #4a4a4a;
  height: 30px;
  color: #c7c5c5;
  font-size: 12px;
  padding-left: 7px;
  float: right;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
/* Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
*:focus {
  outline: none;
}
select {
  width: calc(100% - 110px);
}

#clean-all-fields {
  font-family: "Roboto" !important;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #3b3cd0;
  border: solid 1px #3b3cd0;
  background: transparent;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 4px;
  padding: 5px;
  margin-right: 7px;
}
#clean-all-fields,
#generate-circle, #download {
  cursor: pointer;
}

#clean-all-fields,
#generate-circle {
  width: calc(50% - 7px);
  height: 30px;
  font-family: "Roboto" !important;
  font-style: normal;
  font-weight: 400;
}

#generate-circle,
#download {
  font-family: "Roboto" !important;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  background: #3b3cd0;
  border: solid 1px #3b3cd0;
  box-shadow: 0px 2px 0px rgb(0 0 0 / 2%);
  border-radius: 4px;
  padding: 5px;
  height: 30px;
}

#download {
  width: 100%;
}
button {
  display: inline-block;
}
/* #general, #export {
    margin-top: 20px;
} */
.separator {
  display: flex;
  align-items: center;
}

.separator .line {
  height: 1px;
  flex: 1;
  background-color: #4a4a4a;
}

.separator h2 {
  padding: 0 1px;
}
#btn-wrapper {
  margin-top: 10px;
}
.form-group {
  margin: 0;
  position: static;
  display: block;
  overflow: hidden;
  height: 41px;
}
.form-group-1 {
  margin: 0;
  position: static;
  display: block;
  overflow: hidden;
}

span.maru {
  position: relative;
  left: 156px;
  top: -27px;
  font-size: 26px;
  color: #4a4a4a;
}

span.m {
  width: 12px;
height: 16px;

font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;

/* Dark/Text/weak */

color: #4A4A4A;
}
span.arrow {
  position: relative;
  left: 190px;
  top: -25px;
  font-size: 20px;
  color: #4a4a4a;
}
select {
  appearance: none;
}

select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}
#general .form-group {
  margin-bottom: 5px;
}
span#close:hover {
  cursor: pointer;
}
.down-ar:before {
  content: "";
  float: right;
  color: #595959;
  position: relative;
  top: -27px;
  right: 7px;
}
#close {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;
  left: 133px;
  top: 8px;
  color: #595959;
}
#close::after,
#close::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 1px;
}
#close::after {
  transform: rotate(-45deg);
}
span.down-ar {
  display: block;
  width: 9px;
  height: 9px;
  position: relative;
  top: -32px;
  left: 262px;
  transform: rotate(359deg);
}
@media only screen (max-width: 1440px) {
  span.down-ar {
    top: -36px !important;
  }
}
#closed-logo {
  display: none;
  overflow: hidden;
  width: 21px;
  height: 21px;
  cursor: pointer;
  margin-top: 11px;
  margin-left: 12px;
  background: #181618;
  padding: 5px;
  border-radius: 5px;
}
.select2-selection__rendered {
  width: calc(100% - 62px);
  background: #181618 !important;
  border: 1px solid #4a4a4a;
  height: 30px;
  color: #c7c5c5 !important;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px !important;
  line-height: 16px;
}
.select2-container--default {
  width: 100px !important;
}
.select2-selection__arrow {
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.5L9 0.5L4.5 5.5L0 0.5Z' fill='%234A4A4A'/%3E%3C/svg%3E%0A") center / contain no-repeat;
  color: #c7c5c5;
  /* position: absolute; */
}
.select2-results {
  margin-right: 5px;
}
.select2-results__option {
  text-align: left;
  padding-left: 32px;
}
.select2-results__options,
.select2-results__option {
    background: #181618 !important;
    width: 100%;
}
.select2-results__options {
  width: 170px;
  color: #c7c5c5 !important;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px !important;
  line-height: 16px;
  position: relative;
  align-items: center;
  border-top: 1px solid #4a4a4a;
}
.select2-results__option--highlighted {
  background: #3F3D45 !important;
  padding-left: 5px;
}
.select2-results__option--highlighted::before {
  content: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.35355 3.14645C1.15829 2.95118 0.841709 2.95118 0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L3.14645 6.35355C3.34171 6.54882 3.65829 6.54882 3.85355 6.35355L9.35355 0.853554C9.54882 0.658291 9.54882 0.341709 9.35355 0.146447C9.15829 -0.0488155 8.84171 -0.0488155 8.64645 0.146447L3.5 5.29289L1.35355 3.14645Z' fill='%23C7C5C5'/%3E%3C/svg%3E%0A");
  padding-right: 10px;
  padding-left: 6px;
}
.select2-results__option .select2-results__option--highlighted {
  background: #181618 !important;
  width: 200px;
}
.select2-search,
.select2-search--dropdown {
  display: none;
}
.select2-dropdown,
.select2-dropdown--below {
  background: #181618 !important;
  margin-left: -5px;
  margin-right: 5px;
  border-color: #3F3D45 !important;
  border-radius: 0;
  width: 172px !important;
}
.select2,
.select2-container,
.select2-container--custom-select {
  margin-left: 5px;
}
.select2-selection, .select2-selection--single {
  background: #181618 !important;
  border: none !important;
  flex-direction: row;
  display: flex;
  width: 202px !important;
}
.select2-container--default .select2-selection--single {
  background: #181618 !important;
  color: #c7c5c5 !important;
  border: none !important;
}
.select2-container .select2-selection--single .select2-selection__rendered {
  padding-left: 10px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select2-container--default .select2-results>.select2-results__options {
  overflow-x: hidden;
}
.select2-container--default .select2-selection--single .select2-selection__arrow {
  height: 46px;
  position: absolute;
  top: 0px;
  left: 156px;
  width: 20px;
  z-index: 99;
}
.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
  /* color: transparent;
  border-color: transparent !important; */
}
.select2-container--default .select2-selection--single .select2-selection__arrow b {
  color: transparent;
  border-color: transparent !important;
}
.select2-results__message {
  border-top: 1px solid #4a4a4a;
  padding-left: 0px;
  margin: auto;
  text-align: center;
}

input[type="color"] {
  -webkit-appearance: none;
  border: none;
  width: 32px;
  height: 32px;
  margin-top: 1px;
  margin-left: 4px;
  padding: 0px;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
}

input#fill-color, input#stroke-color {
    width: 130px;
  }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>

<div class="height-46" id="wrapper">
<h3 id="title">
  <span id="logo">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8C5.65685 8 7 6.65685 7 5C7 3.34315 5.65685 2 4 2C2.34315 2 1 3.34315 1 5C1 6.65685 2.34315 8 4 8Z" stroke="#BFBFBF" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" stroke="#BFBFBF" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M9.5 19C11.9853 19 14 16.9853 14 14.5C14 12.0147 11.9853 10 9.5 10C7.01472 10 5 12.0147 5 14.5C5 16.9853 7.01472 19 9.5 19Z" stroke="#BFBFBF" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
</span>
  <p class="title-p">Circle Generator</p> <span id="close" data-stt="0">
  </span>
</h3>
<div id="form-wrapper">
  <div class="group-div">
    <span id="choose-marker" class="group-title separator"
      ><div class="line"></div>
      <p>マーカーを選択</p>
      <div class="line"></div>
    </span>
    <div class="form-group-1">
      <div class="form-group">
        <label for="choose-by" class="input-title">選択方法</label>
        <select id="choose-by" onchange="getOptions()" class="custom-select-options">
          <option value="all">全て</option>
          <option value="folder">フォルダ</option>
          <option value="tag">タグ</option>
        </select>
        
      </div>

      <div id="showFolder"
        class="form-group showFolder"
        style="display: none">
        <label for="select-by" class="input-title">フォルダを選択</label>
        <select id="select-by" class="custom-select-options"></select>
      </div>

      <div id="showTag" class="form-group showTag" style="display: none">
        <div class="form-group">
          <label for="select-by" class="input-title">タグを選択</label>
          <select id="select-parent-tag" class="custom-select-options"></select>
        </div>
      </div>
    </div>
  </div>
  <div class="group-div" id="general">
    <span id="generate" class="group-title separator"
      ><div class="line"></div>
      <p>設定</p>
      <div class="line"></div
    ></span>
    <div class="form-group">
      <label for="radius" class="input-title">半径</label>
      <input type="number" id="radius" value="100" />
      <span class="maru m">m</span>
    </div>

    <div class="form-group">
      <label for="stroke-color" class="input-title">ストロークの色</label>
      <input type="color" class="color" value="#FFFFFF" onchange="changeStrokeColor(event)">
      <input type="text" id="stroke-color" value="#ffffff" onchange="changeColorPicker(this)" />
    </div>
    <div class="form-group">
      <label for="fill-color" class="input-title">塗りつぶしの色</label>
      <input type="color" class="color" value="#FFFFFF" onchange="changeFillColor(event)">
      <input type="text" id="fill-color" value="#ffffff" onchange="changeColorPicker(this)" />
    </div>

    <div class="form-group">
      <label for="fill-opacity" class="input-title">不透明度</label>
      <input type="number" id="fill-opacity" value="100" min="0" max="100" onkeyup="enforceMinMax(this)"/>
    </div>
    <div id="btn-wrapper">
      <button type="button" id="clean-all-fields" onclick="cleanAllFields()">
        すべて消去
      </button>
      <button type="submit" id="generate-circle" onclick="generateCircle()">
        円を生成
      </button>
    </div>
  </div>
  <div class="group-div" id="export">
    <span id="generate" class="group-title separator"
      ><div class="line"></div>
      <p>エクスポーター設定</p>
      <div class="line"></div
    ></span>
    <button type="submit" id="download">CZMLをエクスポート</button>
  </div>
</div>
</div>

<script>
$("#choose-by").select2({
  allowClear: false,
  minimumResultsForSearch: Infinity,
  language: {
    noResults: function () {
          return "情報は見つかりませんでした";
    }
  }
});

$("#select-by").select2({
  allowClear: false,
  minimumResultsForSearch: Infinity,
  language: {
    noResults: function () {
          return "情報は見つかりませんでした";
    }
  }
});

$("#select-parent-tag").select2({
  allowClear: false,
  minimumResultsForSearch: Infinity,
  language: {
    noResults: function () {
          return "情報は見つかりませんでした";
    }
  }
});

let allLayers;
let markerLayers = [];
let modelUrl;
let czmlData;
var folders = [];
var tags = [];
let markerDataSets = [];

window.addEventListener("message", function (e) {
  if (e.source !== parent) return;
  allLayers = e.source.reearth.layers;

  getAllData();
});

function getAllData() {
  //get all folder
  folders = allLayers.layers.filter((fo) => fo.type == "" && fo.isVisible == true);

  // get all tags
  tags = allLayers.tags;

  //get all makers
  markerLayers = allLayers.layers.filter((o) => ((o.type == "marker" && o.children == undefined) || o.type == "model") && o.isVisible == true);

  //get data set with type == marker 
  markerDataSets = allLayers.layers.filter(
    (layer) => layer.isVisible == true
    && layer.type == "marker" 
    && (typeof layer.children !== 'undefined')
    );
}

//Check validation for Fill Opacity input
function enforceMinMax(el) {
  if (el.value != "") {
    if (parseInt(el.value) < parseInt(el.min)) {
      el.value = el.min;
    }
    if (parseInt(el.value) > parseInt(el.max)) {
      el.value = el.max;
    }
  }
}

//Display select box of folder or tag
function getOptions() {
  let chooseBy = document.getElementById("choose-by").value;
  let selectarea = document.getElementById("select-by");
  let tagArea = document.getElementById("select-parent-tag");

  getAllData();

  if (chooseBy == "folder") {
    selectarea.replaceChildren();
    tagArea.replaceChildren();
    showFolder.style.display = "inline";
    showTag.style.display = "none";

    let folderList = getAllFolders();

    folderList?.map((fd, i) => {
      var opt = document.createElement("option");
      opt.value = fd.id;
      opt.innerHTML = fd.title;
      selectarea.appendChild(opt);
    });
  } else if(chooseBy == "tag") {

    selectarea.replaceChildren();
    tagArea.replaceChildren();
    showFolder.style.display = "none";
    showTag.style.display = "inline";
    
    let nameTagList = [];
    //Get name tag list
    tags?.map((tag) => {
      if(tag.tags != undefined && tag.tags.length > 0 ) {
        tag.tags?.map((obj) => {
          if (!nameTagList.includes(obj.label)) {
            nameTagList.push(obj.label);
          }
        });
      } else {
        if (tag.tags == undefined && !nameTagList.includes(tag.label)) {
          nameTagList.push(tag.label);
        }
      }
    });
    nameTagList?.map((tag) => {
        var opt_t = document.createElement("option");
        opt_t.value = tag;
        opt_t.innerHTML = tag;
        tagArea.appendChild(opt_t);
    });

  } else {
    selectarea.replaceChildren();
    tagArea.replaceChildren();
    showFolder.style.display = "none";
    showTag.style.display = "none";
  }
  updateIframeSize();
}

//convert HEX color code to RGBA format
function convertHex(hexCode, opacity = 100){
  var hex = hexCode.replace('#', '');

  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var r = parseInt(hex.substring(0,2), 16),
      g = parseInt(hex.substring(2,4), 16),
      b = parseInt(hex.substring(4,6), 16);

  let rbga = new Array();
    rbga.push(r);
    rbga.push(g);
    rbga.push(b);
    rbga.push(opacity);
    return rbga;
}

//generate circle
function generateCircle() {
  let radius, strokeColor, fillColor, fillOpacity;
  let markerLat, markerLng, markerId;
  let chooseBy;
  let selectedLayers = new Array();
  let tagGroup, tagChild;

  //get circle attributes value
  // fill opacity must be from 1 to 100; >100 action as 100

  chooseBy = document.getElementById("choose-by").value;
  radius = document.getElementById("radius").value || 100;
  strokeColor = document.getElementById("stroke-color").value || '#ffffff';
  fillColor = document.getElementById("fill-color").value || '#ffffff';
  fillOpacity = document.getElementById("fill-opacity").value || 100;

  getAllData();

  if (chooseBy == "folder") {
    let allFolders = getAllFolders();

    //get selected folder
    folderLayer = allFolders.filter((layer) => 
      layer.id == document.getElementById("select-by").value 
      && layer.isVisible == true)[0];

    //If layer is folder
    if (folderLayer.type == "") {
      getElementsOfFolder(folderLayer, selectedLayers);
    } else if (folderLayer.type == "marker") {
      selectedLayers = folderLayer.children;
    }
  } 
  else if (chooseBy == "tag") { //Choose by tag
    //get input tag
    selectedNameTag = document.getElementById("select-parent-tag").value;
    
    if (selectedNameTag) {
      //combine all markers and 3d models
      folders?.map((fd, index) => {
        getElementsOfFolder(fd, selectedLayers);
      });

      //combine all markers from csv data
      markerDataSets?.map((fd, index) => {
        selectedLayers = selectedLayers.concat(fd.children);
      });

      selectedLayers = markerLayers.concat(selectedLayers);
  
      //filter by tag group and tag child
      selectedLayers = getMarkerByTag(selectedLayers, selectedNameTag);
    }
  } 
  else { //choose by all
    //get all layers
    folders?.map((fd, index) => {
      getElementsOfFolder(fd,selectedLayers);
    });
    
    //combine all markers from csv data
    markerDataSets?.map((fd, index) => {
      selectedLayers = selectedLayers.concat(fd.children);
    });

    selectedLayers = markerLayers.concat(selectedLayers);
  }
  
  // create czml 
  czmlData = [
    {
      id: "document",
      name: "Circle Generator",
      version: "1.0",
    },
  ];
   
  selectedLayers?.map((ml, index) => {
    markerLat = ml.property.default.location.lat;
    markerLng = ml.property.default.location.lng;

    czmlData.push({
      id: "Circle " + index,
      name: "Circle",
      position: {
        cartographicDegrees: [markerLng, markerLat, 150000.0],
      },
      ellipse: {
        heightReference: "RELATIVE_TO_GROUND",
        semiMinorAxis: parseInt(radius),
        semiMajorAxis: parseInt(radius),
        height: 0,
        material: {
            solidColor: {
              color: {
                  rgba: convertHex(fillColor,(Number(fillOpacity)*255/100)), 
              },
            },
        },
        outline: true, // height must be set for outlines to display
        outlineColor: {
            rgba: convertHex(strokeColor), //stroke color
        },
      },
    });
  });

  parent.postMessage({ type: "showCircle", czmlData }, "*");
}

// get marker by selected tag
function getMarkerByTag(layers, nameTag) {
  let temp = [];
    layers?.map((layer) => {
      if (layer.tags != undefined) {
        layer.tags.map(tagElm => {
          if (tagElm.tags == undefined ) {
            if (tagElm.label == nameTag) {
              temp.push(layer);
            }
          } else {
            if (tagElm.tags.length > 0) {
              if (tagElm.tags.some(obj => obj.label == nameTag)) {
                temp.push(layer);
              }
            }
          }
        });
      }
    });
    return temp;
}

//get all marker layers and 3d model layers
function getElementsOfFolder(folderParent, result){
  folderParent.children?.map((obj, index) => {
      if (obj.type == "" && obj.isVisible == true) {
        getElementsOfFolder(obj,result);
      } else if ((obj.type == "marker" || obj.type == "model") && obj.isVisible == true) {
        result.push(obj); 
      }
    });
    return result;
}

//get all folders including folder children
function getFolderList(folderParent, result){
  folderParent.children?.map((obj, index) => {
      if (obj.type == "" && obj.isVisible == true) {
        getFolderList(obj,result);
        result.push(obj);
      } 
    });
    return result;
}

//get all folders including folder children
function getAllFolders(){
  let allFolders = [];
  //get all folder
  let folderParents = allLayers.layers.filter((fo) => fo.type == "" && fo.isVisible == true);

  //get data set with type == marker 
  let markerDataSets = allLayers.layers.filter(
    (layer) => layer.isVisible == true
    && layer.type == "marker" 
    && (typeof layer.children !== 'undefined')
    );

  folderParents?.map(obj => {
    getFolderList(obj, allFolders);
  });
  
  allFolders = folders.concat(allFolders);

  //Combine folders and csv file
  allFolders = allFolders.concat(markerDataSets);

  return allFolders;
}

function changeFillColor(event) {
  document.getElementById("fill-color").value = event.target.value;
}

function changeStrokeColor(event) {
  document.getElementById("stroke-color").value = event.target.value;
}

function changeColorPicker(item) {
  item.closest(".form-group").querySelector(".color").value = item.value;
}  


// Clear Model Settings input value 
function cleanAllFields() {
  document.getElementById("radius").value = 100;
  document.getElementById("stroke-color").value = "#ffffff";
  document.getElementById("fill-color").value = "#ffffff";
  colorPickers = document.getElementsByClassName("color");
  for(let i=0; i < colorPickers.length; i++){
    colorPickers[i].value = "#ffffff";
  }
  document.getElementById("fill-opacity").value = 100;
  document.getElementById("showFolder").style.display = "none";
  document.getElementById("showTag").style.display = "none";
  $("#choose-by").val('all').trigger('change');
  parent.postMessage({ type: "clearCircle"}, "*");
}

// Download CZML file
function downloadObjectAsJson(exportObj, exportName) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".czml");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

document.getElementById("download").addEventListener("click", (e) => {
  downloadObjectAsJson(czmlData, "download");
});

let expanded = false;
let resizeElms = document.querySelectorAll(".resize");  
let closeElm = document.getElementById("title");
closeElm.addEventListener("click", handleCloseOpenPopup);
let wapperElm = document.getElementById("wrapper");
let heightWp = wapperElm.offsetHeight < 470 ? 470 : wapperElm.offsetHeight;

function handleCloseOpenPopup(e) {
    let wapperElm = document.getElementById("wrapper");
    if (e.target.id == "title" || e.target.classList.contains("title-p") ||
    (document.getElementById(e.target.id) !== null && document.getElementById(e.target.id).parentNode.id == "title")) {
          parent.postMessage({ type: "resize", expanded, heightWp }, "*");
            if(wapperElm !== null) {
              wapperElm.classList.remove("height-46");
            }
          if (expanded){
            document.documentElement.classList.add("extendedh", "extendedv");
          } else {
            document.documentElement.classList.remove("extendedh", "extendedv");
          }
          expanded = !expanded
    } else {
      if(e.target.tagName === "path" || e.target.tagName === "svg" || e.target.tagName === "g") {
        if(e.target.closest("#title")) {
          parent.postMessage({ type: "resize", expanded, heightWp }, "*");
          if( wapperElm !== null) {
            wapperElm.classList.remove("height-46");
          }
          if (expanded){
            document.documentElement.classList.add("extendedh", "extendedv");
          } else {
            document.documentElement.classList.remove("extendedh", "extendedv");
          }
          expanded = !expanded
        }
      }
    }
  }

  // ---------------------------- Handle Update IFrame Size --------------------------- //
  function updateIframeSize() {
    let newWrapperElm = document.getElementById("wrapper");
    let heightWp = newWrapperElm.offsetHeight;
    let expanded = false;
    parent.postMessage({ type: "resize", expanded, heightWp }, "*");
  }
  // ---------------------------- Close Handle Update IFrame Size --------------------------- //
</script>
  `,
  { width: 46, height: 46 }
);

reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    property: reearth.widget.property,
  });
}

let circleGeneratorLayerId;

reearth.on("message", (msg) => {
  if (msg.type === "resize") {
    reearth.ui.resize?.(
      msg.expanded ? 46 : 312,
      msg.expanded ? 46 : msg.heightWp,
      msg.expanded ? undefined : false
    );
  } else if (msg.type === "showCircle") {
    if (circleGeneratorLayerId) {
      reearth.layers.hide(circleGeneratorLayerId);

    } 
    //Add new data
    circleGeneratorLayerId = reearth.layers.add({
      extensionId: "resource",
      isVisible: true,
      title: `Circle`,
      property: {
        default: {
          url: msg.czmlData,
          type: "czml",
        },
      },
    });
  } else if (msg.type === "clearCircle") {
    reearth.layers.hide(circleGeneratorLayerId);
  }
});
