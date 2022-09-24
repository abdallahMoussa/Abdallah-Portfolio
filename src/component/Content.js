import  React ,{ Suspense } from "react";
import { Route , Routes } from "react-router";
import Loader from "./Loader";


const About = React.lazy(()=>import("./AboutMe"))
const Skills = React.lazy(()=>import("./Skills"))
const Portfolio = React.lazy(()=>import("./Portfolio"))
const Contact = React.lazy(()=>import("./Contact"))
const Personal = React.lazy(()=>import("./Personal"))
const Content =()=>{
    return(
        <div className="content">
            <Suspense fallback={ <Loader />}>
           
                <Routes>
                    <Route path="/personal" element={<Personal />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<About />} />

                </Routes>
            </Suspense>
        </div>
    );
}

export default Content;