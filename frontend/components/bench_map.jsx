import React from 'react';

class BenchMap extends React.Component {

  componentDidMount(){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    }

     this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  render() {
    return (
      <div id='map-container' ref='map'>
        Map goes here
      </div>
    );
  }
}

export default BenchMap;
