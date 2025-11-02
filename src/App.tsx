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
              <p className="text-sm sm:text-xl text-amber-200 font-semibold mb-3 sm:mb-8">
                (WE OFFER IT ONE WEEK FOR FREE)
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
              Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500'>Testimonial</span>
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

      {/* Who Is This For Section */}
      <section className="py-12 sm:py-16 md:py-40 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-16 sm:py-20 bg-b overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
               Chiropractors <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">SUCCESS</span> Stories<br />
              </h2>
              
            </div>

            {/* Reviews Slider */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/3"></div>
              
              {/* Reviews Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Review Card 1 */}
                <div className="bg-[#1F1F1F] from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                  <div className="p-8 h-full flex flex-col">
                    
                    
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 mb-4">
                      GAME-CHANGER FOR MY CLINIC!
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
Switching to Kraftonex Studios was the best decision I made for my practice. The new website looks incredibly professional and we started receiving online bookings within days. The appointment reminders and automated follow-ups helped reactivate past patients who hadn’t visited us in years. I can track every lead in real-time, which gives me full confidence in their system. Highly recommended                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">SARAH MILLER</p>
                        <p className="text-sm text-gray-400">PATIENT SINCE 2021</p>
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
                        <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14.25c4.142 0 7.5 1.567 7.5 3.5V20h-15v-2.25c0-1.933 3.358-3.5 7.5-3.5zm0-1.5c-2.07 0-3.75-1.68-3.75-3.75S9.93 5.25 12 5.25s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Review Card 2 */}
                <div className="bg-[#1F1F1F] from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                  <div className="p-8 h-full flex flex-col">
                  
                    
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 mb-4">
                      NO MORE LOST LEADS EVER!
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      "As someone with a busy work schedule, I love being able to book appointments online anytime. The text reminders have helped me never miss a session. My neck pain from years of desk work has improved dramatically after just 6 weeks of treatment."
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">ROBERT CHEN</p>
                        <p className="text-sm text-gray-400">PATIENT SINCE 2022</p>
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
                        <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14.25c4.142 0 7.5 1.567 7.5 3.5V20h-15v-2.25c0-1.933 3.358-3.5 7.5-3.5zm0-1.5c-2.07 0-3.75-1.68-3.75-3.75S9.93 5.25 12 5.25s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Review Card 3 */}
                <div className="bg-[#1F1F1F] from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                  <div className="p-8 h-full flex flex-col">
                    
                    
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 mb-4">
                      TRANSPARENT, PROFESSIONAL, AND EFFECTIVE
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      "After a car accident left me with severe whiplash, I was in constant pain. The personalized treatment plan and ability to track my progress through the patient portal has been incredible. I'm now pain-free and have regained full mobility in my neck."
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">JENNIFER TAYLOR</p>
                        <p className="text-sm text-gray-400">PATIENT SINCE 2020</p>
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
                        <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14.25c4.142 0 7.5 1.567 7.5 3.5V20h-15v-2.25c0-1.933 3.358-3.5 7.5-3.5zm0-1.5c-2.07 0-3.75-1.68-3.75-3.75S9.93 5.25 12 5.25s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slider Indicator */}
              
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
