import { LucideIcon } from "lucide-react";

export interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

// Services Section
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
}
// Services Section end
// header Section
export interface NavItem {
  label: string;
  href: string;
}
// header Section end
// About Section
export interface CTAData {
  title: string;
  description: string;
  buttonText: string;
}

type ParagraphContent = {
  id: string;
  icon: LucideIcon;
  title: string;
  type: "paragraphs";
  content: string[];
};

type MissionVisionContent = {
  id: string;
  icon: LucideIcon;
  title: string;
  type: "mission-vision";
  content: string;
  vision: {
    title: string;
    content: string;
  };
};
// About Section end

export type ContentItem = ParagraphContent | MissionVisionContent;
