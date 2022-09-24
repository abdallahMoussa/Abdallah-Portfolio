import style from './Personal.module.css';
import pictures from '../gallery.json'

const Gallery = ()=>{
    return(
        <div className={style.gallery}>
            <span>Gallery..</span>
            <div className={style.album}>
            {
                pictures.map((p,i)=><a key={i} href={p} target='_blank' ><img src={p} /></a>)
            }
            </div>
        </div>

    )
}

export default Gallery;