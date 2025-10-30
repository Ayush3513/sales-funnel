import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg">
          <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Services Description</h2>
          <p className="mb-4">
            Kraftonex Studios provides digital marketing services, including Facebook advertising, automation solutions, and AI-powered tools designed specifically for chiropractors to acquire and manage clients. Our services may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Facebook advertising campaign creation and management</li>
            <li className="mb-2">AI-powered client acquisition strategies</li>
            <li className="mb-2">Automation tools for practice management</li>
            <li className="mb-2">Digital marketing consultations</li>
            <li className="mb-2">Website and landing page optimization</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. User Responsibilities</h2>
          <p className="mb-4">As a user of our services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Provide accurate and complete information when using our services</li>
            <li className="mb-2">Maintain the security of your account and credentials</li>
            <li className="mb-2">Comply with all applicable laws and regulations</li>
            <li className="mb-2">Not use our services for any illegal or unauthorized purpose</li>
            <li className="mb-2">Not infringe on the intellectual property rights of others</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Payment Terms</h2>
          <p className="mb-4">
            Payment terms will be specified in separate agreements for specific services. By engaging our services, you agree to pay all fees and charges associated with your account on the specified due dates.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Facebook Advertising Policies</h2>
          <p className="mb-4">
            Our Facebook advertising services are subject to Facebook's Advertising Policies. You acknowledge that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">All advertisements must comply with Facebook's Advertising Policies</li>
            <li className="mb-2">Facebook may reject or remove advertisements at its discretion</li>
            <li className="mb-2">Changes to Facebook's policies may affect our services</li>
            <li className="mb-2">We cannot guarantee specific results from Facebook advertising campaigns</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. AI and Automation Services</h2>
          <p className="mb-4">
            Our AI and automation services are designed to enhance your practice's client acquisition and management capabilities. You understand that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">AI technologies may not be perfect and require human oversight</li>
            <li className="mb-2">You remain responsible for ensuring compliance with healthcare regulations</li>
            <li className="mb-2">Automated systems require proper setup and maintenance</li>
            <li className="mb-2">Results may vary based on multiple factors including market conditions</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Intellectual Property</h2>
          <p className="mb-4">
            All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Kraftonex Studios or our licensors and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, Kraftonex Studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Your use or inability to use our services</li>
            <li className="mb-2">Any unauthorized access to or use of our servers and/or personal information</li>
            <li className="mb-2">Any interruption or cessation of transmission to or from our services</li>
            <li className="mb-2">Any bugs, viruses, or other harmful code that may be transmitted through our services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify or replace these Terms and Conditions at any time. It is your responsibility to review these Terms periodically for changes.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsAndConditions;