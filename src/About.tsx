import { FaTools, FaBug, FaUsers, FaGithub, FaLockOpen } from "react-icons/fa";

const About = () => {
    return (
        < div className="w-full flex items-center justify-center flex-col">
            <div className="min-h-dvh max-w-[80%] text-white flex flex-col items-center bg-red justify-center gap-10b p-6">
                {/* Header Section */}
                <header className="text-center max-w-3xl mt-40">
                    <h1 className="text-4xl font-bold  mb-4">Ubntai</h1>
                    <p className="text-lg text-gray-300">
                        Your ultimate AI-powered solution for diagnosing and fixing Ubuntu errors efficiently.
                    </p>
                </header>

                {/* Features Section */}
                <section className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="featureCard featurecontainer p-6 h-50 w-100 rounded-lg shadow-lg text-center flex flex-col max items-center"
                        >
                            <feature.icon className="text-blue-400 text-5xl mb-4" />
                            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                            <p className="text-gray-300 text-sm text-wrap">{feature.description}</p>
                        </div>
                    ))}
                </section>
            </div>
            {/* Open Source Section */}
            <div className="min-h-dvh  text-white flex flex-col items-center justify-center gap-10b p-6">
                <section className="mt-16 text-center">
                    <h2 className="text-3xl font-bold">Open Source & Community Driven</h2>
                    <p className="text-gray-300 mt-2 max-w-xl">
                        This project is fully open-source, encouraging collaboration and community contributions.
                        Join us on GitHub and be part of improving Ubuntu troubleshooting!
                    </p>
                    <a
                        href="https://github.com/Anujverma89/ubntai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-medium transition"
                    >
                        <FaGithub className="mr-2" /> View on GitHub
                    </a>
                </section>
            </div>
        </div>
    );
};

const features = [
    {
        title: "Automated Error Detection",
        description: "Scans system logs and detects issues automatically.",
        icon: FaBug,
    },
    {
        title: "AI-Powered Fixes",
        description: "Suggests solutions based on machine learning models.",
        icon: FaTools,
    },
    {
        title: "Community Knowledge Base",
        description:   "Our AI model is trained on a vast repository of solutions contributed by experienced users, delivering reliable and accurate troubleshooting insights.",
        icon: FaUsers,
    },
    {
        title: "Secure & Privacy Focused",
        description: "No data tracking, complete offline troubleshooting available based on configurations.",
        icon: FaLockOpen,
    },
];

export default About;
