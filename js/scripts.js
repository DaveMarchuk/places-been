function Places() {
  this.locations = {};
  this.currentID = 0;
}

Places.prototype.addPlace = function(location) {
  location.id = this.assignID();
  this.locations[location.id] = location;
  console.log(this.locations[location.id]);
};

Places.prototype.assignID = function()  {
  this.currentID += 1;
  return this.currentID;
}

function Location(placeName,landmarks,season) {
  this.placeName = placeName;
  this.landmarks = landmarks;
  this.season = season;
}
