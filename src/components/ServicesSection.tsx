
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, from web applications to mobile apps and enterprise systems.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Custom Web Apps', 'Mobile Development', 'API Integration', 'Database Design']
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['SEO Optimization', 'PPC Advertising', 'Content Strategy', 'Analytics & Reporting']
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media management to build your brand, engage audiences, and convert followers into customers.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Content Creation', 'Community Management', 'Social Advertising', 'Brand Strategy']
    },
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that captivate visitors and provide exceptional user experiences across all devices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Responsive Design', 'UX/UI Design', 'E-commerce Sites', 'CMS Development']
    },
    {
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand message effectively and leave lasting impressions.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Brand Identity', 'Marketing Materials', 'Digital Graphics', 'Print Design']
    },
    {
      title: 'IT Consulting',
      description: 'Expert IT consulting services to optimize your technology infrastructure and streamline business operations.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['System Analysis', 'Technology Planning', 'Cloud Migration', 'Security Audits']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-nexedge-dark-blue mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and keep you ahead of the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexedge-dark-blue/60 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-nexedge-dark-blue group-hover:text-nexedge-primary-blue transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-nexedge-dark-blue text-sm">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-nexedge-accent-blue rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-nexedge-primary-blue text-nexedge-primary-blue hover:bg-nexedge-primary-blue hover:text-white"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
