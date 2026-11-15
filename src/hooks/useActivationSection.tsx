import {useEffect, useState} from "react";

export default function useActiveSection(ids: string[]){
    const [activeSection, setActiveSection] = useState(ids[0]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setActiveSection(entry.target.id);
                }
            });
        });

        ids.forEach((id) => {
            const element = document.getElementById(id);
            if(element){
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [ids]);

    return activeSection;
}