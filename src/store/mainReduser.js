const SET_POSTS = 'main/SET-POSTS'
const NEW_PAGE = 'main/NEW-PAGE'
const LOAD = 'main/LOAD'
const FAVOURITE = 'main/FAVOURITE'
const LANG = 'main/LANG'
const SEARCH = 'main/SEARCH'
export const TOGGLE_1 = 'main/TOGGLE_1'
export const TOGGLE_2 = 'main/TOGGLE_2'
export const TOGGLE_3 = 'main/TOGGLE_3'

const initS = {
    posts: [],
    page: 1,
    lang: 'RUS',
    load: true,
    search: '',
    toggle: {
        t1: 1,
        t2: 1,
        t3: 1
    }
}

export default function mainReducer ( s = initS , a ) {
    let ns, c
    switch(a.type){
        case SET_POSTS: 
            c = [...s.posts]
            a.data.forEach(el => c.push(el)) 
            return { ...s, posts: c }

        case NEW_PAGE: 
            return { ...s, page: s.page + 1 }

        case LOAD: 
            return { ...s, load: a.data }

        case SEARCH: 
            return { ...s, search: a.data, page: 1, posts:[] }

        case LANG: 
            return { ...s, lang: a.data }

        case TOGGLE_1: 
            ns = { ...s, toggle: {...s.toggle}, page: 1, posts:[] }
            ns.toggle.t1 = a.data
            return ns

        case TOGGLE_2: 
            ns = { ...s, toggle: {...s.toggle}, page: 1, posts:[] }
            ns.toggle.t2 = a.data
            return ns

        case TOGGLE_3: 
            ns = { ...s, toggle: {...s.toggle}, page: 1, posts:[] }
            ns.toggle.t3 = a.data
            return ns

        case FAVOURITE: 
            return { ...s, posts: s.posts.map(el => {
                el.id === a.data && (el.favourite = !el.favourite)
                return el 
            })}
        default:
            return s
    }
}

export const setPosts = data =>  { return  { type: SET_POSTS , data } }
export const changePage = () =>  { return  { type: NEW_PAGE } }
export const loadPosts = data =>  { return  { type: LOAD , data } }
export const changeFavourite = data =>  { return  { type: FAVOURITE , data } }
export const SetT1 = data =>  { return  { type: TOGGLE_1 , data } }
export const SetT2 = data =>  { return  { type: TOGGLE_2 , data } }
export const SetT3 = data =>  { return  { type: TOGGLE_3 , data } }
export const setLang = data =>  { return  { type: LANG , data } }
export const setSearchValue = data =>  { return  { type: SEARCH , data } }
