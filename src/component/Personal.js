import CloseUp from './CloseUp';
import Gallery from './Gallery';
import Hobbies from './Hobbies';
import style from './Personal.module.css'
import SocialMedia from './Social';
const Personal = ()=>{
   
    return(
        <div className={style.personal} >
            <CloseUp />
            <Hobbies />
            <Gallery />
            <SocialMedia />
        </div>
    )
}

export default Personal;