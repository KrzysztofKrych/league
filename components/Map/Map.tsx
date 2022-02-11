import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { STOCKHOLM_CENTER_LOCATION } from '../../utils/consts';

const Map = () => {
  return (
    <MapContainer center={STOCKHOLM_CENTER_LOCATION} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}-tiles.locationiq.com/v2/obk/r/{z}/{x}/{y}.png?key=1f9c7da4744235"
      />
    </MapContainer>
  );
};
export default Map;
