import passenger from "../assets/DatumUI2.png"
import driver from "../assets/driver.png"
import operator from "../assets/operator.png"
import admin from "../assets/admin.png"


export type RoleKey = "passenger" | "driver" | "operator" | "admin";

export type Role = {
  label: string;
  title: string;
  description: string;
  features: string[];
  image: string;
};

export const ROLES: Record<RoleKey, Role> = {
  passenger: {
    label: "Passenger",
    title: "Everything you need to move",
    description:
      "Find your ride, reserve your seat, and stay informed from pickup to arrival.",
    features: [
      "Browse available trips",
      "Reserve and track bookings",
      "See fares and schedules",
      "Message your driver",
    ],
    image: passenger,
  },
  driver: {
    label: "Driver",
    title: "Your trips, your way",
    description: "Your trips, your way. Make every route count with simple tools built for drivers.",
    features: ["Create trip schedules", "Manage available seats", "Accept booking requests", "Update trip statuses in real time"],
    image: driver,
  },
  operator: {
    label: "Operator",
    title: "Complete control over operations",
    description: "Manage routes, schedules, and bookings of your drivers with a comprehensive dashboard",
    features: ["Automated driver performance records","Real-time route & status monitoring", "Automated trip and revenue records", "Driver activity monitoring & schedule logs"],
    image: operator
  },
  admin: {
    label: "Admin",
    title: "See the whole picture",
    description: "Keep your cooperative organized, informed, and moving forward.",
    features: ["Manage member accounts", "Review driver applications", "Monitor trips and bookings", "Generate reports and analytics"],
    image: admin,
  },
};

export const ROLE_KEYS = Object.keys(ROLES) as RoleKey[];