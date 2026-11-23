export type PolicySection = {
  title: string;
  body?: string[];
  list?: string[];
};

export const lastUpdated = "November 7, 2026";

export const sections: PolicySection[] = [
    {
        title: "1. Overview",
        body: [
        'DATUM (Data-Driven Assistance System for Transport and User Mobility) is the transport booking platform of the Luzon Datum Transport Service Cooperative, a door-to-door transport provider based in Murallon, Boac, Marinduque. It connects passengers, drivers, cooperative members, and staff in one place for passenger bookings, baggage (padala) and van-for-hire requests, dispatch, trip coordination, and payments.',
        "This policy sets out what personal information DATUM gathers and for what reason, how we handle it, who may receive it, how long we keep it, what protects it, and which rights you can exercise over it.",
        "Creating an account or using DATUM means you have read and understood this policy.",
        ],
    },
    {
        title: "2. Information We Collect",
        body: [
        "What we collect depends on how you use DATUM and your role on it. It may include the following:",
        ],
        list: [
        "Account details: your first, middle, and last name, name suffix, email address, mobile number, password (kept in encrypted form), and profile picture.",
        "Sign-in details: if you sign in with Google, we receive the basic profile information Google shares, such as your name and email address.",
        "Booking and trip details: pickup and drop-off points, travel date and time, passengers and baggage or cargo details, fare breakdowns, the status of each booking, payment records, receipts, and your past bookings.",
        "Location data: your device location while the app is in use, applied only to set pickup points, match you with a driver or van, and coordinate and track your trip. A driver's location is shown to passengers and cooperative staff while location sharing is on, and stops being displayed when the driver turns it off.",
        "Driver and member details: information submitted in a driver application, such as personal information, contact details, driver's license information, vehicle details, proof of address, and documents required by the cooperative, such as a driver's license and vehicle registration. Registered drivers may also record their preferred working and trip schedules and baggage prices. For cooperative members, membership status, capital contribution, and share ownership records.",
        "Payment details: your payment method, payment confirmations, payment reference numbers, and other proof of payment you submit for cash or GCash payments.",
        "Discount applications: the identification document you submit to apply for a senior citizen, student, or PWD discount, collected only to verify eligibility.",
        "Ratings and messages: the ratings and comments you submit after a trip, and the messages you exchange with drivers, passengers, cooperative members, and staff through in-app communication.",
        "Entries made by authorized staff, including bookings encoded for passengers who have no DATUM account.",
        "Device and activity data: device type, app version, notification tokens, and activity logs, kept for security and troubleshooting.",
        ],
    },
    {
        title: "3. How We Use Your Information",
        body: ["We use personal information for the following purposes:"],
        list: [
        "Creating and managing accounts, signing you in, and confirming your identity.",
        "Handling bookings for passenger trips, cargo, and van-for-hire, and pairing passengers with drivers and vehicles.",
        "Computing fares automatically from the service, route distance, vehicle capacity, and baggage or cargo details.",
        "Processing payments, verifying submitted proof of payment, and issuing receipts.",
        "Reviewing discount applications and the identification documents submitted with them.",
        "Giving cooperative staff and members the records they need to manage trips, schedules, dispatch, drivers, vehicles, membership, seminars, and reports.",
        "Checking new records against existing ones to avoid duplicate entries.",
        "Suggesting trips and destinations based on your booking history when this feature is available.",
        "Sending booking confirmations, payment updates, schedule changes, announcements, weather advisories, seminar invitations, and security alerts.",
        "Reviewing driver applications, ratings, and feedback, and applying the cooperative's service standards, including warnings, suspensions, and terminations.",
        "Keeping riders and drivers safe, preventing fraud, and making DATUM better.",
        "Meeting our legal and regulatory duties.",
        ],
    },
    {
        title: "4. Legal Basis for Processing",
        body: [
        "We handle personal information in line with Republic Act No. 10173 (the Data Privacy Act of 2012), its Implementing Rules and Regulations, and the issuances of the National Privacy Commission. Three principles guide us: transparency, legitimate purpose, and proportionality. In practice, we ask only for information that is relevant and reasonably needed for the purposes stated in this policy.",
        "Our basis for processing is your consent, which you give freely, for a specific purpose, and with full information, together with our need to deliver the bookings you request. You can take back your consent whenever you wish by reaching our Data Protection Officer, though features that depend on that data may stop working. Where the law calls for a separate consent, for example before we access your device location, we ask for it on its own.",
        "DATUM is meant for people who can legally enter into a booking. If you are below 18, a parent or legal guardian must consent for you.",
        ],
    },
    {
        title: "5. Sharing and Disclosure",
        body: [
        "We share personal information only when the lawful running of DATUM requires it. Recipients may include:",
        ],
        list: [
        "The driver or passenger on your trip, limited to what the trip needs, such as a name, pickup point, and contact number. A driver's registered contact number is likewise made available to the passenger assigned to the trip.",
        "Cooperative officers, members, administrators, and staff who need the information for their work and are bound to keep it confidential. This includes the staff who verify payments and the driver whose GCash details appear on your booking.",
        "Other drivers in the cooperative's coordination group, for trip coordination, announcements, and advisories.",
        "Service providers that keep DATUM running, such as those for hosting, sign-in, SMS, and notifications, under agreements requiring them to protect your data.",
        "Government agencies, courts, or law enforcement, when the law or a lawful order requires it.",
        ],
    },
    {
        title: "6. Retention of Information",
        body: [
        "We hold personal information only for as long as it serves the purpose it was collected for, and for as long as record-keeping, legal, and regulatory rules require. Once it is no longer needed, it is securely erased or made anonymous.",
        "DATUM does not sell your personal information, and we do not use it for purposes unrelated to operating the service.",
        "You may ask us to deactivate or delete your account. Such requests are honored unless a legal, regulatory, or record-retention requirement says we must keep certain data.",
        ],
    },
    {
        title: "7. Security",
        body: [
        "We use organizational, physical, and technical safeguards that are reasonable for the data involved, to guard against unauthorized access, use, disclosure, alteration, and destruction. Examples are role-based access control that limits records to authorized personnel, encrypted logins including Google sign-in, encrypted passwords, encrypted connections, and the secure handling of GCash payments. Driver application documents and personal information are stored and transmitted securely.",
        "Driver's license numbers and other government-issued identifiers, together with the identification documents submitted for discounts, are sensitive personal information. We collect them only to confirm eligibility, and we protect them more strictly than ordinary data.",
        "If a breach exposes sensitive personal information, or data that could enable identity fraud, and is likely to cause you serious harm, we will inform the National Privacy Commission and the people affected within 72 hours of learning of it, as the law requires. We log every security incident.",
        ],
    },
    {
        title: "8. Research, Demonstration, and Presentation",
        body: [
        "DATUM began as an academic capstone project, so it may be shown in classrooms, technical reviews, institutional events, and other project-related settings. Whenever possible, those showings and the materials behind them, such as reports, screenshots, and videos, rely on simulated, anonymized, or aggregated data instead of real personal data. We do not reveal identifiable personal information in a presentation just for the sake of a demo when doing so is not needed.",
        ],
    },
    {
        title: "9. Your Rights and Choices",
        body: [
        "The Data Privacy Act of 2012 gives you these rights as a data subject:",
        ],
        list: [
        "The right to be informed if and how your personal data is processed.",
        "The right to obtain a copy of the personal data we hold about you.",
        "The right to object to processing, including by withdrawing your consent.",
        "The right to correct data that is wrong or incomplete.",
        "The right to have data erased or blocked when it is outdated, unlawfully obtained, or no longer necessary.",
        "The right to data portability: a copy of your data in a commonly used electronic format, where it is processed electronically.",
        "The right to compensation for damage caused by inaccurate, false, unlawfully obtained, or unauthorized use of your data.",
        "The right to file a complaint with the National Privacy Commission.",
        ],
    },
    {
        title: "10. Changes to This Privacy Policy",
        body: [
        "We may revise this policy as DATUM evolves, as laws and security needs change, or as the cooperative's arrangements shift. Significant changes will be announced in the app or on this page under a new date, and we will ask for your consent again if the law requires it.",
        "Each version of the policy carries its own version number and effective date, so the version you accepted can always be identified.",
        ],
    },
    {
        title: "11. How to Reach Us",
        body: [
        "For questions about this policy, to exercise your rights, or to withdraw consent, contact DATUM at luzondatum2026@gmail.com or visit the cooperative office in Murallon, Boac, Marinduque.",
        ],
    },
];