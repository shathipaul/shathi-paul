import { Button_v4 } from "@/components/common/buttons/Button_v4";
import CommonButton from "@/components/common/buttons/CommonButton";
import CommonTitle from "@/components/common/CommonTitle";
import OpacityAnimation from "@/components/common/OpacityAnimation";
import AccordionCard from "@/components/modules/faq/AccordionCard";
import { getAllData } from "@/services/GetServices";

const FAQPage = async () => {
  const faqData = await getAllData("faq.json");
  return (
    <OpacityAnimation>
      <div className="pt-20 lg:pt-28 pb-10 relative z-30">
        <CommonTitle text="Frequently Asked Questions" />
        <AccordionCard faqData={faqData} />

        <div className="p-6 md:p-12 bg-secondary shadow-lg border-2 rounded-xl md:w-2/3 lg:w-1/2 mx-auto">
          <h4 className="text-center text-xl md:text-3xl mb-6">
            Still Have Questions?
          </h4>
          <div className="grid md:grid-cols-2 items-center gap-4 md:gap-8">
            <a
              href="https://calendly.com/shathi-paul/website-strategy-call-with-shathi-paul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a meeting about your website project with Shathi Paul"
            >
              <Button_v4 text="Let's talk" className="w-full" />
            </a>

            <CommonButton text="Send a message" />
          </div>
        </div>
      </div>
    </OpacityAnimation>
  );
};

export default FAQPage;
