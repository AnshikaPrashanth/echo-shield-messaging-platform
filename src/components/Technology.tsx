
import { Shield, Lock, Eye } from "lucide-react";

const Technology = () => {
  const techSpecs = [
    {
      icon: Shield,
      title: "RSA-4096 Identity",
      description: "Each user has a unique RSA-4096 key pair for identity verification and secure key exchange.",
      technical: "4096-bit RSA keys provide quantum-resistant security for the foreseeable future."
    },
    {
      icon: Lock,
      title: "ECDH Key Exchange",
      description: "Elliptic Curve Diffie-Hellman ensures secure session key generation between users.",
      technical: "P-256 curve provides 128-bit security level with excellent performance."
    },
    {
      icon: Eye,
      title: "AES-256-GCM Encryption",
      description: "Messages are encrypted with AES-256 in GCM mode for authenticated encryption.",
      technical: "Galois/Counter Mode provides both confidentiality and authenticity in one operation."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge cryptography made simple. Here's how we protect your messages 
            using industry-standard encryption protocols.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {techSpecs.map((spec, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <spec.icon className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {spec.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {spec.description}
              </p>
              <p className="text-sm text-gray-500 italic">
                {spec.technical}
              </p>
            </div>
          ))}
        </div>

        {/* Encryption Flow Diagram */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Encryption Process
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <p className="text-sm font-medium">Key Exchange</p>
              <p className="text-xs text-gray-500">ECDH generates shared secret</p>
            </div>
            <div className="hidden md:block text-gray-400">→</div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <p className="text-sm font-medium">Message Encryption</p>
              <p className="text-xs text-gray-500">AES-256-GCM encrypts content</p>
            </div>
            <div className="hidden md:block text-gray-400">→</div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <p className="text-sm font-medium">Secure Delivery</p>
              <p className="text-xs text-gray-500">End-to-end encrypted transport</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
