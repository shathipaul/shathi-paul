import { getDataById } from "@/services/GetServices";

import Image from "next/image";
import adminImg from "@/assets/images/shathi-paul.jpg";
import { PiCrownSimpleFill } from "react-icons/pi";
import { Button_v4 } from "@/components/common/buttons/Button_v4";
import Link from "next/link";

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  // const { blogId } = await params;
  // const blog = await getDataById("todos", blogId);

  return (
    <div className="pt-20 lg:pt-28 pb-10">
      <div className="max-w-[960px] m-auto py-8 lg:py-16 px-6 md:px-20 my-10 md:my-20 relative z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90 backdrop-blur-xl rounded-2xl shadow-2xl"></div>

        {/* Admin part */}
        <div className="relative flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src={adminImg}
                alt="Admin"
                width={60}
                height={60}
                className="rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-secondary"
              />
              <span className="absolute -bottom-1 -right-1 text-gold">
                <PiCrownSimpleFill size={20} />
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary/90 font-medium">
                <span>Admin</span>
              </div>
              <div className="text-sm text-muted-foreground/80">
                <span>21 Mar 2025</span>
                <span className="mx-2">•</span>
                <span>2 mins read</span>
              </div>
            </div>
          </div>
          {/* <SocialIcon /> */}
        </div>

        {/* Title and Image */}
        <div className="relative flex flex-col gap-6 mb-12">
          <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Performance Is Profit
          </h2>
          <h1 className="text-xl lg:text-2xl font-medium text-primary/80 leading-relaxed">
            How Website Speed Directly Impacts Revenue for Modern Businesses
          </h1>
          {/* <div className="w-full h-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={"https://i.ibb.co.com/q3G4FBgG/blog-one.webp"}
              width={500}
              height={500}
              alt=""
            />
          </div> */}
        </div>
        {/* Content */}
        <div className="relative prose prose-lg prose-secondary max-w-none">
          <p className="text-lg leading-relaxed text-primary/80">
            When most people think about website performance, they think about
            &quot;speed&quot; as a technical detail. Something nice to have, but
            not mission-critical.
          </p>
          <p className="text-lg italic text-primary/90">
            But here&apos;s the uncomfortable truth:
          </p>
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            In most industries today, speed is revenue.
          </h4>
          <p className="mb-2">Your website performance influences:</p>
          <ul className="space-y-2 list-none ml-6 mb-6">
            <li className="flex items-center gap-2 text-primary/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
              Conversions
            </li>
            <li className="flex items-center gap-2 text-primary/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
              Customer acquisition cost
            </li>
            <li className="flex items-center gap-2 text-primary/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
              User trust
            </li>
            <li className="flex items-center gap-2 text-primary/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
              Google rankings
            </li>
            <li className="flex items-center gap-2 text-primary/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
              And ultimately… profit
            </li>
          </ul>
          <p className="mb-2">
            In a digital world where attention spans are shrinking, performance
            can become a competitive advantage — or a silent revenue leak.
          </p>
          <p className="mb-2">Let’s break down why.</p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Why Website Speed Matters More Than Ever
          </h4>
          <p className="text-lg leading-relaxed text-primary/80">
            Modern users expect instant responses. We&apos;re talking sub-second
            experiences.
          </p>
          <p className="mb-2">
            Every additional second of load time increases:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Bounce rate</li>
            <li>Drop-offs during checkout</li>
            <li>Abandoned forms</li>
            <li>Frustration with your brand</li>
          </ul>
          <p className="mb-2">
            It doesn’t matter how beautiful your website is if potential
            customers don’t stick around to see it.
          </p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            The Numbers Don’t Lie
          </h4>
          <p className="mb-2">Multiple studies have shown:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              A 1-second delay in page load time can reduce conversions by 7%
            </li>
            <li>A 2-second delay can increase bounce rates by up to 103%</li>
            <li>Even a 100ms delay can be felt by users</li>
          </ul>
          <p className="mb-2">
            That means if your e-commerce site makes $50,000/month:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>A 1-second slowdown could cost you $42,000/year</li>
          </ul>
          <p className="mb-2">
            Performance problems are not just technical problems.
          </p>
          <p className="mb-2">
            They are <span className="font-semibold">financial</span> problems.
          </p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Google Rewards Faster Experiences
          </h4>
          <p className="mb-2">Performance also impacts SEO.</p>
          <p className="mb-2">
            Google’s Core Web Vitals are now ranking signals. If your site is
            slow:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>You lose keyword visibility</li>
            <li>You lose organic traffic</li>
            <li>Paid marketing becomes more expensive</li>
          </ul>
          <p className="mb-2">Meanwhile, your competitors quietly win.</p>
          <p className="mb-2">Search engines favor websites that:</p>
          <ul className="ml-2 mb-4">
            <li>✅ Load fast</li>
            <li>✅ Render meaningful content early</li>
            <li>✅ Stay stable as layout shifts</li>
          </ul>
          <p className="mb-2">
            A high-performing site is a long-term SEO asset.
          </p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            What Causes Performance Slowdowns?
          </h4>
          <p className="mb-2">
            If you work with growing businesses, you’ll see these patterns
            often:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Oversized images</li>
            <li>Client-side heavy frameworks</li>
            <li>Poor database queries</li>
            <li>Lack of caching</li>
            <li>Unoptimized JavaScript bundles</li>
            <li>Too many third-party scripts</li>
            <li>Inefficient server responses</li>
          </ul>
          <p className="mb-2">One or two issues are manageable.</p>
          <p className="mb-2">
            All of them combined? That’s a performance disaster.
          </p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            How Modern Web Architecture Solves This
          </h4>
          <p className="mb-2">
            Today, frameworks like Next.js give us powerful tools:
          </p>
          <ul className="ml-2 mb-4">
            <li className="mb-1">✅ Server-Side Rendering (SSR)</li>
            <li className="mb-2">
              Send ready-to-display HTML to users immediately.
            </li>
            <li className="mb-1">✅ Static Site Generation (SSG)</li>
            <li className="mb-2">Blazing-fast pages deployed worldwide.</li>
            <li className="mb-1">✅ Incremental Static Regeneration (ISR)</li>
            <li className="mb-2">Keep pages fresh without full rebuilds.</li>
            <li className="mb-1">✅ Edge & CDN Delivery</li>
            <li className="mb-2">
              Serve content from locations closest to your users, globally.
            </li>
          </ul>
          <p className="mb-2">This combination drastically improves:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Time to Interactive (TTI)</li>
            <li>First Contentful Paint (FCP)</li>
            <li>Core Web Vitals overall</li>
          </ul>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Database Decisions Matter, Too
          </h4>
          <p className="mb-2">Performance isn’t only frontend.</p>
          <p className="mb-2">
            For growing platforms, choosing the right database layer is crucial:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>PostgreSQL for relational data consistency</li>
            <li>MongoDB for flexible, high-velocity data</li>
            <li>Prisma for type-safe queries</li>
            <li>Caching to reduce latency</li>
          </ul>
          <p className="mb-2">
            A single slow query can drag down the entire user experience.
          </p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Performance Impacts User Psychology
          </h4>
          <p className="mb-2">Fast websites feel:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>More trustworthy</li>
            <li>Higher quality</li>
            <li>More premium</li>
          </ul>
          <p className="mb-2">Slower websites feel:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Cheap</li>
            <li>Outdated</li>
            <li>Risky</li>
          </ul>
          <p className="mb-2">
            That psychological perception influences purchase decisions more
            than companies realize.
          </p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Marketing Campaigns Can Overload Unprepared Websites
          </h4>
          <p className="mb-2">Picture this:</p>
          <p className="mb-2">
            You run a big paid campaign → traffic spikes → your site slows →
            users bounce.
          </p>
          <p className="mb-2">
            You paid for 10,000 clicks… <br /> …but only kept 4,000 of them.
          </p>
          <p className="mb-2">
            That’s <span className="font-semibold">burned ad budget</span>.
          </p>
          <p className="mb-2">High-traffic readiness is priceless.</p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            How to Quickly Improve Performance
          </h4>
          <p className="mb-2">
            Even simple optimizations can have big results:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Compress images</li>
            <li>Lazy-load heavy components</li>
            <li>Remove unused third-party scripts</li>
            <li>Implement caching strategies</li>
            <li>Minify and bundle code</li>
          </ul>
          <p className="mb-2">And track improvements with:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Lighthouse</li>
            <li>PageSpeed Insights</li>
            <li>WebPageTest</li>
            <li>Core Web Vitals dashboards</li>
          </ul>
          <p className="mb-2">Quantify progress.</p>
          <p className="mb-2">Show the business impact.</p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            The Real Value of Performance Work
          </h4>
          <p className="mb-2">It’s not about making a website “fast.”</p>
          <p className="mb-2">It’s about:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>increasing conversions</li>
            <li>retaining customers</li>
            <li>reducing infrastructure cost</li>
            <li>improving SEO</li>
            <li>strengthening brand trust</li>
          </ul>
          <p className="mb-2">
            Performance increases margin without increasing marketing spend.
          </p>
          <p className="mb-2">
            That’s exactly why high-value companies invest in it.
          </p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Final Thoughts
          </h4>
          <p className="mb-2">
            Performance is one of the few investments that:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>increases revenue</li>
            <li>reduces long-term cost</li>
            <li>improves user happiness</li>
            <li>boosts search visibility</li>
          </ul>
          <p className="mb-2">
            If your website feels slow today, it might not be a technical
            inconvenience.
          </p>
          <p className="mb-2">It might be a revenue bottleneck.</p>
          <hr className="my-12 border-primary/10" />
          <h4 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Need Help Improving Your Website Performance?
          </h4>
          <p className="mb-2">
            If you’re building a scalable platform and want:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>faster load times</li>
            <li>higher conversions</li>
            <li>better SEO scores</li>
            <li>improved architecture</li>
          </ul>

          <p className="mb-2">
            I specialize in performance-driven architecture using:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>React</li>
            <li>PostgreSQL/MongoDB</li>
            <li>Prisma</li>
            <li>Framer Motion</li>
            <li>TailwindCSS</li>
          </ul>
          <p className="font-semibold mb-4">
            Your website shouldn’t just look good — it should perform like a
            growth engine.
          </p>
          <Link
            href={
              "https://calendly.com/shathi-paul/website-strategy-call-with-shathi-paul"
            }
          >
            <Button_v4 text=" Let's talk about your project" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
