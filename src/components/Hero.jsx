import gsap from "gsap"
import { useState } from "react";
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const animationSpeed = window.innerWidth < 760 ? 2.2 : 1

    const handleVidSrc = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleVidSrc)
        return () => {
            window.removeEventListener("resize", handleVidSrc)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero',
            {
                opacity: 1, delay:animationSpeed
            }
        )
        gsap.to('#cta',
            {
                opacity: 1, delay:animationSpeed, y:-10
            }
        )
    }, [])
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 mb-16">
                <a href="#highlights" className="btn">Buy</a>
                <p className="font-normal text-xl">From $199/Month or $999</p>
            </div>
        </section>
    )
}

export default Hero
