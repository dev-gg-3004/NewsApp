import {all, call, fork, put, takeEvery} from 'redux-saga/effects'
import * as types from '../utils/Actions'
import { NewsApiData, } from '../utils/BaseURL'
import { getNewsListSuccess } from './actions/NewsActions';


function* onStartGetNewsDataAsync(){
    try{
        const response= yield call(NewsApiData)
        console.log('===============>response========>response',response.data.articles);
        
        if(response.status===200){
            yield put(getNewsListSuccess(response.data.articles))
        }
    }
    catch (error) {
        console.log('=====onStartGetNewsDataAsync====error=======>',error,error.response);
       yield alert('session Time Out Please Try Again')
    }
}

export function* getNewsData(){
    yield takeEvery (types.GET_NEWS_lIST_START,onStartGetNewsDataAsync);
}







const marketSagas=[
    fork(getNewsData),
]

export default function* rootSaga() {
    yield all([...marketSagas]);
}