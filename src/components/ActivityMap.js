import React from 'react'
import polyline from '@mapbox/polyline'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';

function ActivityMap({activity, zoom=12}) {
  const position = [activity.start_latitude, activity.start_longitude];
  const polylines = activity.map.summary_polyline;
  const polyData = polyline.decode(polylines)
  const bounds = L.latLngBounds(polyData);

  const pointerIcon = new L.Icon({
    iconUrl:
      "https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/map-marker-icon.png",
    iconAnchor: [15, 20],
    iconSize: [30, 30]
  });

  React.useEffect(() => {
  }, [])

  return (
    <MapContainer boxZoom={false} bounds={bounds} dragging={false} zoomControl={false} scrollWheelZoom={false}
      className=" w-full h-96 opacity-100">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Polyline positions={polyData} color="blue" />
      <Marker position={[activity.start_latitude, activity.start_longitude]} icon={pointerIcon} />
    </MapContainer>
  )
}

export default ActivityMap
