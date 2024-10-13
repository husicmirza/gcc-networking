import { icons } from "lucide-react";

interface IconProps {
  name: string;
  color?: string;
  size?: number | string;
}

const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
