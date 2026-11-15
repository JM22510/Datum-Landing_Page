import logo from "../../assets/datum_logo.png";

type Props = { className?: string };

export default function BrandLogo({ className = "" }: Props) {
    return (
        <span
            aria-hidden="true"
            className={`block shrink-0 bg-current ${className}`}
            style={{
                WebkitMaskImage: `url(${logo})`,
                maskImage: `url(${logo})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
            }}
        />
    );
}