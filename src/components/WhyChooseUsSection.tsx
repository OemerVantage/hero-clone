import { FileText, Layers, Key, TrendingUp, BarChart2, Settings } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FileText className="w-7 h-7 text-foreground" />,
    title: "Property Sales",
    description: "Expertly promoting and selling your property to attract qualified buyers."
  },
  {
    icon: <Layers className="w-7 h-7 text-foreground" />,
    title: "Buyer Representation",
    description: "Guiding you through the home-buying process, prioritizing your interests."
  },
  {
    icon: <Key className="w-7 h-7 text-foreground" />,
    title: "Rental Management",
    description: "Managing tenant relations, maintenance, and finances to maximize rental returns."
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-foreground" />,
    title: "Investment Consulting",
    description: "Providing strategic advice to help you capitalize on real estate opportunities."
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-foreground" />,
    title: "Property Valuation",
    description: "Accurately assessing your property's value for sales, purchases, or investments."
  },
  {
    icon: <Settings className="w-7 h-7 text-foreground" />,
    title: "Tailored Solutions",
    description: "Delivering customized real estate services aligned with your specific goals."
  }
];

const ServiceCard = ({ icon, title, description }: Service) => (
  <div className="bg-secondary rounded-[32px] p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    {/* Icon Container */}
    <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center mb-20">
      {icon}
    </div>
    
    {/* Title */}
    <h3 className="text-[26px] font-semibold text-foreground mb-3 leading-tight">
      {title}
    </h3>
    
    {/* Description */}
    <p className="text-lg font-light text-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyChooseUsSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
      {/* Header - Centered */}
      <FadeIn direction="up" className="text-center mb-12">
        <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight">
          EXPLORE OUR RANGE OF
          <br />
          EXPERT REAL ESTATE SERVICES
        </h2>
      </FadeIn>

      {/* 3x2 Service Grid */}
      <StaggerChildren 
        staggerDelay={0.1} 
        direction="up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </StaggerChildren>
    </section>
  );
};

export default WhyChooseUsSection;
