console.log("exercice 7");

function getData() {
  return data; // data is defined in DATA.js file
}

let numberOfItems = 50;
let first = 0;
let actualPage = 1;
let maxPages = Math.ceil(data.length / numberOfItems );

function addLineToTable() {
  $("tbody").empty();
  for (let i=first ;i<first+numberOfItems;i++){
  $("tbody")
      .append($("<tr></tr>"))
      .append($("<td>"+data[i].name["last"]+"</td>"))
      .append($("<td>"+data[i].name["first"]+"</td>"))
      .append($("<td>"+data[i].phone+"</td>"))
      .append($("<td>"+data[i].email+"</td>"))
}
  pageNum();
}

function firstPage() {
  first=0;
  actualPage=1;
  addLineToTable();
}
function nextPage() {
if (first+numberOfItems<=data.length){
  first+=numberOfItems;
  actualPage++;
  addLineToTable();
}
}
function previousPage() {
if (first-numberOfItems>=0){
  first-=numberOfItems;
  actualPage--;
  addLineToTable();
}
}
function lastPage(){
first = (maxPages * numberOfItems)-numberOfItems;
actualPage = maxPages;
addLineToTable();
}

function pageNum () {
$("#pageInfo").text(`${actualPage} / ${maxPages}`)
}

addLineToTable()