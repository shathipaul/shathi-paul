import { Button_v4 } from "@/components/common/buttons/Button_v4";
import CommonButton from "@/components/common/buttons/CommonButton";
import CommonTitle from "@/components/common/CommonTitle";
import OpacityAnimation from "@/components/common/OpacityAnimation";
import AccordionCard from "@/components/modules/faq/AccordionCard";

import { getAllData } from "@/services/GetServices";
import Link from "next/link";

const FAQPage = async () => {
  const faqData = await getAllData("faq.json");
  return (
    <OpacityAnimation>
      <div className="py-10 md:py-28 relative z-30">
        <CommonTitle text="Frequently Asked Questions" />
        <AccordionCard faqData={faqData} />

        <div className="p-12 bg-secondary shadow-lg border-2 rounded-xl w-1/2 mx-auto">
          <h4 className="text-center text-3xl mb-6">Still Have Questions?</h4>
          <div className="grid grid-cols-2 items-center gap-10">
            <Link
              href={
                "https://calendly.com/shathi-paul/website-strategy-call-with-shathi-paul"
              }
            >
              <Button_v4 text="Let's talk" />
            </Link>

            <CommonButton text="Send a message" />
          </div>
        </div>
      </div>
    </OpacityAnimation>
  );
};

export default FAQPage;
