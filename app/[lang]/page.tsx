import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/get-dictionary";
import VerticalCarousel from "@/components/homepage/vertical-carousel";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

const HomeCarousel = dynamic(() => import("@/components/homepage/home-carousel"), { ssr: true, loading: () => <div>Loading</div> });
const LogoCarousel = dynamic(() => import("@/components/homepage/logo-carousel"), { ssr: true, loading: () => <div>Loading</div> });
const Footer = dynamic(() => import("@/components/footer"), { ssr: true, loading: () => <div>Loading</div> });

type PageProps = {
  params: {
    lang: string;
  };
};

export default async function IndexPage({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang); // en

  return (
    <main>
      <HomeCarousel />
      <LogoCarousel />

      <div className="relative w-full overflow-x-hidden my-10">
        <img src={"/images/homepage/shopper-flow-bg.png"}></img>
        <div className="absolute inset-0 flex items-center justify-center container my-24 mx-auto md:px-6 text-center">
          <p className="text-black text-xl md:pb-6">{dict.home.vision}</p>
          <p className="text-black text-xl">{dict.home.mission}</p>
        </div>
      </div>

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto mb-12 px-6">
            <h1 className="text-4xl font-extrabold pb-12">Our Solution</h1>
            <p className="text-black">{dict.home.solution_content}</p>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-9/12">
              <div className="flex flex-wrap -mb-12">
                {[{ title: "Precision & accuracy", description: "Measuring the right stuff, the right way, every time." },
                { title: "SScientific integrity", description: "No hunches, no guessing, no wishful thinking, no biases and illusory patterns. Just facts. " },
                { title: "Pragmatism", description: "Strategically combining scientific data with practical needs, for more insightful decisions. " },
                { title: "Cost Consciousness", description: "It has to be ROlable. Or else we dump it and return it to the drawing board. "},
                  {title: "Respect", description: "For People's privacy.Peropd."},
                  {title: "Accountability", description: "Accepting responsibility for our actions (and inactions) to build trust internally and externally. " }].map((item, index) => (
                  <div key={index} className="mb-12 w-full md:w-4/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <img src="/images/homepage/integrity.svg" width={50} height={50}>
                            </img>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">{item.title}</p>
                        <p className="text-neutral-500 dark:text-neutral-200">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <VerticalCarousel/>

      <Footer />
    </main>
  )
}
