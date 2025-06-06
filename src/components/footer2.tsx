import { useState } from "react";
import { CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";


export default function Contact() {
  const [result, setResult] = useState("");
    const { toast } = useToast();
  

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting FinusEdge. We'll get back to you soon!",
    });
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9ed5955f-d2ec-4bb4-988a-9ce869d25bcd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <CardContent>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
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
            required
            rows={5}
            className="border-gray-300 focus:border-finusedge-primary-blue resize-none"
            placeholder="Tell us about your project or how we can help you..."
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-finusedge-primary-blue hover:bg-finusedge-light-blue text-white"
        >
          Send Message
        </Button>

        <span className="block text-sm text-muted-foreground">{result}</span>
      </form>
    </CardContent>
  );
}
