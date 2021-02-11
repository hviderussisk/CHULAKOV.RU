
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changeFavourite, SetT1, SetT2, SetT3, setLang, setSearchValue } from '../../store/mainReduser'
import Main from './main'

const mainCont = props => {
    return <Main {...props} />
}

const mapStateProps = state => {
    const mP = state.mainPage
    return {
        posts: mP.posts,
        page: mP.page,
        load: mP.load,
        t1: mP.toggle.t1,
        t2: mP.toggle.t2,
        t3: mP.toggle.t3,
        lang: mP.lang,
        search: mP.search
    }
}

const withRouterMainCont = withRouter(mainCont)
const ContanerMain = connect(mapStateProps, {changeFavourite, SetT1, SetT2, SetT3, setLang, setSearchValue })(withRouterMainCont)
export default ContanerMain
