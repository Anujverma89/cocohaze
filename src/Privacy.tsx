import React from 'react';
import { Link } from 'react-router';
import logo from "../src/assets/logo.svg";

const Privacy: React.FC<any> = () => {
    const year = new Date().getFullYear();
  return (
    <div className="min-h-screen p-6">
      {/* Header Section with Logo and Home Link */}
      <header className="mb-8 flex items-baseline justify-center space-x-4">
        <Link to="/">
          <img src={logo} alt="Unbtai Logo" className="h-14" />
        </Link>
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <p>
            This Privacy Policy explains how Unbtai (the "Application") collects, uses, and discloses your personal information when you use our Application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Information We Collect</h2>
          <p>
            In order to provide a seamless troubleshooting experience and to enhance our services, we may collect the following information:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>
              <strong>System Information:</strong> Data about your system configuration, operating system details, and hardware information.
            </li>
            <li>
              <strong>Configuration Details:</strong> Information regarding the settings and configurations of your system.
            </li>
            <li>
              <strong>Email Address:</strong> Your email address, which is collected for communication related to troubleshooting support, updates, and other notifications.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">How We Use Your Information</h2>
          <p>
            The information collected is used for the following purposes:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            <li>Providing effective troubleshooting support and system optimization recommendations.</li>
            <li>Sending updates and notifications regarding the Application.</li>
            <li>Improving the overall functionality and performance of the Application.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Data Sharing and Disclosure</h2>
          <p>
            We respect your privacy and do not share your personal information with third parties without your explicit consent, except as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Security</h2>
          <p>
            We implement reasonable security measures to protect your data; however, no method of transmission over the Internet or electronic storage is completely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page along with an updated revision date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, please contact us at&nbsp;
            <a href="mailto:mailer.ubntai@gmail.com" className="text-blue-600 underline">mailer.ubntai@gmail.com</a>.
          </p>
        </section>

        <footer className="mt-8 text-center text-sm text-gray-500">
           © {year} Ubntai. Licensed under GNU (GPL)
        </footer>
      </main>
    </div>
  );
};

export default Privacy;
