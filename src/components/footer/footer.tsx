import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import { navlinks } from "../../data/navlink";
import Reveal from "../reveal/reveal";
import BrandLogo from "../brandlogo/brandlogo";
import EmailLink from "../email/emaillink";

const EMAIL = "luzondatum2026@gmail.com";


export default function Footer() {
    const year = new Date().getFullYear();

    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <footer className="bg-[#0d274f] text-[#c4bbb9]">
            <Reveal className="mx-auto w-full max-w-7xl px-6 lg:px-24 py-12 flex flex-col gap-10">
                <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
                    <div className="flex flex-col gap-4 max-w-sm">
                        <a
                            href={`#${navlinks[0].id}`}
                            onClick={(e) => handleNavClick(e, navlinks[0].id)}
                            aria-label="Datum home"
                            className="flex items-center transition-colors duration-300 hover:text-[#ffffff]"
                        >
                            <BrandLogo className="w-40 h-10 md:w-40 md:h-12" />
                        </a>
                        <p className="text-sm leading-relaxed">
                            Marinduque mobility in one tap. One platform connecting
                            passengers, drivers, and cooperative staff.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 leading-relaxed shrink-0">
                        <p className="font-bold">Contact</p>
                        <EmailLink
                            email={EMAIL}
                        />
                    </div>
                </div>

                <div className="border-t border-white/20 pt-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
                    <p>&copy; {year} DATUM. All rights reserved.</p>
                    <Link
                        to="/privacy-policy"
                        className="font-semibold hover:text-[#FFFFFF] transition-colors"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </Reveal>
        </footer>
    );
}