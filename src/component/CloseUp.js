import style from './Personal.module.css' 
const CloseUp = ()=>{
    let years = 26 ; 
    let date = new Date();
    years =date.getFullYear()-(date.getMonth>9?1996:1997);
    
    return(
        <div className={`${style.closeUp}`} >
        <span>Look closely..</span>
        <pre>       My name is Abdallah Moussa Mohamed, i`m {years} years old, I'm married and live in Suez.<br/>
            I love the different things and challenges especially in my career, love to do different and unexpected
             things by tools and languages which i learned,In addition to Love Problem Solving too much particularly what the other find it difficult to solve it.
         </pre>
    </div>
    )
}
export default CloseUp;