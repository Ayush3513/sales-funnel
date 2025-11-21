import { Award, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import testimonialVideo from '../assets/David testimonial - Made with Clipchamp (1).webm';
import LaserFlow from './components/LaserFlow';
import Card from './components/reviewCards';





const items = [
  {
    image: "assets/Davidtesti.png",
    subtitle: "They launched our new site and AI workflows - appointments appeared the same day, and the dashboard shows every step so no lead slips.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(90deg, #F97618, #000)",
    url: "./assets/David",
    name: "Dr. David"
  },
  {
    image: "assets/Bentesti.png",
    subtitle: "Their 24/7 AI turns missed calls and late-night forms into booked patients those ‘lost’ conversations suddenly convert.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #F97618, #000)",
    url: "https://linkedin.com/in/mikechen",
    name: "Dr. Ben"
  },
  {
    image: "assets/marie.png",
    subtitle: "They keep us fully booked while the AI ecosystem qualifies real patients, no wasted spend, just steady growth.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #F97618, #000)",
    url: "https://linkedin.com/in/mikechen",
    name: "Dr. Maria"
  }
];

// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage


// Image Example Interactive Reveal Effect


function App() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    // Handle window resize for responsive LaserFlow
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          if (typeof namespace === "string") {
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
    window.Cal("init", "consultation", { origin: "https://cal.com" });

    // Set up the inline calendar
    window.Cal.ns.consultation("inline", {
      elementOrSelector: "#my-cal-inline-consultation",
      config: { "layout": "month_view" },
      calLink: "kraftonexstudios/consultation",
    });

    // Configure UI
    window.Cal.ns.consultation("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#000000]">
        {/* LaserFlow Background */}
        <div style={{ height: '100%', width: '100%', position: 'absolute', overflow: 'hidden', zIndex: 0 }}>
          <LaserFlow
            horizontalBeamOffset={windowWidth < 768 ? 0.0 : 0}
            verticalBeamOffset={windowWidth < 768 ? -0.49 : -0.5}
            color="#F97719"
            horizontalSizing={windowWidth < 768 ? 2 : windowWidth < 1024 ? 0.75 : 0.9}
            verticalSizing={windowWidth < 768 ? 0.8 : 1}
            fogScale={windowWidth < 768 ? 0.9 : 0.5}
            wispDensity={windowWidth < 768 ? 0.8 : 1}
            flowStrength={windowWidth < 768 ? 0.8 : 1}
          />
        </div>

        <div className="relative max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8 sm:pt-16 md:pt-40 pb-12 sm:pb-24 md:pb-32">
          <div className="text-center space-y-3 sm:space-y-6 md:space-y-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              We help Chiropractors book an extra{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300 ">30 clients</span>{' '}
              in 75 days
            </h1>

            <p className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-gray-300 font-light mt-2 sm:mt-0">
              with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white bg-size-200 animate-gradient-x">Automations</span> and{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white bg-size-200 animate-gradient-x">AI ecosystems</span>
            </p>

            <div className="pt-2 sm:pt-4">
              <p className="text-sm sm:text-xl text-amber-200 font-semibold mb-3 sm:mb-8">
                (WE OFFER IT WITH REFUND POLICY)
              </p>

              <a
                href="#calendar"
                className="cta-button inline-block px-10 my-8 sm:px-8 md:px-12 py-2 sm:py-4 md:py-5 md:my-14 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 text-base sm:text-lg md:text-xl font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Book Free Consultation
              </a>
            </div>


          </div>

          {/* Calendar Section */}



        </div>
      </section>
      <div id="calendar" className="px-6 max-w-5xl mx-auto bg-[#000000]">
        <div
          style={{ width: '100%', height: '100%', overflow: 'auto' }}
          id="my-cal-inline-consultation"
          className="rounded-lg bg-black shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-800"
        ></div>
      </div>
      {/* Video Section */}


      {/* Results Section */}
      <section className="py-2 sm:py-16 md:py-5 bg-black pt-16 sm:pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500'>Testimonial</span>
            </h2>

          </div>

          <div className="px-6 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.9)] border border-gray-800">
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

      {/* Who Is This For Section */}
      <section className=" pt-16 sm:py-16 md:py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Discover if the <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500'>ChiroGrowth </span> Accelerator Is Made for You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Positive Items (Green) */}
            <div className="bg-opacity-10 bg-white p-3 sm:p-4 md:p-6 rounded-lg border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] relative">
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-green-500 rounded-full p-0.5 sm:p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-base sm:text-lg font-medium">Chiropractors struggling with inconsistent patient flow</p>
            </div>

            <div className="bg-opacity-10 bg-white p-3 sm:p-4 md:p-6 rounded-lg border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] relative">
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-green-500 rounded-full p-0.5 sm:p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-base sm:text-lg font-medium">Practice owners spending too much time on marketing instead of patient care</p>
            </div>

            <div className="bg-opacity-10 bg-white p-3 sm:p-4 md:p-6 rounded-lg border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] relative">
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-green-500 rounded-full p-0.5 sm:p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-base sm:text-lg font-medium">Chiropractors whose growth is limited by ineffective lead generation</p>
            </div>

            <div className="bg-opacity-10 bg-white p-3 sm:p-4 md:p-6 rounded-lg border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] relative">
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-green-500 rounded-full p-0.5 sm:p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-base sm:text-lg font-medium">Practitioners ready to embrace AI and automation to scale their practice</p>
            </div>

            {/* Negative Items (Red) */}

            <div className="bg-opacity-10 bg-white p-3 sm:p-4 md:p-6 rounded-lg border border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] relative">
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-red-500 rounded-full p-0.5 sm:p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-white text-base sm:text-lg font-medium">NOT for practitioners unwilling to invest in modern marketing solutions</p>
            </div>

            <div className="bg-opacity-10 bg-white p-3 sm:p-4 md:p-6 rounded-lg border border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] relative">
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-red-500 rounded-full p-0.5 sm:p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-white text-base sm:text-lg font-medium">NOT for chiropractors satisfied with their current patient volume</p>
            </div>


          </div>
        </div>
      </section>

      {/* Reviews Section - Inspired by the provided image */}
      <section className="py-16 sm:py-0 sm:pb-24 bg-b  h-auto overflow-hidden">




        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">Success</span> Stories<br />
              </h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <Card
                  key={index}
                  image={item.image}
                  subtitle={item.subtitle}
                  borderColor={item.borderColor}
                  gradient={item.gradient}
                  url={item.url}
                  name={item.name}
                />
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-10 bg-[#0a0a0a] md:pt-10">
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
