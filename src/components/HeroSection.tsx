import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-finusedge-dark-blue via-finusedge-navy to-finusedge-primary-blue relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-finusedge-accent-blue/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-finusedge-light-blue/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Level Up Your Business with{" "} test
              <span className="bg-gradient-to-r from-finusedge-accent-blue to-finusedge-light-blue bg-clip-text text-transparent">
                FinusEdge
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge software solutions,
              digital marketing, and innovative IT services. We help companies
              scale, innovate, and dominate their markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-finusedge-primary-blue to-finusedge-light-blue hover:from-finusedge-light-blue hover:to-finusedge-accent-blue text-white group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                size="lg"
                className="border-finusedge-accent-blue text-finusedge-accent-blue hover:bg-finusedge-accent-blue hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <img
                // src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                src="hero4.jpg"
                alt="Professional workspace with laptop"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-finusedge-primary-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
