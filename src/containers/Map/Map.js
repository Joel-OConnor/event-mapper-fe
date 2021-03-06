import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMapboxGl from 'react-mapbox-gl';

import { UserLocation } from '../../components/UserLocation/UserLocation';
import Events from '../Events/Events';
import { setEvents } from '../../actions/index.js';
import { getEvents } from '../../utilities/apiCalls/apiCalls';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: props.userLocation.latitude,
      longitude: props.userLocation.longitude,
      mapType: 'streets'
    };
  }

  componentDidMount() {
    const { latitude, longitude } = this.props.userLocation;
    this.retrieveEvents(latitude, longitude);
  }

  retrieveEvents = async (lat, lng) => {
    if (!lat && !lng) return;
    const events = await getEvents(lat, lng);
    this.props.setEvents(events);
  };

  changeMap = (event, style) => {
    event.preventDefault();
    const { mapType } = this.state;
    mapType !== style
      ? this.setState({ mapType: style })
      : this.setState({ mapType: 'streets' });
  };

  render() {
    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MB_ACCESS_TOKEN
    });
    let { latitude, longitude, mapType } = this.state;
    const { userLocation } = this.props;
    if (userLocation.latitude) {
      latitude = userLocation.latitude;
      longitude = userLocation.longitude;
    }
    return latitude && longitude ? (
      <div>
        <div
          className={
            mapType === 'streets'
              ? 'toggle-map-style'
              : 'toggle-map-style-active'
          }
        >
          <button
            className={`${mapType}-button`}
            onClick={event => this.changeMap(event, 'dark')}
          />
        </div>
        <Map
          center={[longitude, latitude]}
          zoom={[13]}
          style={`mapbox://styles/mapbox/${mapType}-v9`}
          containerStyle={{ height: '100vh', width: '100vw' }}
        >
          <UserLocation lng={longitude} lat={latitude} />
          <Events retrieveEvents={this.retrieveEvents} />
        </Map>
      </div>
    ) : (
      <Map
        style={`mapbox://styles/mapbox/${this.props.mapStyle}-v9`}
        containerStyle={{ height: '100vh', width: '100vw' }}
      />
    );
  }
}

Map.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  events: PropTypes.array,
  setEvents: PropTypes.func,
  userLocation: PropTypes.object,
  mapStyle: PropTypes.string
};

export const mapStateToProps = state => ({
  userLocation: state.userLocation
});

export const mapDispatchToProps = dispatch => ({
  setEvents: events => dispatch(setEvents(events))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
