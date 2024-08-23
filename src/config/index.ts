import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Kiraye - Rental Store",
        template: `%s | Kiraye`
    },
    description: "Kiraye is a versatile rental platform that makes it easy to find and manage all types of rentals, from properties to everyday items.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Kiraye - Rental Store",
        description: "Kiraye is a versatile rental platform that makes it easy to find and manage all types of rentals, from properties to everyday items.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@muminbashir",
        title: "Kiraye - Rental Store",
        description: "Kiraye is a versatile rental platform that makes it easy to find and manage all types of rentals, from properties to everyday items.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://kiraye-app.vercel.app"),
};
