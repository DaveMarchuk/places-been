// Business logic for Places
function Places() {
  this.locations = {};
  this.currentID = 0;
}

Places.prototype.addPlace = function(location) {
  location.id = this.assignID();
  this.locations[location.id] = location;
};

//Places.prototype.assignID = function()  {
//  this.currentID += 1;
//  return this.currentID;
//}
// Business logic for locations
// let location1 = {
//   placeName: "Turkey",
//   landmarks: "Istanbul",
//   season: "Spring",
// };

function Location(placeName, landmarks, season) {
  this.placeName = placeName;
  this.landmarks = landmarks;
  this.season = season;
}

let turkey = new Location("Turkey", "Istanbul", "Spring");
let china = new Location("China", "Wall of China", "Summer");
let brazil = new Location("Brazil", "Rio de Janeiro", "Summer");
let belarus = new Location("Belarus", "Mir Castle", "Fall");

const turKeys = Object.keys(turkey);
let turkString = "";
turKeys.forEach(function(key) {
  turkString = turkString.concat(key + ": " + turkey[key] + "\n");
});

// UI Logic
function  handleFormSubmission(event) {
  event.preventDefault();
  const userSelect = document.querySelector("input[name='place-name']:checked").value;
  console.log(turkString);
  if  (userSelect === "turkey") {
    document.getElementById("output").innerHTML = turkString;//"<b>" + "Name: " + "</b>" + turkey.placeName + "<br/>" + "Landmark: " + turkey.landmarks + "<br/>" + "Season: " + turkey.season;
  }
  
  if  (userSelect === "china") {
    document.getElementById("output").innerHTML = china.placeName + ', ' + china.landmarks + ', ' + china.season;
  }

  if  (userSelect === "brazil") {
    document.getElementById("output").innerHTML = brazil.placeName + ', ' + brazil.landmarks + ', ' + brazil.season;
  }

  if  (userSelect === "belarus") {
    document.getElementById("output").innerHTML = belarus.placeName + ', ' + belarus.landmarks + ', ' + belarus.season;
  }
}

window.addEventListener("load",function() {
  const form = this.document.getElementById("location-select");
  form.addEventListener("submit",handleFormSubmission);
});

