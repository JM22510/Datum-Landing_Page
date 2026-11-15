import createAccount from "../assets/guidephoneui/createaccount.png";
import login from "../assets/guidephoneui/loginaccount.png";
import services from "../assets/guidephoneui/services.png";
import booking from "../assets/guidephoneui/booking.png";
import baggage from "../assets/guidephoneui/baggage.png"
import passengerType from "../assets/guidephoneui/passengerdetails.png";
import reviewandpayment from "../assets/guidephoneui/reviewandpayment.png"
import persnalinfo from "../assets/guidephoneui/personalinfo.png";
import beneficiaries from "../assets/guidephoneui/beneficiaries.png";
import license from "../assets/guidephoneui/driverlicense.png";
import docs from "../assets/guidephoneui/docs.png";
import id from "../assets/guidephoneui/faceid.png";
import review from "../assets/guidephoneui/confirmed.png";
import schedule from "../assets/guidephoneui/schedule.png";
import membership from "../assets/guidephoneui/membership.png";
import trips from "../assets/guidephoneui/bookings.png"


export type GuideKey = "passenger" | "registration" | "member";

export type Step = {
    title: string;
    description: string;
    image: string;
    imageScale?: number;
};

export type Guide = {
    label: string;
    steps: Step[];
};

export const GUIDES: Record<GuideKey, Guide> = {
    passenger: {
        label: "Passenger guides",
        steps: [
        {
            title: "Account registration",
            description:
            "Create your account using your email, then verify it to start booking.",
            image: createAccount,
        },
        {
            title: "Log in",
            description:
            "Sign in with your email and password to access your account and start planning your trip.",
            image: login,
            imageScale: 1.2 
        },
        {
            title: "Choosing services",
            description:
            "Pick the service you need: book a trip, hire a van, or send baggage.",
            image: services,
        },
        {
            title: "Enter trip details",
            description:
            "Set your pickup point and destination so we know where you're going.",
            image: booking,
        },
        {
            title: "Passenger type",
            description:
                "Select your passenger type, such as student or regular, so the correct fare is applied to your booking.",
            image: passengerType,
        },
        {
            title: "Baggage",
            description:
                "Add your baggage if you have any, so the driver and cooperative know how much space to prepare.",
            image: baggage,
        },
        {
            title: "Review and Payment",
            description:
            "Pay with GCash or Maya, or choose cash on pickup and pay the driver when you're picked up.",
            image: reviewandpayment,
        },
        {
            title: "Receipt and Confirmation",
            description:
            "Review your trip details, then pay with GCash or Maya. Prefer cash? Choose cash on pickup and pay your driver directly.",
            image: review,
        },
        ],
    },
    registration: {
        label: "Membership guides",
        steps: [
            {
            title: "Personal information",
            description:
                "Enter your personal details and create your account. If you're applying as an operator, also include your driver information.",
            image: persnalinfo,
            },
            {
            title: "Family information",
            description:
                "Add your spouse and beneficiaries, if applicable.",
            image: beneficiaries,
            },
            {
            title: "License and vehicle information",
            description:
                "Enter your driver's license details and your vehicle information.",
            image: license,
            },
            {
            title: "Upload documents",
            description:
                "Upload clear photos of the front and back of your driver's license, plus your vehicle's OR (Official Receipt) and CR (Certificate of Registration).",
            image: docs,
            },
            {
            title: "Face verification",
            description:
                "Take a live photo of your face so we can match it against your ID.",
            image: id,
            },
            {
            title: "Review and submit",
            description:
                "Check all your information and documents, then submit. The cooperative will review your application and let you know once it's approved.",
            image: review,
            },
        ],
        },
    member: {
        label: "Cooperative member guides",
        steps: [
        {
            title: "Request schedule and pay trip schedule fee",
            description:
            "Request your preferred trip schedule, then pay the trip schedule fee to confirm your slot.",
            image: schedule,
        },
        {
            title: "Pay monthly membership",
            description:
            "Settle your monthly membership dues to keep your account active and eligible to receive bookings.",
            image: membership,
        },
        {
            title: "Accept passenger booking",
            description:
            "Review incoming booking requests for your scheduled trip and accept the ones you can take.",
            image: trips,
        },
        ],
    },
};

// Explicit order: tabs/menus render in this sequence, not in object-key order.
export const GUIDE_KEYS: GuideKey[] = ["passenger", "registration", "member"];