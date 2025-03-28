import React from 'react';

const Docs: React.FC = () => {
    return (
        <div className="min-h-dvh p-6">

            {/* Main Documentation Content */}
            <main className="max-w-5xl mx-auto mt-40">
                <h1 className="text-4xl font-bold text-center mb-12">Documentation</h1>

                {/* Introduction Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Welcome to the Unbtai Documentation. Unbtai is an advanced troubleshooting tool for Debian-based systems.
                        This guide provides detailed information on installation, configuration, usage, and best practices.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our goal is to simplify diagnosing issues and to help you resolve system problems efficiently using our AI-powered platform.
                    </p>
                </section>

                {/* Installation Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Installation</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        You can install Unbtai via multiple methods:
                    </p>
                    <ul className="list-disc list-inside mb-4 text-lg">
                        <li>
                            <strong>.deb Package:</strong> Download from our website and install manually.
                        </li>
                        <li>
                            <strong>APT Repository:</strong> Add our PPA and install using <code>sudo apt install unbtai</code>.
                        </li>
                        <li>
                            <strong>Snap Store:</strong> Install using <code>sudo snap install unbtai</code>.
                        </li>
                    </ul>
                    <div className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <code className="block whitespace-pre">
                            {`# For APT Repository:
                                sudo add-apt-repository ppa:unbtai/stable
                                sudo apt update
                                sudo apt install unbtai

                                # For Snap Store:
                                sudo snap install unbtai`}
                        </code>
                    </div>
                </section>

                {/* Usage Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Usage</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Once installed, launch Unbtai from your application menu or via the terminal by typing <code>unbtai</code>.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Upon launch, the application will automatically collect system information and configuration details, then guide you through troubleshooting steps.
                    </p>
                    <div className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <code className="block whitespace-pre">
                            {`# Launch Unbtai via terminal:
unbtai`}
                        </code>
                    </div>
                </section>

                {/* Configuration Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Configuration</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Unbtai automatically detects system configuration on startup. To customize settings or view logs, navigate to the Settings menu within the app.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Detailed configuration options and troubleshooting logs can be found in the <strong>Settings</strong> section of the application.
                    </p>
                </section>

                {/* FAQ Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold">How do I update Unbtai?</h3>
                            <p className="text-lg leading-relaxed">
                                Updates are managed through the installation channels. Use your package manager (APT or Snap) to check for and install updates.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">What data does Unbtai collect?</h3>
                            <p className="text-lg leading-relaxed">
                                Unbtai collects system information, configuration details, and your email address for troubleshooting and to provide updates.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Is my data secure?</h3>
                            <p className="text-lg leading-relaxed">
                                Yes, we implement robust security measures and do not share your personal data without your consent.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Additional Resources Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Additional Resources</h2>
                    <p className="text-lg leading-relaxed">
                        For more detailed information, please visit our&nbsp;
                        <a
                            href="https://github.com/Anujverma89/ubntai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            GitHub repository
                        </a>.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Docs;
