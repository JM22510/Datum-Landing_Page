import { gmailWebUrl, handleEmailClick } from "../../utils/email";

const EMAIL_REGEX = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;

export default function LinkifiedText({ text }: { text: string }) {
    const parts = text.split(EMAIL_REGEX);

    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? (
                    <a
                        key={i}
                        href={gmailWebUrl(part)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleEmailClick(e, part)}
                        className="font-semibold underline text-[#26678C] hover:opacity-80"
                    >
                        {part}
                    </a>
                ) : (
                    part
                )
            )}
        </>
    );
}