import style from './About.module.css'
const About = ()=>{

    return(
        <div className={`${style.about} w-full text-left`}>
                <div className={`${style.section}`}>
                    <span className={`${style.who}`}>Who am i ?</span>
                    <pre className={`${style.disc} ${style.discWho}`}>   Innovative Front-End developer. I'm fresh graduate but proficient in html ,css,css3 ,Js plus modern libraries and frameworks.<br/>
                    I have a high learning curve and have ability to get more knowledge in my career.
                    I like working with teams and solving problems and conflicts.
                    </pre>
                </div>
                <div className={`${style.section}`}>
                    <span className={`${style.education}`}>  
                        Education&nbsp;
                        <svg viewBox="0 0 640 512">
                            <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                        </svg>
                    </span>
                    <pre className={`${style.disc} ${style.eduDisc}`}>Bachelor's Degree In Computer Science.
                        <br/>Faculty of Computer and Information,
                        <br/>Suez Canal University.    
                    </pre>
                </div>

               <div className={style.colection}>
                <div className={`${style.section}`}>
                        <span className={`${style.lang}`}>  
                            Languages&nbsp;
                            <svg viewBox="0 0 640 512">
                                <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/>
                            </svg>
                        </span>
                        <pre className={`${style.disc} ${style.langDisc}`}>Arabic <sub>"native"</sub><br/>English <sub>"good"</sub>
                        </pre>
                    </div>

                    <div className={`${style.section}`}>
                        <span className={`${style.millitary}`}>  
                            Military Service&nbsp;
                            <svg viewBox="0 0 576 512">
                                <path d="M265.2 192c25.4 0 49.8 7.1 70.8 19.9V512H144V337.7L90.4 428.3c-11.2 19-35.8 25.3-54.8 14.1s-25.3-35.8-14.1-54.8L97.7 258.8c24.5-41.4 69-66.8 117.1-66.8h50.4zM320 80c0 44.2-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80zM448 0c8.8 0 16 7.2 16 16V132.3c9.6 5.5 16 15.9 16 27.7V269.3l16-5.3V208c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v84.5c0 6.9-4.4 13-10.9 15.2L480 325.3V352h48c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H484l23 92.1c2.5 10.1-5.1 19.9-15.5 19.9H432c-8.8 0-16-7.2-16-16V400H400c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32V160c0-11.8 6.4-22.2 16-27.7V32c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 16z"/>
                            </svg>
                        </span>
                        <pre className={`${style.disc} ${style.militaryDisc}`}>Completed <sub>"Good Idol"</sub>
                        </pre>
                    </div>
               </div>
        </div>
    )
}
export default About;
