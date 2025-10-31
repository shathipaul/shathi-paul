import AboutSection from "./about/AboutSection";
import BannerSection from "./banner/BannerSection";
import ContactSection from "./contact/ContactSection";
import FrequentlyAQSection from "./faq/FrequentlyAQSection";
import ProjectsSection from "./projects/ProjectsSection";
import ReviewsSection from "./reviews/ReviewsSection";
import ServicesSection from "./services/ServicesSection";
import SkillsSection from "./skills/SkillsSection";

const HomeMain = () => {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ReviewsSection />
      <SkillsSection />
      <FrequentlyAQSection />
      <ContactSection />
    </div>
  );
};

export default HomeMain;
