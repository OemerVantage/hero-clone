import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/motion/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is the process for buying a property?",
    answer: "The process typically involves getting pre-approved for a mortgage, searching for properties, making an offer, conducting inspections, and closing the deal. Our team guides you through each step."
  },
  {
    question: "How do I determine how much I can afford?",
    answer: "We recommend using our affordability calculator and considering factors like your income, existing debts, down payment, and current interest rates. Generally, your monthly payment shouldn't exceed 28-30% of your gross income."
  },
  {
    question: "What documents are required for renting a property?",
    answer: "You'll typically need proof of identity, proof of income (pay stubs or tax returns), references from previous landlords, and a completed rental application. Additional documents may be required depending on the property."
  },
  {
    question: "Can I terminate a lease agreement early?",
    answer: "Early termination is possible but usually involves penalties or fees. Review your lease terms carefully, and contact us to discuss your options. We can help negotiate with landlords on your behalf."
  },
  {
    question: "What are the risks of investing in real estate?",
    answer: "Real estate investments carry risks including market fluctuations, property damage, vacancy periods, and interest rate changes. We help mitigate these risks through thorough market analysis and property selection."
  },
  {
    question: "How do I choose the right property to invest in?",
    answer: "Consider location, potential rental income, property condition, neighborhood growth trends, and your investment goals. Our experts provide detailed market analyses to help you make informed decisions."
  },
  {
    question: "Do high-end properties support virtual tours?",
    answer: "Yes! All our luxury listings include immersive 3D virtual tours, high-resolution photography, and drone footage. This allows you to explore properties from anywhere in the world."
  },
  {
    question: "How long does the property transfer process take?",
    answer: "The timeline varies by location and transaction type, but typically takes 30-60 days from accepted offer to closing. We work diligently to ensure a smooth and timely process."
  }
];

const FAQAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-6 text-left text-lg font-medium transition-all",
        className
      )}
      {...props}
    >
      {children}
      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 ml-4">
        <Plus className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-45" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
FAQAccordionTrigger.displayName = "FAQAccordionTrigger";

const FAQSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Header */}
        <FadeIn direction="right" className="lg:w-1/3">
          <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
            Help Center
          </span>
          
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h2>
        </FadeIn>
        
        {/* Right Column - Accordion */}
        <div className="lg:w-2/3 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-border"
              >
                <FAQAccordionTrigger>
                  {faq.question}
                </FAQAccordionTrigger>
                <AccordionContent className="text-base font-light text-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
      </div>
    </section>
  );
};

export default FAQSection;
