import style from './Portfolio.module.css';
import Project from './Project';
import projects from '../projects.json'
import { useEffect, useState } from 'react';
const Portfolio=()=>{
    const proj = {
        name: 'Some Pens',
        img:'/assist/images/codePen.png',
        techs:['many...'],
        link:"https://codepen.io/abdallah-moussa"
    }
    const [fade ,setFade] = useState(true)

    useEffect(()=>{ setTimeout(()=>setFade(false),500)},[])
    return(
        <section className={`${fade?style.fade:style.portfolio}`}>
           <div className={style.projects}>
            {projects.map((p,i)=> <Project key={i} project={p} />)}
            <Project project={proj} />
            </div>
           
        </section>
    )
}

export default Portfolio;
