/* useLocation */
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { googleMapsApiKey } from "../databases/googleMaps";
import { usePostLocationMutation } from "../services/shopService";
import { useSelector } from "react-redux";

export const useLocation = () => {
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const [triggerPostUserLocation, result] = usePostLocationMutation();
    const {localId} = useSelector(state => state.authReducer.value);

    const onConfirmAddress = () => {

        triggerPostUserLocation({
            location: {
                latitude: location.latitude,
                longitude: location.longitude,
                address: address,
                updatedAt: new Date().toLocaleDateString()
            },
            localId: localId
        });
      };
    
      //Location requested on mount
      useEffect(() => {
        // IIFE function: es una funcion anonima autoinvocada.
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status === "granted") {
            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
          }
        })();
      }, []);
    
      //Reverse geocoding
      useEffect(() => {
        (async () => {
                try {
                    if (location.latitude) {
                        const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleMapsApiKey}`;
                        const response = await fetch(url_reverse_geocode);
                        const data = await response.json();
                        console.dir(data);
                        setAddress(data.results[0].formatted_address);
                    }
                } catch (error) {
                    setError(error.message);
                }
            })();
      }, [location]);

    return {onConfirmAddress, location, address};
};