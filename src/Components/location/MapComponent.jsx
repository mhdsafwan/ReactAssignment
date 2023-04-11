// import React from 'react';
// // import '../styles/MapComponent.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { useEffect } from 'react';
// import { getUserData } from './getUserData';
// import { useDispatch, useSelector } from 'react-redux'

// const MapComponent = () => {
//     const dispatch = useDispatch()
//     const isLoading = useSelector((state) => state.isLoading)
//     const coord = useSelector((state) => state.userData)
 
//     useEffect(() => {
//        dispatch(getUserData())
//     }, [])

//   return (
//     <MapContainer center={[coord.latitude, coord.longitude]} zoom={12}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[coord.latitude, coord.longitude]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
  
//   )
// }

// export default MapComponent