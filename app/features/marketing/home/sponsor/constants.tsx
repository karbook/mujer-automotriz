import type { IconName } from "@/components/ui/icon";
import { t } from '@/localization/utils';

export type Sponsorships = {
    icon: IconName,
    title: string,
    description: string,
    bgColor: string,
}

export const sponsorships: Sponsorships[] = [
    {
        icon: "megaphone",
        title: t("Visibility and Positioning"),
        description: t("Increase your brand presence in the automotive industry."),
        bgColor: "text-green-400",
    },
    {
        icon: "users",
        title: t("Diversity Promotion"),
        description: t("Actively support inclusion and gender equity in the sector."),
        bgColor: "text-green-400",
    },
    {
        icon: "briefcase",
        title: t("Access to Talent"),
        description: t("Connect with leaders and emerging professionals in the sector."),
        bgColor: "text-green-400",
    },
    {
        icon: "handshake",
        title: t("Strategic Networking"),
        description: t("Participate in exclusive events and create high-impact alliances."),
        bgColor: "text-green-400",
    },
    {
        icon: "lightbulb",
        title: t("Contribution to Change"),
        description: t("Influence the industry's agenda towards a more inclusive future."),
        bgColor: "text-green-400",
    },
    {
        icon: "book-open",
        title: t("Access to Specialized Resources"),
        description: t("Benefit from shared insights and knowledge from DEI experts."),
        bgColor: "text-green-400",
    },
    {
        icon: "handshake",
        title: t("Collaboration Opportunities"),
        description: t("Collaborate on initiatives that drive innovation and inclusive leadership."),
        bgColor: "text-green-400",
    },
    {
        icon: "heart",
        title: t("Community Impact"),
        description: t("Support the professional development of female leaders in the industry."),
        bgColor: "text-green-400",
    },
    {
        icon: "flag",
        title: t("Legacy Building"),
        description: t("Leave a positive and lasting mark on the evolution of the automotive industry."),
        bgColor: "text-green-400",
    }
];

export type BenefitsAligneds = {
    icon: string,
    title: string,
    description: string,
    bgColor: string,
}

export const benefitsAligneds: BenefitsAligneds[] = [
    {
        icon: "lightbulb",
        title: t("Innovation Exposure"),
        description: t("Showcase advancements led by women and revolutionary technologies in your organization."),
        bgColor: "text-black",
    },
    {
        icon: "handshake",
        title: t("Industry Collaboration"),
        description: t("Find collaboration opportunities with industry innovators to drive growth."),
        bgColor: "text-black",
    },
    {
        icon: "briefcase",
        title: t("Internship Programs"),
        description: t("Connect with emerging talent and strengthen inclusion in the industry."),
        bgColor: "text-black",
    },
    {
        icon: "users",
        title: t("Let's Redefine Leadership"),
        description: t("Drive transformative conversations and help shape the future of the industry."),
        bgColor: "text-black",
    },
    {
        icon: "award",
        title: t("Recognition and Awards"),
        description: t("Collaborate on recognition programs to highlight achievements and contributions."),
        bgColor: "text-white",
    },
    {
        icon: "network",
        title: t("High-Level Networking"),
        description: t("Be part of exclusive events with decision-makers and industry executives."),
        bgColor: "text-white",
    }
];
