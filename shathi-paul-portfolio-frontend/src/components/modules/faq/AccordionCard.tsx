import { IFAQData } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionCard = ({ faqData }: { faqData: IFAQData[] }) => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="bg-secondary px-6 lg:w-2/3 m-auto shadow-lg rounded-lg mb-6 md:mb-8 lg:mb-16 relative z-30"
    >
      {faqData.map((data, index) => (
        <AccordionItem key={index} className="my-2" value={`item-${index + 1}`}>
          <AccordionTrigger className="lg:text-lg hover:no-underline">
            {data.ques}
          </AccordionTrigger>
          <AccordionContent className="lg:text-base">
            {data.ans}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionCard;
