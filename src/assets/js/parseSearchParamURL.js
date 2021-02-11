const url = new URL(document.URL)
const sortP = () => url.searchParams.get('sort') ? url.searchParams.get('sort').toLowerCase() : 'id'
const orderP = () => url.searchParams.get('order') ? url.searchParams.get('order').toLowerCase() : 'asc'
const viewP = () => url.searchParams.get('view') ? url.searchParams.get('view').toLowerCase() : 'table'

export const sP = () => sortP() === 'id' ? 1 : sortP() === 'name' ? 2 : sortP() === 'age' ? 3 : 1
export const oP = () => orderP() === 'asc' ? 1 : orderP() === 'desc' ? 2 : 1
export const vP = () => viewP() === 'table' ? 1 : viewP() === 'preview' ? 2  : 1

export default function constRouteSearchParam (location, s,p) {
    const searchParam = new URLSearchParams(location.search)
    if(searchParam.has(s)){
        searchParam.set(s,p)
        const sp = searchParam.toString()
        return { ...location, search: sp }
    }else{
        return { ...location, search: `${location.search}&${s}=${p}`}
    }
}

export const timer = ms => new Promise( res => setTimeout( res , ms ))