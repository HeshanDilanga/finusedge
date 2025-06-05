import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A comprehensive e-commerce solution with advanced inventory management and payment processing.",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      description:
        "Complete brand identity package including logo, business cards, and marketing materials.",
      image:
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Adobe Creative Suite", "Brand Strategy", "Print Design"],
    },
    {
      title: "SaaS Dashboard",
      category: "Software Development",
      description:
        "Advanced analytics dashboard with real-time data visualization and reporting capabilities.",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
    },
    {
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      description:
        "Multi-channel marketing campaign that increased client conversion rates by 300%.",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "A/B Testing"],
    },
    {
      title: "Mobile App Development",
      category: "Mobile Development",
      description:
        "Cross-platform mobile application with offline capabilities and cloud synchronization.",
      image:
        "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Redux", "SQLite"],
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      description:
        "Modern, responsive corporate website with CMS integration and SEO optimization.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "WordPress",
        "Custom Theme",
        "SEO",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-finusedge-dark-blue mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful projects that have helped our clients achieve
            their business goals and establish strong digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-finusedge-dark-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-finusedge-accent-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-finusedge-dark-blue group-hover:text-finusedge-primary-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-finusedge-dark-blue text-sm">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-finusedge-dark-blue px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-finusedge-primary-blue text-finusedge-primary-blue hover:bg-finusedge-primary-blue hover:text-white"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-finusedge-primary-blue hover:bg-finusedge-light-blue text-white"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
