import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Calendar, Link as LinkIcon } from 'lucide-react';
import Vasavi from '../components/Images/Vasavi.png';
import Anurag from '../components/Images/Anurag-University-1.png';
import GirlScript from '../components/Images/GirlSript.jpg';

const allAchievements = [
  {
    id: 1,
    title: "Microsoft Learn Student Ambassador (MLSA)",
    shortDescription: "Officially onboarded as a Microsoft Learn Student Ambassador in October 2024",
    fullDescription: "Completed the Microsoft Learn Student Ambassador technical training and Community Influencer Path. Actively engaged in organizing events, workshops, and spreading Microsoft tech awareness at Anurag University and beyond.",
    date: "October 2024",
    links: [
      { title: "MLSA Profile", url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/3fe26868-0992-4e30-a1b5-cc1c8f784bdf" },
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
    {
    id: 2,
    title: "3rd Prize - Vasavi College Hackathon",
    shortDescription: "3rd place for developing a Tourism Travel App",
    fullDescription: "Won 3rd prize at Vasavi Engineering College hackathon by developing an innovative tourism app that helps travelers discover hidden gems and authentic sites, enhancing travel experiences.",
    date: "2024",
    image: Vasavi
  },
    {
    id: 3,
    title: "Open Source Contributor - GirlScript Summer of Code",
    shortDescription: "Active contributor to open source projects under GirlScript",
    fullDescription: "Contributed to various open source repositories during the GirlScript Summer of Code program, improving codebases, fixing bugs, and adding features. Developed skills in collaboration, Git, and community engagement.",
    date: "Summer 2024",
    image: GirlScript
  },
  {
    id: 4,
    title: "Winner - Anurag University Hackathon",
    shortDescription: "3rd place at 24-hour hackathon developing a Learning Management System",
    fullDescription: "Led a team to build a Learning Management System during a 24-hour hackathon at Anurag University with peer Shruti Keshri. The project improved remote education access and garnered appreciation for technical innovation.",
    date: "December 2024",
    image: Anurag
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