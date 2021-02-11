export default function animFavor(e, s){ 
    const l = e.currentTarget.classList
    !l.toggle(`${s.addAnim}`) ? l.add(`${s.remAnim}`) : l.remove(`${s.remAnim}`)
}