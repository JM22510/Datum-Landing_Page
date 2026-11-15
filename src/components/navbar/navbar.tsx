import { useState, useEffect, useRef } from "react";
import { navlinks } from "../../data/navlink";
import { HiMenu, HiX } from "react-icons/hi";
import BrandLogo from "../brandlogo/brandlogo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeId, setActiveId] = useState(navlinks[0].id);
    const clickLock = useRef(false);
    const lockTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    // Navbar background + text color on scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll-spy: highlight the section under the middle of the screen
    useEffect(() => {
        const sections = navlinks
            .map((link) => document.getElementById(link.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                if (clickLock.current) return; // ignore while a click-scroll is running
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
        e.preventDefault();
        setActiveId(id);   // highlight immediately
        setIsOpen(false);  // close the mobile menu

        clickLock.current = true;
        clearTimeout(lockTimer.current);
        lockTimer.current = setTimeout(() => {
            clickLock.current = false;
        }, 800);

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const activePill = isScrolled
        ? "bg-[#183765] text-white"
        : "bg-white text-[#183765]";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-5 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm text-[#183765]"
                    : "bg-transparent text-white"
            }`}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Brand logo: inherits its color from the nav through bg-current */}
                <a
                    href={`#${navlinks[0].id}`}
                    onClick={(e) => handleNavClick(e, navlinks[0].id)}
                    aria-label="Datum home"
                    className="flex items-center transition-colors duration-300 hover:text-[#5479b1]"
                >
                    <BrandLogo className="w-40 h-10 md:w-40 md:h-12" />
                </a>

                {/* Desktop Menu Links */}
                <ul className="hidden md:flex items-center gap-2 font-semibold text-base lg:text-lg">
                    {navlinks.map((link) => {
                        const isActive = activeId === link.id;
                        return (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`block rounded-full px-4 py-1.5 transition-colors duration-300 ${
                                        isActive ? activePill : "hover:text-[#5479b1]"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Hamburger Button (inherits color from the nav) */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-3xl p-1 transition-all duration-300 hover:text-[#5479b1] active:text-[#5479b1] active:scale-90 focus:outline-none focus-visible:text-[#5479b1]"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span
                        className={`block transition-transform duration-300 ${
                            isOpen ? "rotate-90" : "rotate-0"
                        }`}
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </span>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white text-gray-900 rounded-2xl shadow-2xl mt-4 pt-4 pb-6 px-6">
                    <ul className="flex flex-col gap-2 font-semibold text-center">
                        {navlinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className={`block rounded-full py-2 transition-colors ${
                                        activeId === link.id
                                            ? "bg-[#183765] text-white"
                                            : "hover:text-[#5479b1]"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}