import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-finusedge-dark-blue mb-4">
            About FinusEdge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a forward-thinking technology company dedicated to empowering
            businesses with innovative solutions that drive growth and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              // src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              src="about.jpg"
              alt="Modern office setup"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-finusedge-dark-blue mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between traditional business practices and
                cutting-edge technology, helping companies of all sizes achieve
                their digital transformation goals and reach new heights of
                success.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-finusedge-dark-blue mb-4">
                Our Values
              </h3>
              <div className="grid gap-4">
                <Card className="border-l-4 border-l-finusedge-primary-blue">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-finusedge-dark-blue mb-2">
                      Innovation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We stay ahead of technology trends to provide cutting-edge
                      solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-finusedge-light-blue">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-finusedge-dark-blue mb-2">
                      Excellence
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Quality is at the core of everything we deliver to our
                      clients.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-finusedge-accent-blue">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-finusedge-dark-blue mb-2">
                      Partnership
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We build lasting relationships and grow together with our
                      clients.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
