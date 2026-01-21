import { Star } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Buying my vacation home was surprisingly easy. Sophia really knew her stuff and made the whole process super smooth. I didn't have to worry about a thing.",
    name: "Nathan Harper",
    role: "Software Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Emily walked me through every step of my green home investment. She explained things clearly, gave great advice, and honestly just made it all feel doable.",
    name: "Logan Price",
    role: "Environmental Consultant",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "Isabella was amazing — super friendly and detail-oriented. I found the perfect rental without any of the usual stress. It actually felt fun.",
    name: "Aria Sullivan",
    role: "Digital Nomad",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "I had no idea where to start with property investment, but Emily made it all make sense. She was patient, clear, and completely on my side the whole time.",
    name: "Grace Powell",
    role: "Financial Consultant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    quote: "I thought the rental process would be a nightmare, but Olivia made it simple. She's sharp, supportive, and gave me a lot of confidence.",
    name: "Scarlett Mitchell",
    role: "Event Planner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    quote: "Charlotte totally got what I was looking for. Her design sense and guidance helped me find a home that fits me perfectly. Loved working with her.",
    name: "Samuel Brooks",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white border border-border rounded-[24px] p-6">
    {/* 5 Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
      ))}
    </div>
    
    {/* Quote */}
    <p className="text-base font-light text-foreground leading-relaxed mb-6">
      "{testimonial.quote}"
    </p>
    
    {/* Author */}
    <div className="flex items-center gap-3">
      <Avatar className="w-10 h-10">
        <AvatarImage 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="object-cover"
        />
        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-foreground text-sm">
          {testimonial.name}
        </p>
        <p className="text-sm text-muted-foreground">
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Header */}
        <FadeIn direction="right" className="lg:w-1/3 lg:sticky lg:top-24">
          <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
            What Our Clients Say
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-foreground leading-tight mb-6">
            TRUSTED BY MANY,
            <br />
            LOVED BY ALL
          </h2>
          
          <p className="text-lg font-light text-foreground leading-relaxed">
            Our clients' success stories reflect our commitment to excellence. 
            See how we've helped them find their dream homes, sustainable investments, 
            and perfect getaways.
          </p>
        </FadeIn>
        
        {/* Right Column - 3x2 Testimonial Grid */}
        <div className="lg:w-2/3">
          <StaggerChildren 
            staggerDelay={0.1} 
            direction="up"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </StaggerChildren>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;
