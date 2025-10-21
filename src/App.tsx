import { Award, Shield } from 'lucide-react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import testimonialVideo from '../assets/David testimonial - Made with Clipchamp (1).webm';

function App() {
  useEffect(() => {
    // Using the exact embed code provided, but with cal.com domain
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let ar = arguments; 
        if (!C.Cal.loaded) { 
          C.Cal.ns = {}; 
          C.Cal.q = C.Cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          C.Cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            C.Cal.ns[namespace] = C.Cal.ns[namespace] || api;
            p(C.Cal.ns[namespace], ar);
            p(C.Cal, ["initNamespace", namespace]);
          } else p(C.Cal, ar); 
          return;
        } 
        p(C.Cal, ar); 
      }; 
    })(window, "https://cal.com/embed/embed.js", "init");
    
    // Initialize Cal
    window.Cal("init", "consultation", {origin: "https://cal.com"});
    
    // Set up the inline calendar
    window.Cal.ns.consultation("inline", { 
      elementOrSelector: "#my-cal-inline-consultation", 
      config: {"layout": "month_view"}, 
      calLink: "kraftonexstudios/consultation", 
    });
    
    // Configure UI
    window.Cal.ns.consultation("ui", {
      "hideEventTypeDetails": false,
      "layout": "month_view"
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#000000]">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 md:pt-20 pb-12 sm:pb-24 md:pb-32">
          <div className="text-center space-y-3 sm:space-y-6 md:space-y-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              We help <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">Chiropractors</span> book an extra{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">30 clients</span>{' '}
              in 75 days
            </h1>

            <p className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-gray-300 font-light mt-2 sm:mt-0">
               with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white bg-size-200 animate-gradient-x">Automations</span> and{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white bg-size-200 animate-gradient-x">AI ecosystems</span>
            </p>

            <div className="pt-2 sm:pt-4">
              <p className="text-lg sm:text-xl text-amber-200 font-semibold mb-3 sm:mb-8">
                (WE OFFER IT ONE WEEK FOR FREE)
              </p>

              <a
                href="#calendar"
                className="cta-button inline-block px-5 sm:px-8 md:px-12 py-2 sm:py-4 md:py-5 md:my-14 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 text-base sm:text-lg md:text-xl font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Book Free Consultation
              </a>
            </div>

            
          </div>

          {/* Calendar Section */}
          <div id="calendar" className="mt-10 sm:mt-12 md:mt-16 max-w-5xl mx-auto">
            <div
              style={{ width: '100%', height: '100%', overflow: 'auto' }}
              id="my-cal-inline-consultation"
              className="rounded-lg bg-black shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-800"
            ></div>
          </div>

          
        </div>
      </section>

      {/* Video Section */}
     

      {/* Results Section */}
      <section className="py-12 sm:py-16 md:py-5 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Testimonial
            </h2>
            
          </div>

          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.9)] border border-gray-800">
            <video 
              className="w-full" 
              controls 
              autoPlay={false}
              preload="metadata"
            >
              <source src={testimonialVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-10 bg-[#0a0a0a] md:pt-44">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">
            Want to work with us?
          </h2>

          <a
             href="#calendar"
            className="cta-button inline-block px-6 sm:px-12 md:px-16 py-2 sm:py-4 md:py-6 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 text-base sm:text-xl md:text-2xl font-bold rounded-full hover:scale-105 transition-transform duration-300 mb-8 sm:mb-12 md:mb-16"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-3 text-white">Address</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                C-22, Vallbhacharya Society, Block C,<br />
                Jivraj Park, Ahmedabad - 380051,<br />
                Gujarat, India
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-white">CUSTOMER CARE</h3>
              <p className="text-gray-400">+1 (555) 884-8091</p>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-white">Email</h3>
              <a href="mailto:ayushchavda177@gmail.com" className="text-gray-400 hover:text-white transition-colors">
               hello@kraftonexstudios.com
              </a>
            </div>
          </div>

          
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}

export default App;
