import type { IconName } from "@/components/ui/icon";
import { t } from '@/localization/utils';

export type Ambassadors = {
    title: string;
    description: string;
    bgColor: string;
    icon: IconName;
};

export const ambassadors: Ambassadors[] = [
    {
        title: t("Promote Diversity"),
        description: t("Advocate for gender inclusion and equity in the automotive sector."),
        icon: "handshake",
        bgColor: "text-indigo-400",
    },
    {
        title: t("Represent the Program"),
        description: t("Be the voice and face of the program across platforms and forums."),
        icon: "presentation",
        bgColor: "text-pink-400",
    },
    {
        title: t("Inspire Confidence"),
        description: t("Act as a role model, motivating other women to overcome challenges."),
        icon: "shield-check",
        bgColor: "text-green-400",
    },
    {
        title: t("Drive Innovation"),
        description: t("Collaborate in creating new ideas and approaches within the industry."),
        icon: "lightbulb",
        bgColor: "text-yellow-400",
    },
    {
        title: t("Industry Impact"),
        description: t("Be part of a movement that promotes diversity and inclusion."),
        icon: "factory",
        bgColor: "text-gray-400",
    },
    {
        title: t("Enable Continuous Learning"),
        description: t("Share up-to-date knowledge and resources."),
        icon: "book-open",
        bgColor: "text-purple-400",
    },
    {
        title: t("Support Decision-Making"),
        description: t("Provide strategic advice based on personal experience."),
        icon: "brain",
        bgColor: "text-blue-400",
    },
    {
        title: t("Commit to the Program"),
        description: t("Actively participate in community events and activities."),
        icon: "calendar-check",
        bgColor: "text-teal-400",
    },
    {
        title: t("Promote Professional Growth"),
        description: t("Help the community reach its professional goals."),
        icon: "trending-up",
        bgColor: "text-red-400",
    },
    {
        title: t("Build Strong Networks"),
        description: t("Connect network members with a valuable professional community."),
        icon: "network",
        bgColor: "text-cyan-400",
    }
];

export type Collaborators = {
    title: string;
    description: string;
    bgColor: string;
    icon: string;
};

export const collaborators: Collaborators[] = [
    {
        title: t("Skill Development"),
        description: t("Improve your professional and personal capabilities."),
        bgColor: "text-red-500",
        icon: "brain",
    },
    {
        title: t("Network Building"),
        description: t("Connect with influential women and professionals in the automotive sector."),
        bgColor: "text-cyan-500",
        icon: "network",
    },
    {
        title: t("Inspiration and Motivation"),
        description: t("Receive constant support to overcome challenges."),
        bgColor: "text-yellow-500",
        icon: "sun",
    },
    {
        title: t("Continuous Learning"),
        description: t("Participate in workshops, talks, and activities that drive your growth."),
        bgColor: "text-purple-500",
        icon: "book-open",
    },
    {
        title: t("Strategic Perspectives"),
        description: t("Gain advice and strategies to advance your career."),
        bgColor: "text-blue-500",
        icon: "compass",
    },
    {
        title: t("Active Participation"),
        description: t("Contribute ideas and receive constructive feedback."),
        bgColor: "text-orange-500",
        icon: "message-circle",
    },
    {
        title: t("Goal Setting"),
        description: t("Establish clear and achievable professional goals."),
        bgColor: "text-teal-500",
        icon: "target",
    },
    {
        title: t("Personal Growth"),
        description: t("Develop confidence and self-awareness in a supportive environment."),
        bgColor: "text-red-500",
        icon: "heart",
    },
    {
        title: t("Industry Impact"),
        description: t("Be part of a movement that promotes diversity and inclusion in the automotive sector."),
        bgColor: "text-gray-500",
        icon: "factory",
    },
    {
        title: t("Access to Personalized Mentorship"),
        description: t("Receive guidance from an experienced leader in the industry."),
        bgColor: "text-emerald-500",
        icon: "user-check",
    }
];

export type Benefits = {
    icon: string;
    title: string;
    description: string;
    bgColor: string;
};

export const benefits: Benefits[] = [
    {
        icon: "book-open",
        title: t("Masterclasses"),
        description: t("Ongoing access to classes on leadership, personal development, digitalization, and processes."),
        bgColor: "text-blue-500",
    },
    {
        icon: "trending-up",
        title: t("Professional Development"),
        description: t("Free resources and an empowering community to strengthen your career."),
        bgColor: "text-green-500",
    },
    {
        icon: "users",
        title: t("Supportive Community"),
        description: t("Network of Automotive Women and experts to share questions, experiences, and advice."),
        bgColor: "text-purple-500",
    },
    {
        icon: "graduation-cap",
        title: t("Scholarship Access"),
        description: t("Discounts and opportunities in specialized products and services."),
        bgColor: "text-yellow-500",
    }
];
