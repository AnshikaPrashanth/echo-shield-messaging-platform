
import { Shield, Lock, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Military-Grade Secure Messaging,{" "}
            <span className="text-blue-600">For Everyone</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your privacy is our priority. Experience next-generation encrypted communication 
            with RSA-4096, ECDH key exchange, and AES-256-GCM encryption.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Try Live Demo
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              View on GitHub
            </button>
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-green-600" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-green-600" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Forward Secrecy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
