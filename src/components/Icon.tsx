import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon: IconDefinition;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

const Icon = ({ icon, className, ariaLabel, ...props }: IconProps) => (
  <FontAwesomeIcon
    icon={icon}
    className={cn(className)}
    aria-hidden={ariaLabel ? undefined : true}
    aria-label={ariaLabel}
    {...props}
  />
);

export default Icon;
