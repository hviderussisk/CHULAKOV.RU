import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import { changePage, loadPosts, setPosts } from './mainReduser'


async function fPosts(n){
    const s1 = n.t1 === 1? 'id' : n.t1 === 2 ? 'name' : n.t1 === 3 ? 'age' : undefined
    const order = n.t2 === 1 ? 'asc' : 'desc'
    const search = n.sValue ? `?name_like=${n.sValue}` : `?_page=${n.pN}`
    let url = `http://localhost:5000/posts${search}&_sort=${s1}&_order=${order}`
    return await fetch(url).then( res => res.json())
}

function* workPosts(a){
    const t = yield select( state => state.mainPage.toggle )
    const s = yield select( state => state.mainPage.search )
    const res = yield call(fPosts, {pN: a.data, t1: t.t1, t2: t.t2 , t3: t.t3, sValue: s })
    yield all([ put(loadPosts(false)), put(setPosts(res)), put(changePage())])
}

export function* wPosts(){
    yield takeEvery( 'post_req', workPosts )
}