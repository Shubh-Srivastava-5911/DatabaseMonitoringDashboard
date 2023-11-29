import { options } from "./connect-options.js";

const dialogLayout = document.querySelector(".dialog-layout");
const templateContainer = document.querySelector(".dialog-div-top");
const form = document.getElementById("connect-form");
const dialogOk = document.getElementById("ok");
const dialogCancel = document.getElementById("cancel");

// holds key of connection which is going to be established
let currentConnectionKey = null;

// configuring elements to display and templates for each connectivity option
for(let key in options) {
    options[key].htmlElement.addEventListener("click", function(){
        templateContainer.innerHTML = options[key].connObject.template;
        dialogLayout.style.display = "block";
        currentConnectionKey = key;
    });
}

// cancel conenction establishment
dialogCancel.addEventListener("click", function() {
    dialogLayout.style.display = "none";
    currentConnectionKey = null;
});

// operation on connection establishment form submission
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(currentConnectionKey==null) return;
    const connObj = options[currentConnectionKey].connObject;
    const connTemp = templateContainer;
    const dataObj = {};
    for(let neededVal of connObj.requiredFields) {
        dataObj[neededVal] = connTemp.querySelector(`[${connObj.customAttr} = ${neededVal}]`).value;
    }
    console.log(dataObj);
});