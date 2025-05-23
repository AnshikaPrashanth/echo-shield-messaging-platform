
import { useState } from "react";
import { MessageSquare, Send, Lock } from "lucide-react";

const Demo = () => {
  const [message, setMessage] = useState("");
  const [isEncrypting, setIsEncrypting] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setIsEncrypting(true);
    // Simulate encryption process
    setTimeout(() => {
      setIsEncrypting(false);
      setMessage("");
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience secure messaging firsthand. Type a message below to see 
            how our encryption works in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg">
            {/* Demo Chat Interface */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <span className="font-semibold">SecureChat Demo</span>
                <div className="ml-auto flex items-center gap-1">
                  <Lock className="h-4 w-4" />
                  <span className="text-sm">Encrypted</span>
                </div>
              </div>
              
              <div className="p-6 h-64 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Welcome to SecureChat! This is a demo of our encrypted messaging.</p>
                      <p className="text-xs text-gray-500 mt-1">🔒 Encrypted with AES-256-GCM</p>
                    </div>
                  </div>
                  
                  {isEncrypting && (
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                        <p className="text-sm">{message}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="animate-spin h-3 w-3 border border-white border-t-transparent rounded-full"></div>
                          <p className="text-xs">Encrypting...</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a secure message..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    disabled={isEncrypting}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim() || isEncrypting}
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                This demo shows how messages are encrypted before transmission. 
                In the real app, encryption happens instantly and transparently.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                Try Full Demo →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
