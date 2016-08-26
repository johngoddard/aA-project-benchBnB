class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.benches = {};
  }

  _benchesToAdd(benches){
    let toAdd = [];

    Object.keys(benches).forEach(id => {
      if(!this.benches[id]){
        this.benches[id] = benches[id];
        toAdd.push(benches[id]);
      }
    });

    return toAdd;
  }

  _markersToRemove(benches){
    let toRemove = [];
    let descriptions = Object.keys(benches).map(id => benches[id].description);
    this.markers.forEach(marker => {
      if(!descriptions.includes(marker.title)){
        toRemove.push(marker);
      }
    });

    return toRemove;
  }

  _removeMarker(marker){
    marker.setMap(null);
    this.markers.filter(mark => mark !== marker);
    marker = null;
  }

  _createMarkerFromBench(bench) {
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description
    });


    this.markers.push(marker);
  }

  updateMarkers(benches){
    const manager = this;
    const toAdd = this._benchesToAdd(benches);

    toAdd.forEach(bench => {
      manager._createMarkerFromBench(bench);
    });

    const toRemove = this._markersToRemove(benches);
    toRemove.forEach(marker => {
      manager._removeMarker(marker);
    });

    this.benches = benches;
  }
}

export default MarkerManager;
