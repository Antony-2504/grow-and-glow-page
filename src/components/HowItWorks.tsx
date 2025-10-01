import { ShoppingBasket, Truck, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingBasket,
      title: "Choose Your Produce",
      description: "Browse our selection of fresh, seasonal organic vegetables and add your favorites to the basket."
    },
    {
      icon: Truck,
      title: "We Harvest & Pack",
      description: "We harvest your order fresh from our partner farms and carefully pack it for delivery."
    },
    {
      icon: Home,
      title: "Delivered to Your Door",
      description: "Receive your fresh organic vegetables at your doorstep, ready to enjoy."
    }
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-accent/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            From farm to table in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
