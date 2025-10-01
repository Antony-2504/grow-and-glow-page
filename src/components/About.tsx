import { Sprout, Heart, Leaf } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl">Why Choose Organic?</h2>
          <p className="text-lg text-muted-foreground">
            Our commitment to organic farming means healthier food for you and a healthier planet for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-smooth">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6">
              <Sprout className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl mb-4">100% Organic</h3>
            <p className="text-muted-foreground">
              All our vegetables are grown without synthetic pesticides, herbicides, or GMOs. Pure, natural goodness in every bite.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-smooth">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl mb-4">Locally Sourced</h3>
            <p className="text-muted-foreground">
              We partner with local organic farms to bring you the freshest produce while supporting our community and reducing carbon footprint.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-smooth">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6">
              <Leaf className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl mb-4">Sustainable</h3>
            <p className="text-muted-foreground">
              Our organic farming practices protect soil health, conserve water, and promote biodiversity for a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
