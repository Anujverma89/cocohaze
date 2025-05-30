import React from 'react';

const Installation: React.FC = () => {
    return (
        <div className="min-h-dvh max-w-full justify-center flex items-center p-6">

            {/* Main Content */}
            <main className="max-w-[95%] mt-40">
                <h1 className="text-4xl font-bold text-center mb-10">Installation</h1>

                {/* .deb Download Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Download the .snap Package</h2>
                    <p className="mb-4 text-lg">
                        Click the button below to download the latest .snap package for Unbtai.
                    </p>
                    <a
                        href="src/assets/ubntai_0.0.1_amd64.snap"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="ubntai_0.0.1_amd64.snap"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition duration-300"
                    >
                        Download .snap Package
                    </a>
                </section>

         
                {/* Snap Installation Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Install via Snap Store</h2>
                    <p className="mb-4 text-lg">
                        Alternatively, you can install Unbtai using Snap:
                    </p>
                    <div className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <code className="block whitespace-pre">
                            {`sudo snap install unbtai`}
                        </code>
                    </div>
                </section>

                <section className="text-center">
                    <p className="text-lg">
                        For more details, visit our&nbsp;
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

export default Installation;
