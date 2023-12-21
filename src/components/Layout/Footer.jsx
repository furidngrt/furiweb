import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <>

            <div className="bg-dark2 w-full p-3 py-8 text-white text-center lg:grid grid-cols-3">
                <h6 className="text-2xl font-semibold">FURI</h6>
                <div className="flex justify-center">
                    <ul className="text-lg font-semibold transition-all duration-300 text-white flex">
                        <Link to="/blog">
                            <li className="cursor-pointer hover:text-purple px-2 pb-2">Blog</li>
                        </Link>
                        <ScrollLink
                            to="stake"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                        >
                            <li className="cursor-pointer hover:text-purple px-2 pb-2">Stake</li>
                        </ScrollLink>
                        <Link to="/#">
                            <li className="cursor-pointer hover:text-purple px-2 pb-2">Jobs</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex justify-center gap-2">
                      <a href="https://t.me/furidngrt"><FontAwesomeIcon icon={faPaperPlane} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" /></a>
                      <a href="https://x.com/furidngrt"><FontAwesomeIcon icon={faTwitter} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" /></a>
                      <a href="https://#"><FontAwesomeIcon icon={faDiscord} className="transition-all duration-300 cursor-pointer bg-white text-dark hover:bg-dark hover:text-white text-sm rounded-full p-[5px]" /></a>
                </div>
            </div>
        </>
    )
}

export default Footer
