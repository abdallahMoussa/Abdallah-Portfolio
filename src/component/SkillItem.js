import { memo } from 'react';
import style from './SkillItem.module.css'
const Skill=({skill})=>{
    return(
        <div className={`${style.skill} skill`}>
            <svg viewBox={skill.viewBox}>
                <path d={skill.d}/>
            </svg>
            <span>{skill.title}</span>
        </div>
    )
}

export default memo(Skill);