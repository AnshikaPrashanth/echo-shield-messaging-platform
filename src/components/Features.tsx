
import { Shield, Lock, Eye, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Messages encrypted with military-grade AES-256-GCM. Only you and your recipient can read them.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Forward Secrecy",
      description: "Each session uses unique keys. Even if one key is compromised, past messages remain secure.",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Real-Time Messaging",
      description: "Lightning-fast encrypted chat with instant delivery and read receipts.",
      color: "text-purple-600"
    },
    {
      icon: Eye,
      title: "Zero Knowledge",
      description: "We can't read your messages. Your data is encrypted before it ever reaches our servers.",
      color: "text-red-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SecureChat?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by security experts for the privacy-conscious. Every feature designed 
            with your security and privacy in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
