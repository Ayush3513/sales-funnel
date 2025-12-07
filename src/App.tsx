import { Award, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import testimonialVideo from '../assets/David testimonial - Made with Clipchamp (1).webm';
// import LaserFlow from './components/LaserFlow';
import HeroVideoPlayer from './components/HeroVideoPlayer';
import Card from './components/reviewCards';





const items = [
  {
    image: "assets/Davidtesti.png",
    subtitle: "Booked 22 new patients in just 14 days, with a 40% increase in appointment show rates and zero missed paitents",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(90deg, #F97618, #000)",
    url: "./assets/David",
    name: "Dr. David"
  },
  {
    image: "assets/Bentesti.png",
    subtitle: "Converted 17 missed calls into bookings within the first 30 days; online form now gets a reply, response rate at 100%",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #F97618, #000)",
    url: "https://linkedin.com/in/mikechen",
    name: "Dr. Ben"
  },
  {
    image: "assets/marie.png",
    subtitle: "Achieved 98% clinic capacity in only 2 months, bringing in 36+ patients per month at a cost of less than $19 each",
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
  // const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [showSticky, setShowSticky] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 0, seconds: 0 });


  useEffect(() => {
    // Suppress specific warnings from external libraries (Cal.com) that cannot be fixed in our code
    const originalWarn = console.warn;
    const originalError = console.error;
    const originalLog = console.log;

    const shouldSuppress = (args: any[]) => {
      const msg = args[0]?.toString() || '';
      return (
        msg.includes('markdownToSafeHTML') ||
        msg.includes('createWithEqualityFn') ||
        msg.includes('react-i18next:: You will need to pass in an i18next instance')
      );
    };

    console.warn = (...args) => {
      if (shouldSuppress(args)) return;
      originalWarn(...args);
    };

    console.error = (...args) => {
      if (shouldSuppress(args)) return;
      originalError(...args);
    };

    console.log = (...args) => {
      if (shouldSuppress(args)) return;
      originalLog(...args);
    };

    return () => {
      console.warn = originalWarn;
      console.error = originalError;
      console.log = originalLog;
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            if (prev.hours === 0) return { hours: 14, minutes: 0, seconds: 0 }; // Reset
            return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
          }
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   // Handle window resize for responsive LaserFlow
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   // Handle window resize for responsive LaserFlow
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "default", "embedLibUrl": "https://cal.id/embed-link/embed.js" });
      cal("ui", { "theme": "dark", "cssVarsPerTheme": { "light": { "cal-brand": "#007ee5" }, "dark": { "cal-brand": "#F97618" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  const scrollToCalendar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const calendarSection = document.getElementById('calendar');
    if (calendarSection) {
      const targetPosition = calendarSection.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Longer duration for "creative" feel
      let start: number | null = null;

      const easeInOutQuart = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black h-auto sm:min-h-screen flex flex-col justify-start sm:justify-center">
        {/* LaserFlow Background */}
        {/* LaserFlow Background - Disabled per request */}
        {/* <div style={{ height: '100%', width: '100%', position: 'absolute', overflow: 'hidden', zIndex: 0 }}>
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
        </div> */}



        <div className="relative max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8 sm:pt-16 md:pt-28 pb-8 sm:pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div className="text-center sm:text-left flex flex-col">
              <h1 className="text-[clamp(20px,5vw,22px)] sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight order-1 [text-wrap:balance]">
                We Gurantee Chiropractors Book{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300 ">30 Patients</span>{' '}
                in just 75 Days
              </h1>

              <p className="text-lg sm:text-xl md:py-8 md:text-2xl lg:text-3xl text-gray-300 font-light order-2">
                with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white bg-size-200 animate-gradient-x">Automations</span> and{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white bg-size-200 animate-gradient-x">AI Ecosystems</span>
              </p>

              {/* Video - Shows here on mobile (order-3), hidden on desktop */}
              <div className="relative my-5 w-full flex flex-col items-center sm:hidden order-3">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Step 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">Watch the Video</span>
                </h3>
                <HeroVideoPlayer videoId="1144233507" />
              </div>

              <div className="pt-4 hidden sm:flex flex-col items-center sm:items-start order-4">


                <div className="w-[45vw] animate-jiggle">
                  <a
                    href="#calendar"
                    onClick={scrollToCalendar}
                    className="cta-button w-full flex flex-col items-center justify-center px-4 py-3 sm:px-8 sm:py-5 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:shadow-[0_0_40px_rgba(255,255,255,1)] border-2 border-white"
                  >
                    <span className="text-lg sm:text-3xl md:text-4xl mb-1 text-center">🎁 Claim Your 7-Days FREE Trial</span>
                    <span className="text-xs sm:text-base font-semibold text-center">✅ See Results Before You Pay - No Risk!</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Video - Shows only on desktop */}
            <div className="relative w-full h-full hidden sm:flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Step 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">Watch the Video</span>
              </h3>
              <HeroVideoPlayer videoId="1144233507" />
            </div>
          </div>
        </div>
      </section>
      <div id="calendar" className="px-6 max-w-5xl mx-auto bg-black">
        {/* Step 2 Label */}
        <h3 className="text-xl md:text-5xl font-bold text-white mt-2 mb-4 text-center">
          Step 2: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">Book a Quick Call</span>
        </h3>
        <div className="rounded-lg bg-black shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-800">
          <Cal
            namespace="default"
            calLink="ayush-chavda/strategycall"
            style={{ width: "100%" }}
            config={{ "layout": "month_view" }}
            calOrigin="https://cal.id"
            embedJsUrl="https://cal.id/embed-link/embed.js"
          />
        </div>
      </div>
      {/* Video Section */}



      {/* Results Section */}
      <section className="py-8 sm:py-12 md:pt-16 md:pb-0 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Are We Delivering Results?
            </h2>
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">
              See What Others Experience
            </p>

          </div>

          <div className="mx-6 md:mx-auto max-w-4xl rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.9)] border border-gray-800">
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

          {/* CTA Button - Mobile Only (After Testimonial) */}
          <div className="flex justify-center mt-8 sm:hidden px-6">
            <div className="w-full animate-jiggle">
              <a
                href="#calendar"
                onClick={scrollToCalendar}
                className="cta-button w-full flex flex-col items-center justify-center px-4 py-3 sm:px-8 sm:py-5 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:shadow-[0_0_40px_rgba(255,255,255,1)] border-2 border-white"
              >
                <span className="text-lg sm:text-3xl md:text-4xl mb-1 text-center">🎁 Claim Your FREE Trial</span>
                <span className="text-xs sm:text-base font-semibold text-center">✅ See Results Before You Pay - No Risk!</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scarcity CTA - Desktop Only */}
        <div className="hidden sm:block max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900/15 to-gray-800/15 border border-gray-700/30 rounded-lg p-5 backdrop-blur-sm">
            <div className="text-center space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Only <span className="text-red-400 text-2xl">1 Spot</span> Left This Month
              </h3>

              <div className="pt-1">
                <div className="w-full mx-auto animate-jiggle">
                  <a
                    href="#calendar"
                    onClick={scrollToCalendar}
                    className="cta-button w-full flex flex-col items-center justify-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:shadow-[0_0_35px_rgba(255,255,255,0.9)] border-2 border-white"
                  >
                    <span className="text-lg sm:text-xl md:text-2xl">🎁 Claim Your Spot Now</span>
                  </a>
                </div>
              </div>

              <p className="text-gray-400 text-sm font-medium">
                Updated Nov 19, 09:08 PM • Filling fast
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Reviews Section - Inspired by the provided image */}
      <section className="py-8 sm:py-12 md:py-0 bg-black h-auto overflow-hidden">




        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Our Proven<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500"> Results</span> <br />
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

      {/* Who Is This For Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">ChiroGrowth Accelerator</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white ">
              Made for You ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Positive Items (Green) */}
            <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/5 border border-green-500/20 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed">
                📉 Chiropractors struggling with inconsistent patient flow
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/5 border border-green-500/20 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed">
                ⏰ too much time on marketing instead of patient care
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/5 border border-green-500/20 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed">
                🚫 Chiropractors whose growth is limited by ineffective lead generation
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/5 border border-green-500/20 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed">
                🤖 Practitioners ready to embrace AI and automation to scale their practice
              </p>
            </div>

            {/* Negative Items (Red) */}
            <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/5 border border-red-500/20 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed">
                ❌ NOT for practitioners unwilling to invest in modern marketing solutions
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/5 border border-red-500/20 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed">
                ❌ NOT for chiropractors satisfied with their current patient volume
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 md:pb-0 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-900/10 to-amber-900/10 border border-orange-500/20 rounded-2xl p-5 sm:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(249,118,24,0.1)]">
            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Still Not Sure If This Will Work For <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">Your Practice?</span>
              </h3>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Stop overpaying for marketing. Get a <span className="text-white font-bold">high-ROI growth plan</span> that fits your budget and brings 30+ patients in 75 days.
              </p>

              <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4 pt-2 sm:pt-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-green-400 bg-green-500/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-green-500/20">
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] sm:text-sm font-semibold whitespace-nowrap">No Credit Card</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-green-400 bg-green-500/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-green-500/20">
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] sm:text-sm font-semibold whitespace-nowrap">30-Min Call</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-green-400 bg-green-500/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-green-500/20">
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] sm:text-sm font-semibold whitespace-nowrap">Zero Obligation</span>
                </div>
              </div>

              <div className="w-full mx-auto pt-3 sm:pt-4 animate-jiggle">
                <a
                  href="#calendar"
                  onClick={scrollToCalendar}
                  className="cta-button w-full flex flex-col items-center justify-center px-4 py-3 sm:px-8 sm:py-5 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:shadow-[0_0_40px_rgba(255,255,255,1)] border-2 border-white"
                >
                  <span className="text-lg sm:text-2xl md:text-3xl mb-0.5 sm:mb-1 text-center">
                    <span className="block sm:hidden">🕵️ Audit My Practice (Free)</span>
                    <span className="hidden sm:block">🕵️ Audit My Practice & Find Missed Patients</span>
                  </span>
                  <span className="hidden sm:block text-xs sm:text-sm font-semibold text-center">See Exactly Where You're Losing Revenue • 100% Free</span>
                </a>
              </div>

              <p className="text-[10px] sm:text-xs text-gray-500 pt-1 sm:pt-2">
                ⚡ Over 150+ chiropractors have used this exact system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:pt-16 md:pb-0 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>

          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                <span>💰 How much does this actually cost?</span>
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                <p className="mb-3">We offer a <span className="text-orange-400 font-semibold">FREE 7-day trial</span> so you can see real results before investing a single dollar. After that, our pricing is performance-based and scales with your practice growth.</p>
                <p className="text-sm text-gray-400">Most chiropractors find that just 2-3 new patients cover the entire monthly investment, and you're getting 30+ patients in just 75 days.</p>
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                <span>⏱️ How much time will this take from my day?</span>
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                <p className="mb-3"><span className="text-orange-400 font-semibold">Almost zero time.</span> That's the whole point of automation! Our AI handles lead follow-up, appointment booking, and patient communication 24/7.</p>
                <p className="text-sm text-gray-400">Initial setup takes about 30 minutes with our team. After that, you just show up for the appointments we book for you.</p>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                <span>🤖 Is this too technical? I'm not tech-savvy...</span>
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                <p className="mb-3"><span className="text-orange-400 font-semibold">You don't need to be!</span> We handle 100% of the technical setup, integration, and maintenance. You won't touch a single line of code or configure anything.</p>
                <p className="text-sm text-gray-400">Our team does everything for you. You'll get a simple dashboard to see your results, and that's it.</p>
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                <span>📊 What if it doesn't work for my practice?</span>
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                <p className="mb-3">That's why we offer the <span className="text-orange-400 font-semibold">7-day FREE trial</span> – you see results before you pay. We guarantee 30 patients in 75 days, or we work for free until you hit that number.</p>
                <p className="text-sm text-gray-400">We've done this for 150+ chiropractors. We know what works, and we're confident enough to put our money where our mouth is.</p>
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                <span>📝 Is there a long-term contract?</span>
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                <p className="mb-3"><span className="text-orange-400 font-semibold">No long-term contracts.</span> We work month-to-month after your free trial. If you're not happy, you can cancel anytime.</p>
                <p className="text-sm text-gray-400">But here's the thing: once you see 30+ new patients flowing in 75 days, you won't want to cancel.</p>
              </div>
            </details>

            {/* FAQ Item 6 */}
            <details className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                <span>🏥 Will this work for a small/new practice?</span>
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                <p className="mb-3"><span className="text-orange-400 font-semibold">Absolutely!</span> In fact, smaller practices often see the fastest growth because they have more capacity to fill. We've helped brand-new practices go from 0 to 98% capacity in just 2 months.</p>
                <p className="text-sm text-gray-400">Whether you're just starting or have been in practice for years, our system adapts to your specific situation and goals.</p>
              </div>
            </details>
          </div>

          {/* Final CTA after FAQ */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6 text-lg">
              Still have questions? Let's talk on a quick 30-minute call
            </p>
            <div className="w-full mx-auto animate-jiggle">
              <a
                href="#calendar"
                onClick={scrollToCalendar}
                className="cta-button w-full flex flex-col items-center justify-center px-4 py-3 sm:px-8 sm:py-5 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:shadow-[0_0_40px_rgba(255,255,255,1)] border-2 border-white"
              >
                <span className="text-lg sm:text-2xl md:text-3xl mb-1 text-center">📞 Book Your Free Strategy Call</span>
                <span className="text-xs sm:text-sm font-semibold text-center">Get All Your Questions Answered</span>
              </a>
            </div>
          </div>
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


      {/* Final CTA / Two Paths Section */}
      <section className="py-16 pt-7 sm:py-24 bg-black relative overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              You Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">Two Choices</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Option 1 */}
            <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl">
                  🐢
                </div>
                <h3 className="text-2xl font-bold text-gray-300">Option 1: The "Hard" Way</h3>
              </div>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Keep chasing leads manually and wasting hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Stress about empty calendar slots every week</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Struggle with inconsistent revenue</span>
                </li>
              </ul>
            </div>

            {/* Option 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-500/50 shadow-[0_0_40px_rgba(249,119,25,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-2xl shadow-lg">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-white">Option 2: The "Smart" Way</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="font-medium text-white">Guaranteed 30+ New Patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Complete AI Automation (Zero effort from you)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Risk-Free: See results before you pay</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="w-full max-w-7xl mx-auto animate-jiggle mb-8">
              <a
                href="#calendar"
                onClick={scrollToCalendar}
                className="cta-button w-full flex flex-col items-center justify-center px-6 py-4 sm:px-8 sm:py-6 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(255,255,255,0.9)] border border-white/50"
              >
                <span className="text-xl sm:text-3xl md:text-4xl mb-1 text-center leading-tight">
                  🚀 I'll Go With Option:2
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-600 text-center">
                  Results Guaranteed • Risk Free
                </span>
              </a>
            </div>


          </div>
        </div>
      </section>

      <Footer />

      {/* Spacer for Sticky CTA */}
      <div className="h-24 sm:h-28 bg-[#111111]"></div>

      {/* Sticky CTA Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-safe">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Text - Hidden on very small screens, visible on larger mobile & desktop */}
              <div className="hidden sm:block">
                <p className="text-black font-extrabold text-xl sm:text-2xl flex items-center gap-3">
                  Ready to add <span className="text-orange-600">30+ patients</span>?
                  <span className="text-white bg-red-600 px-3 py-1 rounded-md text-base shadow-sm font-bold animate-pulse">
                    Offer Ends in {timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                </p>
                <p className="text-gray-900 text-sm font-semibold mt-0.5">
                  Guaranteed results in 75 days
                </p>
              </div>

              {/* Mobile Text - Simplified */}
              <div className="block sm:hidden flex flex-col justify-center">
                <span className="text-orange-600 font-extrabold text-lg leading-none mb-1">30+ Patients</span>
                <span className="self-start text-white bg-red-600 px-2 py-0.5 rounded text-[10px] font-bold animate-pulse shadow-sm whitespace-nowrap">
                  Ends in {timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
                </span>
              </div>

              {/* Button */}
              <a
                href="#calendar"
                onClick={scrollToCalendar}
                className="flex-shrink-0 bg-black text-white font-bold py-3 px-4 sm:px-6 rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,0,0,0.2)] text-xs sm:text-base whitespace-nowrap"
              >
                🎁 Start 7-Days Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
