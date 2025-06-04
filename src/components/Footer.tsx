
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-nexedge-dark-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Nex<span className="text-nexedge-accent-blue">Edge</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth and success in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-nexedge-accent-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-nexedge-accent-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-nexedge-accent-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-nexedge-accent-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.311-.623-.311-1.544c0-1.446.839-2.526 1.885-2.526.888 0 1.318.666 1.318 1.466 0 .893-.568 2.229-.861 3.467-.245 1.04.522 1.888 1.547 1.888 1.858 0 3.283-1.958 3.283-4.789 0-2.503-1.799-4.253-4.367-4.253-2.977 0-4.727 2.234-4.727 4.546 0 .901.347 1.865.78 2.391.085.104.098.195.072.301-.079.329-.255 1.057-.289 1.206-.046.191-.151.232-.35.141-1.3-.602-2.114-2.49-2.114-4.016 0-3.297 2.395-6.325 6.913-6.325 3.631 0 6.453 2.589 6.453 6.044 0 3.613-2.277 6.516-5.434 6.516-1.062 0-2.062-.552-2.402-1.209 0 0-.525 2.002-.653 2.492-.237.908-.878 2.043-1.307 2.738C9.52 23.761 10.747 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-gray-300 hover:text-nexedge-accent-blue transition-colors text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-nexedge-accent-blue transition-colors text-sm"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-nexedge-accent-blue transition-colors text-sm"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-300 hover:text-nexedge-accent-blue transition-colors text-sm"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-nexedge-accent-blue transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Software Development</p>
              <p className="text-gray-300 text-sm">Digital Marketing</p>
              <p className="text-gray-300 text-sm">Social Media Management</p>
              <p className="text-gray-300 text-sm">Web Design</p>
              <p className="text-gray-300 text-sm">Graphic Design</p>
              <p className="text-gray-300 text-sm">IT Consulting</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">hello@nexedge.com</p>
              <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              <p className="text-gray-300 text-sm">
                123 Innovation Drive<br />
                Tech Valley, CA 94025
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-nexedge-navy mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 NexEdge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-nexedge-accent-blue transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-nexedge-accent-blue transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-nexedge-accent-blue transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
