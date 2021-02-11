import React, {  useEffect, useRef, useState  } from 'react'
import { useDispatch } from 'react-redux'
import { loadPosts } from '../../store/mainReduser'
import constRouteSearchParam, { sP , oP , vP, timer } from './../../assets/js/parseSearchParamURL'
import ItemUL from '../itemTable/item'
import PreviewUL from '../previewUl/preview'
import s from './main.module.sass'
import { Link } from 'react-router-dom'

export default function Main(props) {

    const { page, load, posts, changeFavourite, t1, t2, t3 , SetT1, SetT2, SetT3, setLang, lang, search, setSearchValue } = props

    const d = useDispatch()
    const ref = useRef(null)
    const sort1 = useRef(null)
    const sort2 = useRef(null)
    const sort3 = useRef(null)
    const refSearch = useRef(null)

    const arr = [[ sort1, t1 ], [ sort2, t2 ], [ sort3, t3 ]]

    useEffect(() => {
        SetT1(sP()); SetT2(oP()); SetT3(vP())
        window.addEventListener( 'scroll', action )
        return () => window.removeEventListener( 'scroll', action )
    }, [])
    useEffect(() => !search && load && d({ type:'post_req', data: page }) , [ search, load ])
    useEffect(() => { action(); init(); animToggle(); } , [ t1, t2, t3 ])
    useEffect(() => d({ type:'post_req', data: page }) , [ search ])

    async function action() { 
        (document.body.scrollHeight - ( window.pageYOffset + window.innerHeight ) < 50) && d(loadPosts(true))
        for (const i of ref.current.children) {
            anim(i);  await timer(200)
        }
    }

    const l = lang === 'RUS'

    const postElTable = posts.map( i => t3 === 1 ? <ItemUL l={l} key={i.id} {...i} cF={changeFavourite}/> : <PreviewUL l={l} key={i.id} {...i} cF={changeFavourite}/> )
    
    const anim = i => (i.getBoundingClientRect().top < window.innerHeight) ? i.classList.add(`${s.animationFadeInUp}`) : i.classList.remove(`${s.animationFadeInUp}`)
    const animToggle = () =>  arr.forEach(el => {
            const ch = el[0].current.children;
            el[1] === 1 ? ch[0].style.left = 0 :
            el[1] === 2 ? ch[0].style.left = `${ch[1].getBoundingClientRect().width}px` :
            el[1] === 3 && (ch[0].style.left = `${ch[1].getBoundingClientRect().width * 2}px`) 
        })

    const init = () => arr.forEach(el => { 
            const ch = el[0].current.children; ch[0].style.width = `${ch[1].getBoundingClientRect().width}px`})
    
    return  <div>
                <div className={s.body}>
                    <div className={s.lang}>
                        <div className={ l && s.activeLang } onClick={() => setLang('RUS')}>Rus</div>
                        <div className={ !l && s.activeLang } onClick={() => setLang('EN')}>Eng</div>
                    </div>
                    <div className={s.panel}>
                        <div className={s.sort}>
                            <div className={s.sortTitle}>
                                <span>{ l ? 'Сортировка' : 'Sorting'} </span>
                            </div>
                            <div className={s.controlSort} ref={sort1}>
                                <div className={s.active}></div>
                                <Link to={(location) => constRouteSearchParam(location, 'sort', 'id')  }>
                                    <div className={ t1 === 1 ? `${s.itemSort} ${s.af}`: s.itemSort} onClick={() => SetT1(1)}>
                                        <div>ID</div>
                                    </div>
                                </Link>
                                <Link to={(location) => constRouteSearchParam(location, 'sort', 'name')}>
                                    <div className={ t1 === 2 ? `${s.itemSort} ${s.af}`: s.itemSort} onClick={() => SetT1(2)}>
                                        <div>{ l ? 'Имя' : 'Name'}</div>
                                    </div>
                                </Link>
                                <Link to={(location) => constRouteSearchParam(location, 'sort', 'age')}>
                                    <div className={ t1 === 3 ? `${s.itemSort} ${s.af}`: s.itemSort} onClick={() => SetT1(3)}>
                                        <div>{ l ? 'Возраст' : 'Age'}</div>
                                    </div>
                                </Link>
                            </div>
                            <div className={s.controlSort} ref={sort2}>
                                <div className={s.active}></div>
                                <Link to={(location) => constRouteSearchParam(location, 'order', 'asc')}>
                                    <div className={ t2 === 1 ? `${s.itemSort} ${s.af}`: s.itemSort} onClick={() => SetT2(1)}>
                                        <div>{ l ? 'По возрастанию' : 'Ascend'}</div>
                                    </div>
                                </Link>
                                <Link to={(location) => constRouteSearchParam(location, 'order', 'desc')}>
                                    <div className={ t2 === 2 ? `${s.itemSort} ${s.af}`: s.itemSort} onClick={() => SetT2(2)}>
                                        <div>{ l ? 'По убыванию' : 'Descend'}</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={s.sort}>
                            <div className={s.sortTitle}>
                                <span>{ l ? 'Вид' : 'View'}</span>
                            </div>
                            <div className={s.controlSort} ref={sort3}>
                                <div className={s.active}></div>
                                <Link to={(location) => constRouteSearchParam(location, 'view', 'table')}>
                                    <div className={ t3 === 1 ? `${s.itemSort} ${s.af}`: s.itemSort} onClick={() => SetT3(1)}>
                                        <span>{ l ? 'Таблица' : 'Table'}</span>
                                    </div>
                                </Link>
                                <Link to={(location) => constRouteSearchParam(location, 'view', 'preview')}> 
                                    <div className={ t3 === 2 ? `${s.itemSort} ${s.af}`: s.itemSort} onClick={() => SetT3(2)}>
                                        <span>{ l ? 'Превью' : 'Preview'}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={s.search}>
                        <input placeholder={ l ? 'Поиск по фамилии и имени' : 'Search name or lastname'} type="text" value={search} ref={refSearch} onChange={()=> setSearchValue(refSearch.current.value)}/>
                    </div>
                    <div ref={ref} class={t3 === 2 && s.prevPos} onLoad={action}>
                        { postElTable }
                    </div>
                </div>
            </div>
}

