import { GradualSpacing } from "@/components/common/GradualSpacing";
import BannerBottom from "./BannerBottom";

const BannerSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <GradualSpacing text="Your Ideas Deserve a Website" />
      <GradualSpacing text="That Works Everywhere!" delayOffset={2} />
      <BannerBottom />
    </div>
  );
};

export default BannerSection;
