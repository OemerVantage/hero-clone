import { MapPin, Bed, Bath, Maximize2 } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

interface Property {
  id: number;
  image: string;
  type: "Investment" | "Sell" | "Rent";
  location: string;
  name: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft: number;
  price?: number;
}

const properties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=450&fit=crop",
    type: "Investment",
    location: "Bel Air, LA",
    name: "The One",
    bedrooms: 6,
    bathrooms: 4,
    sqft: 2780,
    price: 690000
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop",
    type: "Sell",
    location: "Bel Air, LA",
    name: "Billionaire Mansion",
    bedrooms: 5,
    sqft: 3800,
    price: 500000
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
    type: "Rent",
    location: "Beverly Hills, CA",
    name: "The Beverly House",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    price: 290000
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop",
    type: "Rent",
    location: "Beverly Hills, CA",
    name: "Palazzo di Amore",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2100,
    price: 490000
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=450&fit=crop",
    type: "Investment",
    location: "Holmby Hills, LA",
    name: "The Manor",
    bedrooms: 7,
    bathrooms: 5,
    sqft: 3100,
    price: 482000
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=450&fit=crop",
    type: "Sell",
    location: "Upper East Side, NY",
    name: "The Penthouse at Central Park Tower",
    bathrooms: 2,
    sqft: 2200
  }
];

const PropertyCard = ({ property }: { property: Property }) => (
  <div className="group cursor-pointer">
    {/* Image Container */}
    <div className="relative rounded-[32px] overflow-hidden mb-4 aspect-[4/3]">
      <img 
        src={property.image} 
        alt={property.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Type Badge */}
      <span className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-sm font-medium text-foreground border border-border">
        For {property.type}
      </span>
    </div>
    
    {/* Location */}
    <div className="flex items-center gap-1.5 text-foreground mb-2">
      <MapPin className="w-4 h-4" />
      <span className="text-sm font-light">{property.location}</span>
    </div>
    
    {/* Name */}
    <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
      {property.name}
    </h3>
    
    {/* Features */}
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
      {property.bedrooms && (
        <span className="flex items-center gap-1.5">
          <Bed className="w-4 h-4" />
          {property.bedrooms}
        </span>
      )}
      {property.bathrooms && (
        <span className="flex items-center gap-1.5">
          <Bath className="w-4 h-4" />
          {property.bathrooms}
        </span>
      )}
      <span className="flex items-center gap-1.5">
        <Maximize2 className="w-4 h-4" />
        {property.sqft.toLocaleString()} sq.ft
      </span>
    </div>
    
    {/* Price */}
    {property.price && (
      <p className="text-lg font-semibold text-foreground">
        $ {property.price.toLocaleString()}
      </p>
    )}
  </div>
);

const FeaturedPropertiesSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-[240px]">
      {/* Header - Left aligned */}
      <FadeIn direction="up" className="mb-12">
        <span className="inline-flex items-center px-6 py-2 bg-secondary border border-border rounded-full text-lg font-light text-foreground mb-6">
          Featured Properties
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-foreground leading-tight">
          DISCOVER HOMES TAILORED TO YOUR
          <br />
          LIFESTYLE AND NEEDS
        </h2>
      </FadeIn>

      {/* 3x2 Property Grid */}
      <StaggerChildren 
        staggerDelay={0.1} 
        direction="up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </StaggerChildren>
    </section>
  );
};

export default FeaturedPropertiesSection;
