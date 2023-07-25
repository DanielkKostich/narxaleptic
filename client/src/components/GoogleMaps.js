import React, { useEffect, useState } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, DirectionsRenderer } from 'react-google-maps';

const MapComponent = ({ destination, userLocation }) => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (userLocation && destination) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: new window.google.maps.LatLng(userLocation.lat, userLocation.lng),
          destination: new window.google.maps.LatLng(destination.lat, destination.lng),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          }
        }
      );
    }
  }, [userLocation, destination]);

  return (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 36.321556, lng: -94.448361 }}>
      <Marker position={{ lat: 36.321556, lng: -94.448361 }} />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

const WrappedMapComponent = withScriptjs(withGoogleMap(MapComponent));

const GoogleMaps = () => {
  const destination = { lat: 36.321556, lng: -94.448361 }; // Set your destination here
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <WrappedMapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCiSe_uYAQ5ixtN6szu1CFAPGH7lRTkVjA&libraries=places`} // MOVE THIS TO .ENV LATER
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        destination={destination}
        userLocation={userLocation}
      />
    </div>
  );
};

export default GoogleMaps;

