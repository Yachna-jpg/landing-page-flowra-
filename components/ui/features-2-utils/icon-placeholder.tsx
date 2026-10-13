import * as React from "react";
import {
  Users,
  BarChart,
  ShieldCheck,
  Check,
  ArrowRight,
  type LucideProps,
} from "lucide-react";

export interface IconPlaceholderProps extends React.SVGProps<SVGSVGElement> {
  lucide?: string;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
  size?: number | string;
  className?: string;
  "data-icon"?: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Users,
  BarChart,
  ShieldCheck,
  Check,
  ArrowRight,
};

export const IconPlaceholder: React.FC<IconPlaceholderProps> = ({
  lucide,
  size,
  className,
  ...props
}) => {
  if (lucide && iconMap[lucide]) {
    const Component = iconMap[lucide];
    return <Component size={size} className={className} {...(props as LucideProps)} />;
  }

  return (
    <span
      className={className}
      style={{ display: "inline-block", width: size || 16, height: size || 16 }}
    />
  );
};
