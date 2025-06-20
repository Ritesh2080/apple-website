import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { rightImg, watchImg } from "../utils";
import VideoCaraosel from "./VideoCaraosel";
gsap.registerPlugin(useGSAP);


const Highlight = () => {
    useGSAP(()=>{
        gsap.to("#title",{
            opacity:1,
            y:0
        })
        gsap.to(".link",{
            opacity:1,
            y:0,
            duration:1,
            stagger:0.25
        })
    },[])

  return (
    <section id="highlights" className="w-screen h-full overflow-hidden common-padding bg-zinc ">
        <div className="screen-max-width">
            <div className="mb-12 w-full md:flex items-end justify-between">
                <h1 id="title" className="section-heading">
                    Get the highlights
                </h1>
                <div className="flex flex-wrap items-end gap-5">
                    <p className="link">watch the film
                        <img src={watchImg} alt="watch" className="ml-2"/>
                    </p>
                    <p className="link">watch the event
                        <img src={rightImg} alt="right" className="ml-2"/>
                    </p>
                </div>
            </div>
            <VideoCaraosel/>
        </div>
    </section>
  )
}

export default Highlight