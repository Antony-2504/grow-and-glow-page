import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-12 text-center space-y-6 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of happy customers who have made the switch to fresh, organic vegetables delivered right to their door.
          </p>
          <div className="pt-4">
            <Button variant="hero" size="lg" className="text-base">
              Start Shopping Today
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            Have questions? Email us at{" "}
            <a href="mailto:hello@organicveg.com" className="text-primary hover:underline">
              hello@organicveg.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
