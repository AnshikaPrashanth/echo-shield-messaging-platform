
const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Security Engineer",
      bio: "Cryptography expert with 8+ years in security research. Former NSA contractor.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Mitchell",
      role: "Full-Stack Developer",
      bio: "Frontend specialist passionate about user privacy and secure web applications.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b4e0?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Backend Architect",
      bio: "Distributed systems expert focused on scalable, secure messaging infrastructure.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      role: "UX/UI Designer",
      bio: "Design advocate for privacy-first interfaces and accessible security tools.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate group of security experts, developers, and designers 
            committed to making privacy accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
            >
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Built during TechCrunch Hackathon 2024 • 48 hours of intensive development
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              View Project Story
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Hackathon Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
