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
    quote: "BeFi kümmert sich um unsere 12 Liegenschaften. Die Hauswartung ist einwandfrei und die Kommunikation vorbildlich. Wir sind sehr zufrieden.",
    name: "Thomas Müller",
    role: "Immobilienverwaltung",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Die regelmässige Büroreinigung ist top – unser Team fühlt sich wohl und wir können uns voll auf unser Geschäft konzentrieren.",
    name: "Sarah Keller",
    role: "Geschäftsführerin KMU",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "Wir setzen auf BeFi für unsere Industrieanlage. Pünktlich, professionell und sehr flexibel bei Sondereinsätzen. Absolute Empfehlung!",
    name: "Marco Bernasconi",
    role: "Facility Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "Die Umzugsreinigung war perfekt. Wohnungsabnahme ohne Beanstandung. Absolut empfehlenswert für jeden Umzug!",
    name: "Andrea Hofmann",
    role: "Privatkundin",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    quote: "Winterdienst und Gartenpflege das ganze Jahr – BeFi macht einfach alles richtig. Sehr zuverlässig und immer erreichbar.",
    name: "Peter Zimmermann",
    role: "Liegenschaftsbesitzer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    quote: "Für unsere Arztpraxis brauchen wir höchste Hygienestandards. BeFi liefert konstant hervorragende Qualität. Sehr professionell.",
    name: "Claudia Weber",
    role: "Praxismanagerin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
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
            Kundenstimmen
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-foreground leading-tight mb-6">
            VERTRAUEN SIE
            <br />
            AUF UNSERE EXPERTISE
          </h2>
          
          <p className="text-lg font-light text-foreground leading-relaxed">
            Unsere Kunden schätzen unsere Zuverlässigkeit, Qualität und persönliche Betreuung. 
            Lesen Sie, was sie über die Zusammenarbeit mit BeFi sagen.
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
