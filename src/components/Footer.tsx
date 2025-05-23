
import { Shield, MessageSquare, Lock, Eye } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SecureChat</span>
            </div>
            <p className="text-gray-400 mb-4">
              Military-grade secure messaging for everyone. Built with privacy and security at its core.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#technology" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hackathon Story</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contribute</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Lock className="h-4 w-4 text-green-400" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Eye className="h-4 w-4 text-green-400" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Forward Secrecy</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 SecureChat Team. Built during TechCrunch Hackathon 2024.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
