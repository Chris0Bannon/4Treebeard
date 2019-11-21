import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function * fetchMapLocation (action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield  axios.get('/api/map/', config);
        yield put({type: 'SET_MAP_LOCATION', payload: response.data});
    }catch(error){
    console.log('mapLocation get request failed', error);
    }
}


function * mapLocationSaga(){
    yield takeLatest('FETCH_MAP_LOCATION', fetchMapLocation)
}

export default mapLocationSaga