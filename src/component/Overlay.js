import Content from './Content';
import SideNav from './SideNav';
import LinksMenu from './LinksMenu';
import Intro from './Intro'
import { useEffect , useState } from 'react';

const Overlay = ()=>{
    const [Swap , setSwap ] = useState(false)

    useEffect(()=>{
      setTimeout(()=>setSwap(true),15000)
    })

    return(<>
    {!Swap ?
        <div className="w-full h-screen flex justify-center items-center">
        <Intro />
    </div>
    :null}
       {Swap&& 
        <div className={`overlay border relative border-spacing-80 border-l-0 
        border-r-0 w-12/12 bg-zinc-900/70 rounded-2xl m-auto flex shadow-2xl`}>
            <SideNav />
            <Content />
            <LinksMenu />
        </div>
    }
    </>
    );
}

export default Overlay;
