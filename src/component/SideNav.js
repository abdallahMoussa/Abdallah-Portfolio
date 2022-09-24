import style from './SideNav.module.css';
import {Link} from 'react-router-dom'
import { useEffect, useRef } from 'react';

const SideNav = ()=>{
    const menuRef = useRef();
    let param = window.location

    function setActiveLink(e){
       
        document.querySelector('#active').removeAttribute('id');
        e.target instanceof HTMLDivElement?e.target.setAttribute('id','active'):e.target.parentElement.setAttribute('id','active')

    }
    useEffect(()=>{
        let tabs = menuRef.current.querySelectorAll('.menu-tab');
        let personal = document.getElementById('personal');
        let exist = false;
    
        Array.from(tabs).map(t=>{
            if(t.title == param.pathname.slice(1)){
                menuRef.current.querySelector('#active').removeAttribute('id');
                t.setAttribute('id','active');
                exist= true
            }
        })
        if(!exist && personal&& personal.title==param.pathname.slice(1)){
            menuRef.current.querySelector('#active')&&menuRef.current.querySelector('#active').removeAttribute('id');
            personal.setAttribute('id','active');
        }
            
    },[])
    
    return(
        <div className={`${style.sideNav} `} >
            <div className={`${style.imgProfile}  relative `}>
                <Link to='/personal'>
                    <div onClick={setActiveLink} className={`${style.tab} ${style.imgTemp} `} id='personal' title='personal'>
                        <img src='/assist/images/img.jpg'/>
                    </div>
                </Link>
            </div>
            <div ref={menuRef} className={`${style.menu}`}>
                <Link to='/about'>
                    <div onClick={setActiveLink} className={`${style.tab} menu-tab`}  title='about' id="active" >
                        <span className={`${style.tabTitle}`} >About Me</span>
                        <svg className={`${style.icons}`} viewBox="0 0 576 512">
                            <path d="M256 0h64c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM64 64H192v48c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V64H512c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64zM176 437.3c0 5.9 4.8 10.7 10.7 10.7H389.3c5.9 0 10.7-4.8 10.7-10.7c0-29.5-23.9-53.3-53.3-53.3H229.3c-29.5 0-53.3 23.9-53.3 53.3zM288 352c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64z"/>
                        </svg>
                    </div>
                </Link>
                <Link to='/skills'>
                    <div onClick={setActiveLink} className={`${style.tab} menu-tab`} title='skills' >
                        <span className={`${style.tabTitle}`}> Skills </span>
                        <svg className={`${style.icons}`} viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                        </svg> 
                        <svg className={`${style.icons} ${style.iconNd}`} viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                        </svg>    
                    </div>
                </Link>
                <Link to='/portfolio'>
                    <div onClick={setActiveLink} className={`${style.tab} menu-tab`} title='portfolio'>
                        <span className={`${style.tabTitle}`}>Portfolio</span>
                        <svg className={`${style.icons}`} viewBox="0 0 640 512">
                            <path d="M192 0H48C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H162.7c6.6-18.6 24.4-32 45.3-32V272c0-44.2 35.8-80 80-80h32V128H224c-17.7 0-32-14.3-32-32V0zm96 224c-26.5 0-48 21.5-48 48v16 96 32H208c-8.8 0-16 7.2-16 16v16c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V432c0-8.8-7.2-16-16-16H592V288c0-35.3-28.7-64-64-64H320 304 288zm32 64H528V416H304V288h16zM224 0V96h96L224 0z"/>
                        </svg>
                    </div>
                </Link>
                <Link to='/contact' >
                    <div onClick={setActiveLink} className={`${style.tab} menu-tab`} title='contact'>
                        <span className={`${style.tabTitle}`}>Contact</span>
                        <svg className={`${style.icons}`} viewBox="0 0 576 512">
                            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V428.7c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SideNav;