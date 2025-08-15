import { Users, Award, Heart, Target, Zap, Sparkles } from "lucide-react";
import { ContentItem } from "../types/types";

export const ctaData = {
  title: "Ready to Work Together?",
  description: "Let's create something amazing that tells your unique story.",
  buttonText: "Get In Touch",
};

export const contentData: ContentItem[] = [
  {
    id: "story",
    icon: Users,
    title: "Our Story",
    type: "paragraphs",
    content: [
      "Founded with a vision to bridge the gap between creativity and technology, we've grown from a small team of passionate designers and developers into a full-service digital agency.",
      "Our journey began with a simple belief: that every business deserves exceptional digital experiences that not only look beautiful but also drive real results. This philosophy continues to guide everything we do.",
      "Today, we're proud to work with businesses of all sizes, from innovative startups to established enterprises, helping them navigate the digital landscape with confidence and style.",
    ],
  },
  {
    id: "mission",
    icon: Target,
    title: "Our Mission",
    type: "mission-vision",
    content:
      "To empower businesses with innovative digital solutions that inspire, engage, and deliver measurable results while fostering long-term partnerships built on trust and excellence.",
    vision: {
      title: "Our Vision",
      content:
        "To be the leading creative agency that transforms how businesses connect with their audiences through purposeful design and innovative technology.",
    },
  },
];

export const statsData = [
  {
    number: 150,
    label: "Projects Completed",
    icon: Award,
  },
  {
    number: 50,
    label: "Happy Clients",
    icon: Heart,
  },
  {
    number: 5,
    label: "Years Experience",
    icon: Target,
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: Zap,
  },
];
export const headerData = {
  badge: {
    icon: Sparkles,
    text: "About Us",
  },
  title: "Passionate About",
  highlight: "Digital Innovation",
  description:
    "We're a dedicated team of creative professionals who believe in the power of exceptional design and cutting-edge technology to transform businesses and create meaningful connections.",
};
