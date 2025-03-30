import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaBrain, FaDatabase, FaCog, FaRobot } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "User Installs Unbtai",
    description:
      "The user installs the Unbtai application, granting it system access.",
    icon: <FaUser className="text-blue-500 text-5xl" />,
  },
  {
    id: 2,
    title: "User Asks a Query",
    description:
      "User submits a query, asking Unbtai to diagnose or resolve an issue.",
    icon: <FaRobot className="text-green-500 text-5xl" />,
  },
  {
    id: 3,
    title: "Interpreting the Query",
    description:
      "Unbtai uses AI models to interpret the request and analyze system data.",
    icon: <FaBrain className="text-purple-500 text-5xl" />,
  },
  {
    id: 4,
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "If the model lacks the answer, it fetches real-time system information, including installed applications, logs, and configurations.",
    icon: <FaDatabase className="text-yellow-500 text-5xl" />,
  },
  {
    id: 5,
    title: "Generating the Response",
    description:
      "Unbtai synthesizes the retrieved data with AI processing and provides an accurate response.",
    icon: <FaCog className="text-red-500 text-5xl" />,
  },
];

const How:React.FC<any> = () => {
  return (
    <section className="py-20 min-h-dvh flex items-center max-w-full justify-center text-white">
      <div className="max-w-[90%] flex flex-col items-center justify-center  text-center">
        <h2 className="text-5xl font-extrabold mb-10 tracking-wide">
          How <span className="text-blue-400">Unbtai</span> Works
        </h2>
        <p className="text-xl mb-16 text-gray-300">
          Unbtai seamlessly integrates AI and system intelligence to provide
          accurate troubleshooting.
        </p>

        <div className="relative flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative w-full md:w-1/5 text-center"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-400 mt-2 text-lg">{step.description}</p>

              {/* Connection Line Animation */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute w-2 h-16 bg-gradient-to-b from-blue-500 to-transparent mx-auto md:left-1/2 md:top-24 md:h-2 md:w-16"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
