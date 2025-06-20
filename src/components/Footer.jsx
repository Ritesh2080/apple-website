import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs">More ways to shop:{" "}<span className="underline cursor-pointer text-blue">Find an apple store {" "}</span>
                        {"  "} or <span className="underline cursor-pointer text-blue">other retailer{" "}</span> near you. </p>
                    <p className="font-semibold text-gray text-xs">Or call 0001-234-5322</p>
                </div>
                <div className="bg-neutral-700 my-5 h-[1px] w-full" />
                <div className="flex md:flex-row flex-col justify-between md:items-center">

                    <p className="font-semibold text-gray text-xs">Copyright @ {new Date().getFullYear()} Apple Inc. All rights reserved</p>
                    <div className="flex">
                        {footerLinks.map((link, i) => (
                            <p key={i} className="font-semibold text-gray text-xs cursor-pointer">{link}{i !== footerLinks.length - 1 && (<span className="mx-2">|</span>)}</p>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer