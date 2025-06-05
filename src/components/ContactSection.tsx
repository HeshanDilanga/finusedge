import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting FinusEdge. We'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-finusedge-dark-blue via-finusedge-navy to-finusedge-primary-blue"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to level up your business? Let's discuss how FinusEdge can
            help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="animate-fade-in shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-finusedge-dark-blue">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-finusedge-primary-blue"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-finusedge-primary-blue"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-finusedge-primary-blue resize-none"
                    placeholder="Tell us about your project or how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-finusedge-primary-blue hover:bg-finusedge-light-blue text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you're a startup looking to establish your digital
                presence or an established company seeking to modernize your
                technology stack, we're here to help you succeed.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2">Email Us</h4>
                  <p className="text-gray-300">hello@finusedge.com</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2">Call Us</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2">
                    Office Hours
                  </h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-semibold text-white mb-4">
                Why Choose FinusEdge?
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-finusedge-accent-blue rounded-full mr-3"></div>
                  Expert team with 10+ years of experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-finusedge-accent-blue rounded-full mr-3"></div>
                  Cutting-edge technology solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-finusedge-accent-blue rounded-full mr-3"></div>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-finusedge-accent-blue rounded-full mr-3"></div>
                  Proven track record of success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
