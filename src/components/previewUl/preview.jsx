import React, { useEffect, useRef } from 'react'
import words from './../../assets/js/numberDeclination'
import animFavor from './../../assets/js/aninationFavorite'
import { avatar, player } from './../../assets/js/transformPath'
import s from './preview.module.sass'

export default function PreviewUL(props){

    let {image, name, age, phone, favourite, phrase, video, cF, id, l} = props
    const p = useRef(null)
    
    useEffect(() => window.addEventListener( 'scroll', play ), [])

    function play(){
        if(p.current){
            const cds = p.current.getBoundingClientRect()
            cds.top + (cds.height/2) < window.innerHeight/2 && p.current.play()
            cds.top < 0  && p.current.pause()
        }
    }

    return  <div className={s.preview} style={video && {width: '100%'}}>
                <div className={s.body}>
                    <div className={s.headerItem}>
                        <div className={s.avatar}>
                            <img src={avatar(image)}/>
                        </div>
                        <div className={s.name}>{name}</div>
                        <div className={s.favourite}>
                            <span className='material-icons' style={favourite ? {color:'#fff45f',textShadow: '0px 1px 1px #6e6b5f'} : {}}  onClick={(e) => { animFavor(e, s); cF(id)}} >star</span>
                        </div>
                    </div>
                    <div className={s.bodyPreview}>
                        <div className={s.age}>{age} { l ? words(age, ['год', 'лет' , 'года']) : 'years'} </div>
                        <div className={s.phone}>{phone}</div>
                        <div className={s.phrase}>{phrase}</div>
                    </div>
                </div>
                { video && <div className={s.video}>
                    <video ref={p} controls="controls" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                        <source src={ player(video) }/>
                    </video>
                </div> }
            </div>
}