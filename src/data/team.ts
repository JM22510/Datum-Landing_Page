import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png"

export type TeamMember = {
    id: number;
    img: string;
    name: string;
    role: string;
};

export const TEAM: TeamMember[] = [
    {
        id: 1,
        img: member1,
        name: "Bea Floriza Soberano",
        role: "Project Manager & Lead UI/UX Designer",
    },
    {
        id: 2,
        img: member2,
        name: "Carl Venus Labay",
        role: "Researcher &  QA Specialist",
    },
    {
        id: 3,
        img: member3,
        name: "Jhon Malkovich Larracas",
        role: "Systems Analyst & Frontend Developer",
    },
    {
        id: 4,
        img: member4,
        name: "Mark Angelo Tolosa",
        role: "UI/UX Designer & Backend Developer",
    },
];