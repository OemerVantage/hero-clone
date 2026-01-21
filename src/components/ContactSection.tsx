import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import FadeIn from "@/components/motion/FadeIn";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center pt-16 md:pt-24 pb-16">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')` 
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 flex flex-col items-center">
        
        {/* Header */}
        <FadeIn direction="up" className="text-center max-w-2xl mb-12">
          <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
            Get in Touch
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-foreground leading-tight mb-6">
            LET'S MAKE YOUR PROPERTY JOURNEY EFFORTLESS
          </h2>
          
          <p className="text-lg font-light text-foreground leading-relaxed">
            Have questions or ready to take the next step? Whether you're looking 
            to buy, rent, or invest, our team is here to guide you every step of 
            the way. Let's turn your property goals into reality.
          </p>
        </FadeIn>
        
        {/* Form Card */}
        <FadeIn direction="up" delay={0.2} className="w-full max-w-xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-[24px] p-8 shadow-lg">
            
            {/* Row 1: First Name / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name" 
                className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground h-12"
              />
              <Input 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name" 
                className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground h-12"
              />
            </div>
            
            {/* Row 2: Email / Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground h-12"
              />
              <Input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone" 
                className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground h-12"
              />
            </div>
            
            {/* Textarea */}
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What Can We Help You?"
              className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground min-h-[100px] resize-none mb-8"
            />
            
            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full py-6 text-base font-medium"
            >
              Book a Call
            </Button>
            
          </form>
        </FadeIn>
        
      </div>
    </section>
  );
};

export default ContactSection;
