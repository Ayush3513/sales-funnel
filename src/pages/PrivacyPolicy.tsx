import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Kraftonex Studios ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, which include Facebook advertising, automation, and AI solutions designed to help chiropractors grow their practice.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Personal Information:</strong> Name, email address, phone number, and business information when you contact us or sign up for our services.</li>
            <li className="mb-2"><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
            <li className="mb-2"><strong>Marketing Data:</strong> Information related to your response to our marketing campaigns, including Facebook ad interactions and email marketing engagement.</li>
            <li className="mb-2"><strong>Client Data:</strong> If you're a chiropractor using our services, we may collect information about your practice and patients (in anonymized form) to optimize our AI and automation solutions.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Providing and maintaining our services</li>
            <li className="mb-2">Optimizing Facebook advertising campaigns for chiropractor client acquisition</li>
            <li className="mb-2">Developing and improving our AI-powered automation tools</li>
            <li className="mb-2">Communicating with you about our services</li>
            <li className="mb-2">Analyzing usage patterns to enhance user experience</li>
            <li className="mb-2">Complying with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Facebook Advertising and Data</h2>
          <p className="mb-4">
            Our services include Facebook advertising solutions. When you engage with our Facebook ads or use our Facebook-related services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">We may use Facebook's advertising tools, including Facebook Pixel, to track conversions and optimize ad performance.</li>
            <li className="mb-2">Information collected through Facebook advertising platforms is subject to Facebook's Data Policy.</li>
            <li className="mb-2">We may create custom audiences based on your interactions with our ads or website to deliver more relevant content.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. AI and Automation Technologies</h2>
          <p className="mb-4">
            Our services leverage artificial intelligence and automation technologies to help chiropractors acquire and manage clients. These technologies:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Process data to identify patterns and optimize marketing strategies</li>
            <li className="mb-2">May analyze anonymized patient data to improve client acquisition and retention</li>
            <li className="mb-2">Use machine learning algorithms to enhance advertising performance</li>
            <li className="mb-2">Automate communication workflows while maintaining compliance with healthcare regulations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Data Sharing and Disclosure</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Service providers who assist us in operating our business</li>
            <li className="mb-2">Advertising partners, including Facebook, to optimize marketing campaigns</li>
            <li className="mb-2">Legal authorities when required by law</li>
            <li className="mb-2">Business partners involved in providing our services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Accessing your personal information</li>
            <li className="mb-2">Correcting inaccurate information</li>
            <li className="mb-2">Deleting your information</li>
            <li className="mb-2">Objecting to certain processing activities</li>
            <li className="mb-2">Withdrawing consent</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            Email: hello@kraftonexstudios.com<br />
            Phone: +1 (555) 884-8091
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;