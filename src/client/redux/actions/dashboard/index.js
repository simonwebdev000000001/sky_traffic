

import actionTypes from '../actionTypes';
import axios from 'axios';
const UTILS = {
    AUTH_KEY: 'AUTH_KEY'
}

let url = () => location.origin.replace(location.port, "8238");


export const loadAllAirports = () => (dispatch) => {
    axios.get(`${url()}/airports.json`).then((res) => {
        dispatch({
            type: actionTypes.DASHBOARD_AIRPORTS,
            payload: res
        })
    });
}

let loadedItems = 0;
export const loadAiroportData = ({ el, type, minute, name }) => (dispatch) => {
    let end = Date.now(),
        start = end - parseInt(minute) * 60 * 1000;
    end = Math.round(end / 1000);
    start = Math.round(start / 1000);

    axios.get(`https://opensky-network.org/api/flights/${type}?airport=${el.icao}&begin=${start}&end=${end}`).then((res) => {
        el[name] = res.data.map((el) => {
            el.id = loadedItems++;
            return { ...el }
        });

    }).finally((e) => {
        if (!el[name]) el[name] = [];
        dispatch({
            type: actionTypes.DASHBOARD_AIRPORT_DATA,
            payload: el
        })
    });
} 