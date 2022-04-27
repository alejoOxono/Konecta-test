import { GET_DATA, SEARCH_DATA } from "./constants";


const axios = require('axios');

export const getData = () => {
    return async function (dispatch) {
        axios
            .get('http://127.0.0.1:8001/read.php')
            .then((data) => {
                dispatch({
                    type: GET_DATA,
                    payload: data.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const addProduct = (object) => {
    return function () {
        axios
            .post('http://127.0.0.1:8001/create.php', object)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export const deleteProduct = (value) => {
    return async function (dispatch) {
        axios
            .get(`http://127.0.0.1:8001/delete.php?producto_id=${value}`)
            .then((data) => {
                dispatch({
                    type: GET_DATA,
                    payload: data.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const updateProduct = (object) => {
    return function () {
        axios
            .post('http://127.0.0.1:8001/update.php', object)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}


export const searchData = (value) => {
    return async function (dispatch) {
        axios
            .get(`http://127.0.0.1:8001/read.php?producto_id=${value}`)
            .then((data) => {
                dispatch({
                    type: SEARCH_DATA,
                    payload: data.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}