import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  text: string;
  // children?: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Button>;

export const Button_v4 = ({ text, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-gradient-to-tr duration-500 ease-in-out active:translate-y-0.5 active:scale-100",
        "active:shadow-none from-[#3e2325] to-[#251a15] text-secondary ",
        rest.className
      )}
    >
      <span className="absolute size-0 rounded-lg bg-secondary opacity-10 transition-all duration-300 ease-out group-hover:size-full"></span>
      <span className="relative z-30">
        <span className="group relative overflow-hidden text-sm shadow-md rounded-md py-2 px-3 lg:px-6 duration-700 z-30">
          <span className="hidden relative md:inline-flex items-center">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="duration-700 group-hover:[transform:rotateY(360deg)]"
                style={{ transitionDelay: `${index * 0.02}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </span>
      </span>
    </Button>
  );
};
