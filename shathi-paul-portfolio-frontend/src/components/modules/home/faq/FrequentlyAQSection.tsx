import CommonTitle from "@/components/common/CommonTitle";
import { getAllData } from "@/services/GetServices";
import AccordionCard from "../../faq/AccordionCard";
import { Button_v4 } from "@/components/common/buttons/Button_v4";
import Link from "next/link";

const FrequentlyAQSection = async () => {
  const faqData = await getAllData("faq.json");
  const limitedFaqData = faqData.slice(0, 5);
  return (
    <div className="mb-16 mx-auto">
      <CommonTitle text="Frequently Asked Questions" />
      <AccordionCard faqData={limitedFaqData} />
      <Link href={"/faq"} className="relative z-30 mx-auto flex w-fit">
        <Button_v4 text="More Questions here" />
      </Link>
    </div>
  );
};

export default FrequentlyAQSection;
