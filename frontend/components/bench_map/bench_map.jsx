import React from 'react';
import MarkerManager from '../../util/marker_manager.js';
import {withRouter} from 'react-router';

class BenchMap extends React.Component {

  componentDidMount(){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.listenForMove();
    this.listenForClick();
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentWillReceiveProps(nextProps){
    this.MarkerManager.updateMarkers(nextProps.benches);
  }

  listenForClick() {
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };

      this.props.router.push({
        pathname: "benches/new",
        query: coords
      });
    });
  }

  listenForMove(){
    let that = this;

    google.maps.event.addListener(this.map, 'idle', () => {
     const bounds = this.map.getBounds();
     let boundObj = {northEast: {}, southWest: {}};
     boundObj['northEast']['lat'] = bounds.getNorthEast().lat();
     boundObj['northEast']['lng'] = bounds.getNorthEast().lng();
     boundObj['southWest']['lat'] = bounds.getSouthWest().lat();
     boundObj['southWest']['lng'] = bounds.getSouthWest().lng();

     that.props.updateBounds(boundObj);
   });
  }

  render() {
    return (
      <div id='map-container' ref='map'>
        Map goes here
      </div>
    );
  }
}

export default withRouter(BenchMap);
