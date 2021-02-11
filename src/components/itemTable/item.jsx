import React from 'react'
import words from './../../assets/js/numberDeclination'
import animFavor from './../../assets/js/aninationFavorite'
import { avatar } from './../../assets/js/transformPath'
import s from './item.module.sass'


export default function ItemUL(props){
    
    let {image, name, age, phone, favourite, cF, id, l} = props

    return  <div className={s.bodyItem}>
                <div className={s.avatar}>
                    <img src={avatar(image)}/>
                </div>
                <div className={s.name}>{name} </div>
                <div className={s.age}>{age} { l ? words(age, ['год', 'лет' , 'года']) : 'years'} </div>
                <div className={s.phone}>{phone}</div>
                <div className={s.favourite}>
                    <span className='material-icons' style={favourite ? {color:'#fff45f',textShadow: '0px 1px 1px #6e6b5f'} : {}}  onClick={(e) => { animFavor(e,s); cF(id)}} >star</span>
                </div>
            </div>
  }