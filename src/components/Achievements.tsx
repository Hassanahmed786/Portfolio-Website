import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Calendar, Link as LinkIcon } from 'lucide-react';

const allAchievements = [
  {
    id: 1,
    title: "Best Innovation Award",
    shortDescription: "Recognized for developing an AI-powered content management system",
    fullDescription: "Received the Best Innovation Award for developing an AI-powered content management system that increased content creation efficiency by 300% and reduced editorial time by 60%. The system is now being used by over 50 enterprise clients.",
    date: "December 2023",
    links: [
      { title: "Award Ceremony", url: "https://example.com/ceremony" },
      { title: "Project Details", url: "https://example.com/project" }
    ],
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Tech Conference Speaker",
    shortDescription: "Keynote speaker at WebSummit 2023",
    fullDescription: "Delivered a keynote speech on 'The Future of Web Development' at WebSummit 2023, reaching an audience of over 5,000 developers and industry leaders. The presentation focused on emerging technologies and best practices in modern web development.",
    date: "October 2023",
    links: [
      { title: "Conference Page", url: "https://example.com/websummit" },
      { title: "Presentation Slides", url: "https://example.com/slides" }
    ],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Open Source Contribution",
    shortDescription: "Major contributor to React Native",
    fullDescription: "Recognized as a major contributor to React Native, with over 50 merged pull requests and 1000+ commits. Implemented critical performance improvements that reduced app startup time by 40% across all platforms.",
    date: "September 2023",
    links: [
      { title: "GitHub Profile", url: "https://github.com" },
      { title: "Contribution Stats", url: "https://example.com/stats" }
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Hackathon Winner",
    shortDescription: "First place at Global Code Fest",
    fullDescription: "Led a team of 4 developers to win first place at Global Code Fest 2023. Developed a real-time translation app using AI that supports 50+ languages and works offline.",
    date: "August 2023",
    links: [
      { title: "Project Demo", url: "https://example.com/demo" },
      { title: "News Coverage", url: "https://example.com/news" }
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Patent Granted",
    shortDescription: "Innovative authentication system patent",
    fullDescription: "Granted a patent for developing an innovative authentication system that combines biometric data with behavioral patterns, increasing security while reducing user friction by 80%.",
    date: "July 2023",
    links: [
      { title: "Patent Details", url: "https://example.com/patent" },
      { title: "Technical Paper", url: "https://example.com/paper" }
    ],
    image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?auto=format&fit=crop&w=800&q=80"
  }
];

const AchievementCard = ({ achievement, isExpanded, onToggle }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
      onClick={onToggle}
    >
      <div className="relative">
        <img 
          src={achievement.image} 
          alt={achievement.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 m-4">
          <Award className="w-6 h-6 text-blue-600" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="text-blue-600 hover:text-blue-800"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{achievement.date}</span>
        </div>

        <p className="mt-3 text-gray-600">
          {isExpanded ? achievement.fullDescription : achievement.shortDescription}
        </p>

        {isExpanded && achievement.links && (
          <div className="mt-4 space-y-2">
            {achievement.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
                onClick={(e) => e.stopPropagation()}
              >
                <LinkIcon className="w-4 h-4 mr-2" />
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Achievements = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  const displayedAchievements = showAll ? allAchievements : allAchievements.slice(0, 3);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Achievements
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Recognition and milestones from my professional journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedAchievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              isExpanded={expandedId === achievement.id}
              onToggle={() => handleToggle(achievement.id)}
            />
          ))}
        </div>

        {allAchievements.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="ml-2 w-5 h-5" /></>
              ) : (
                <>View More <ChevronDown className="ml-2 w-5 h-5" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;