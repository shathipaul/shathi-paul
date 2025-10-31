import { Button_v4 } from "@/components/common/buttons/Button_v4";
import CommonTitle from "@/components/common/CommonTitle";
import OpacityAnimation from "@/components/common/OpacityAnimation";
import Image from "next/image";
import Link from "next/link";

const ServicePage = () => {
  const serviceData = [
    {
      //  logo: num1,
      title: "Landing Page",
      description:
        "Patient Care Optimization Medical Diagnosis Drug Discovery Healthcare Analytics",
      price: "100",
      features: [
        "Clean, modern design",
        "Fast loading & responsive",
        "Conversion-focused layout",
        "Integrated forms & CTAs",
      ],
      position: {
        root: "top-0 left-0",
        logo: "left-0 md:right-0 top-0",
        card: "bottom-0 md:top-16 left-0 md:right-0",
      },
    },
    {
      //  logo: num2,
      title: "Business Page",
      description:
        "Predictive Maintenance Quality Control Supply Chain Optimization Process Automation",
      price: "400",
      features: [
        "About, services, contact pages",
        "SEO-friendly structure",
        "Mobile responsive",
        "Easy to update and scale",
      ],
      position: {
        root: "top-[200px] md:top-auto md:bottom-0 left-0 md:left-0 lg:left-20 xl:left-64",
        logo: "right-0 md:left-0 top-0 md:bottom-16",
        card: "right-0 md:right-10 bottom-0 md:bottom-5 lg:bottom-0",
      },
    },
    {
      //  logo: num3,
      title: "E-Commerce",
      description:
        "Product Recommendations Dynamic Pricing Customer Segmentation Conversion Optimization",
      price: "500",
      features: [
        "Product listings & categories",
        "Secure checkout & payments",
        "Shopping cart & wishlist",
        "Easy product management",
      ],
      position: {
        root: "top-[400px] md:top-1/2 lg:top-20 md:-translate-y-1/2 lg:-translate-y-0 left-0 md:left-1/2 md:-translate-x-1/2",
        logo: "left-0 top-0 md:bottom-16 md:right-0",
        card: "left-0 md:right-0 bottom-0 md:top-16",
      },
    },
    {
      //  logo: num4,
      title: "Blog Website",
      description:
        "Customer Behavior Analysis Inventory Optimization Personalized Marketing Demand Forecasting",
      price: "500",
      features: [
        "Modern blog layout",
        "SEO-ready structure",
        "Category & tags system",
        "Easy content management",
      ],
      position: {
        root: "top-[600px] md:top-auto md:bottom-4 left-0 md:left-auto md:right-0 lg:right-24 xl:right-48",
        logo: "right-0 top-0 md:bottom-16",
        card: "right-0 md:right-6 bottom-0 md:bottom-4 xl:bottom-0",
      },
    },
    {
      //  logo: num5,
      title: "Service Website",
      description:
        "Customer Behavior Analysis Inventory Optimization Personalized Marketing Demand Forecasting",
      price: "500",
      features: [
        "Service listings & details",
        "Booking/contact forms",
        "SEO-optimized pages",
        "Testimonials & reviews",
      ],
      position: {
        root: "top-[800px] md:top-0 left-0 md:left-auto md:right-0",
        logo: "left-0 top-0",
        card: "left-0 md:left-auto md:right-12 bottom-0 md:top-16",
      },
    },
  ];
  return (
    <OpacityAnimation>
      <div className="pt-20 lg:pt-28 pb-10">
        <CommonTitle text="My Awesome Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p">
          {serviceData.map((data, index) => (
            <div
              key={index}
              className="relative z-30 shadow-inset-blue bg-secondary/10 backdrop-blur-md  shadow-lg rounded-lg flex flex-col gap-6 p-10"
            >
              {/* <div className="flex items-center gap-4">
                <Image src={""} alt="" />
              </div> */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                <p className="text-sm">{data.description}</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg flex gap-2 md:gap-4 justify-center items-center">
                <span className="text-sm text-gold">Starting from</span>
                <span className="font-semibold text-2xl italic text-primary">
                  {" "}
                  ${data.price}
                </span>
              </div>
              <ul className="leading-5 text-sm list-disc pl-5 space-y-1">
                {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <Link
                href={
                  "https://calendly.com/shathi-paul/website-strategy-call-with-shathi-paul"
                }
              >
                <Button_v4 text="Get Started" className="w-full" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </OpacityAnimation>
  );
};

export default ServicePage;
