import type { MouseEvent, ReactNode } from "react";

type EmailLinkProps = {
    email: string;
    className?: string;
    children?: ReactNode;
};

export default function EmailLink({ email, className, children }: EmailLinkProps) {
    const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const ua = navigator.userAgent;

        if (/Android/i.test(ua)) {
            e.preventDefault();
            window.location.href =
                `intent:mailto:${email}#Intent;` +
                `action=android.intent.action.SENDTO;` +
                `package=com.google.android.gm;` +
                `S.browser_fallback_url=${encodeURIComponent(gmailWeb)};end`;
        } else if (/iPhone|iPad|iPod/i.test(ua)) {
            e.preventDefault();
            window.location.href = `googlegmail:///co?to=${email}`;
        }
    };

    return (
        <a
            href={gmailWeb}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={className}
        >
            {children ?? email}
        </a>
    );
}
