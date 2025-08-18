import { Palette, Printer, Monitor, Camera, Video } from "lucide-react";
import { ServiceItem } from "../types/types";

export const Data_services: ServiceItem[] = [
  {
    id: 1,
    title: "Branding & Identity",
    description:
      "Create compelling brand identities that resonate with your audience and stand out in the market.",
    icon: <Palette className="w-8 h-8" />,
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
    ],
    gradient: "bg-button-gradient",
  },
  {
    id: 2,
    title: "Print Design",
    description:
      "Professional print materials that make a lasting impression and communicate your message effectively.",
    icon: <Printer className="w-8 h-8" />,
    features: ["Business Cards", "Brochures", "Posters", "Packaging Design"],
    gradient: "bg-button-gradient",
  },
  {
    id: 3,
    title: "Technology Solutions",
    description:
      "Cutting-edge digital solutions tailored to transform your business and enhance user experience.",
    icon: <Monitor className="w-8 h-8" />,
    features: [
      "Web Development",
      "Mobile Apps",
      "UI/UX Design",
      "System Integration",
    ],
    gradient: "bg-button-gradient",
  },
  {
    id: 4,
    title: "Photography & Videography",
    description:
      "Capture your story through stunning visuals that engage and inspire your audience.",
    icon: <Camera className="w-8 h-8" />,
    features: [
      "Product Photography",
      "Event Coverage",
      "Corporate Portraits",
      "Commercial Videos",
    ],
    gradient: "bg-button-gradient",
  },
  {
    id: 5,
    title: "Motion Video Graphics",
    description:
      "Dynamic motion graphics and animations that bring your ideas to life with visual impact.",
    icon: <Video className="w-8 h-8" />,
    features: [
      "2D/3D Animation",
      "Motion Graphics",
      "Video Editing",
      "Visual Effects",
    ],
    gradient: "bg-button-gradient",
  },
];
