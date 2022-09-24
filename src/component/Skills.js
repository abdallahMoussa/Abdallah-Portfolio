import { useEffect, useRef, useState } from 'react';
import Skill from './SkillItem';
import style from './Skills.module.css';
import ImportedSkills from '../svgSkills.json';
const Skills=()=>{
    const inputRef=useRef(),
          addRef = useRef(),
          suggestList = useRef(),
          showAll = useRef(),
          searchRef = useRef();
          
    const [SuggSkills , setSuggSkills] = useState([]);

    const [MySkills] = useState(['Html 5','CSS 3','Tailwind','Bootstarp','SASS','Media Query','Pug Js','JavaScript','jQuery','React Js','Redux',
    'Next Js','SQL','C#','Data Structure','Algorithms','Microsoft Office','Photoshop']);

    const [InitSkills] = useState([ ...MySkills,'Html','Http','CS','CSW','Tailbar','SCSS','Media','Puger','Java','Nuxt js',
    'Cloud','Angular','Vue js','Node js','Wordpress','Paython','Data Analyst','Dev OPS','Azzure','C++','Mongo DB' ])
    
    useEffect(()=>{
        setTimeout(() => {
            showAll.current&&(showAll.current.style.display='inline')
        }, 7000);
        
        start()
    },[])
    const showAllHandler = (e)=>{
        Array.from(document.querySelectorAll('.skill')).map(s=>s.style.opacity='1')
        searchRef.current.style.display='none';
        e.target.style.display='none'
    }
    const start = ()=>{
        setTimeout(()=>{
            suggest(MySkills[0], 0)
        },1000)
        }

    const suggest = (skill , index )=>{
        var ind=0;
        let added='';
            let interval = setInterval(()=>{
                added += skill[ind++]
                if(inputRef.current){
                   inputRef.current.value=added
               }
               else{
                   clearInterval(interval)
                 
                   return 0;
               }
               if(ind==skill.length){
                   clearInterval(interval);
                   setTimeout(()=>addHandler(index),700)
                   index++;
                   if( index != MySkills.length ){
                       setTimeout(()=>suggest(MySkills[index],index ) ,1300)
                   }else{
                    showAll.current.style.opacity= '0';
                    setTimeout(()=>showAll.current.style.display='none',500)
                   }
               }
               suggestHandler()
           },100)
        
    }
    const suggestHandler= ()=>{        
        let temp =[];
        if(inputRef.current.value){
            temp =InitSkills.filter(s=> s.includes(inputRef.current.value)&&s );
            setSuggSkills(temp)
        }
    }

    const addHandler =(index)=>{
        if(addRef.current){
            addRef.current.style.opacity='.5';
            suggestList.current.children[0].style.backgroundColor='darkgray';
            suggestList.current.children[0].style.color='white';
        }
        setTimeout(()=>{ 
            if(addRef.current){
                document.querySelectorAll('.skill')[index-1].style.opacity='1'
                inputRef.current.value='';
                setSuggSkills([])
                addRef.current.style.opacity='1';
            }
        },300)
    }

    return(
        <div className={`${style.skills}`}>
            <div ref={searchRef} className={`${style.search} `}>
                <input disabled  ref={inputRef} className={style.searchInput} placeholder='Add Skills..'/>
                <button ref={addRef} className={style.add}>Add</button>
                {SuggSkills&&<div ref={suggestList} className={`${style.suggest}`}>
                                    {SuggSkills.map((s,i)=>{
                                        return <span key={i}>{s}</span>
                                    })}
                                </div>
                    }
            </div>
            
            <div className={`${style.skillList} flex  flex-wrap`}>
                <div className={style.showAll}>
                    <span ref={showAll} onClick={showAllHandler} >Show All</span>
                </div>
                    {
                    ImportedSkills.map((s,i)=><Skill key={i} skill={s} />)
                    }
            </div>
        </div>
    );
}
export default Skills