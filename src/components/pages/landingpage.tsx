import useActiveSection from "../../hooks/useActivationSection";
import { navlinks } from "../../data/navlink";
import Navbar from "../navbar/navbar";
import Home from "../section/home";
import About from "../section/about";
import Features from "../section/features";
import Guides from "../section/guide";
import Team from "../section/team";

export default function LandingPage() {
    useActiveSection(navlinks.map((link) => link.id));

    return (
        <>
        <Navbar />
        <Home />
        <About />
        <Features />
        <Guides />
        <Team />
        </>
    );
}