import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
import { chipImg, frameImg, frameVideo } from '../utils'
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
    const videoRef = useRef()
    useGSAP(() => {
        gsap.from("#chip", {
            scrollTrigger: {
                trigger: "#chip",
                start: "20% bottom"
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: "power2.inOut"

        })
        animateWithGsap(".g_fadeIn", { opacity: 1, y: 0, ease: "power2.inOut", duration: 1 })

    }, [])
    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div id="chip" className="flex-center w-full my-20">
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">A17 Pro chip. <br />A monster win for gaming.</h2>
                    <p className="hiw-subtitle">It's here. The biggest redesign in the history of Apple GPUs.</p>
                </div>
                <div className="mt-10 md:mt-20 mb-14">
                    <div className="relative h-full flex-center">
                        <div className="overflow-hidden">
                            <img src={frameImg} alt="frame" className="bg-transparent relative z-10" />
                        </div>
                        <div className="hiw-video">
                            <video src={frameVideo} className="pointer-events-none" preload="none" playsInline muted autoPlay loop ref={videoRef} type="video/mp4"></video>
                        </div>
                    </div>
                    <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>

                </div>
                <div className="hiw-text-container">
                    <div className="right flex flex-col flex-1/2 gap-10">
                    <div className="flex flex-1 flex-col justify-center">
                        <p className="hiw-text g_fadeIn">A17 Pro is an entirely new class  of iPhone chip that delivers our {''}
                            <span className="text-white">best graphics performance by far.</span>
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                        <p className="hiw-text g_fadeIn">Mobile {''}
                            <span className="text-white">games will look and feel so immersive</span>,
                            with incredibly detailed environments and more realistic characters. And with industry-leading
                            speed and efficiency, A17 Pro takes fast and runs with it.
                        </p>
                    </div>
                    </div>
                   <div className="left flex-1/2"><div className="flex flex-1 justify-center flex-col g_fadeIn">
                        <p className="hiw-text">New</p>
                        <p className="hiw-bigtext">Pro-class GPU</p>
                        <p className="hiw-text">with 6 cores</p>
                    </div></div>
                    
                </div>
            </div>
        </section>
    )
}

export default HowItWorks