import type { MouseEvent } from "react";

export const gmailWebUrl = (email: string) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

export const handleEmailClick = (e: MouseEvent<HTMLAnchorElement>, email: string) => {
    const ua = navigator.userAgent;

    if (/Android/i.test(ua)) {
        e.preventDefault();
        window.location.href =
            `intent:mailto:${email}#Intent;` +
            `action=android.intent.action.SENDTO;` +
            `package=com.google.android.gm;` +
            `S.browser_fallback_url=${encodeURIComponent(gmailWebUrl(email))};end`;
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
        e.preventDefault();
        window.location.href = `googlegmail:///co?to=${email}`;
    }
    // Desktop: falls through to the href (Gmail on the web)
};