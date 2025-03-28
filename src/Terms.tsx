import React from 'react';
import { Link } from 'react-router';
import logo from "../src/assets/logo.svg";

const Terms: React.FC<any> = () => {
    const year = new Date().getFullYear();
  return (
    <div className="min-h-screen p-6">
      {/* Header Section with Logo and Home Link */}
      <header className="mb-8 flex items-baseline justify-center space-x-4">
        {/* Logo wrapped with a link */}
        <Link to="/">
          <img src={logo} alt="Unbtai Logo" className="h-14" />
        </Link>
        {/* Home text link */}
        <Link to="/" className="text-2xl font-normal text-blue-600">
          Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

        <section className="mb-6">
          <p>
            Welcome to Unbtai (the "Application"). By accessing or using our Application,
            you agree to comply with and be bound by these Terms and Conditions. Please review them carefully.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">License</h2>
          <p>
            This Application is released under the <strong>GNU General Public License v3 (GNU GPL v3)</strong>.
            You are free to use, modify, and distribute the software under the terms of this license. For full details, please see the&nbsp;
            <a
              href="https://www.gnu.org/licenses/gpl-3.0.en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GNU GPL v3
            </a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Data Collection and Use</h2>
          <p>
            To enhance your troubleshooting experience and provide future updates, the Application collects system information,
            configuration details, and your email address. By using this Application, you consent to this data collection and agree that
            such information may be used for troubleshooting, system optimization, and communication regarding updates and support.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">User Responsibilities</h2>
          <p>
            You are responsible for providing accurate and up-to-date information. We are not liable for any issues that may arise due
            to inaccurate system configurations or outdated information provided by you.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Privacy</h2>
          <p>
            Your privacy is of utmost importance to us. We will not share your personal data, including your email address, with third
            parties without your explicit consent, unless required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Modifications</h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the
            Application after any changes constitutes your acceptance of the updated Terms and Conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Disclaimer of Warranty</h2>
          <p>
            The Application is provided "as is" without any warranties, whether express or implied. Use the Application at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Limitation of Liability</h2>
          <p>
            Under no circumstances shall the developers or contributors be liable for any damages arising from the use of this Application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at&nbsp;
            <a
              href="mailto:mailer.ubntai@gmail.com"
              className="text-blue-600 underline"
            >
              mailer.ubntai@gmail.com
            </a>.
          </p>
        </section>

        <footer className="mt-8 text-center text-sm text-gray-500">
            © {year} Ubntai. Licensed under GNU (GPL)
        </footer>
      </main>
    </div>
  );
};

export default Terms;
