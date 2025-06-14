import React, { useState } from 'react';
import { Award, ExternalLink, X, Calendar, Building, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import IBM_Logo from '../components/Images/Badges/IBM_Logo.webp';
import GOOGLE_Logo from '../components/Images/Badges/GOOGLE_Logo.webp';
import aws_logo from '../components/Images/Badges/aws_logo.png';
import cisco_logo from '../components/Images/Badges/cisco_logo.png';
import MICROSOFT_Logo from '../components/Images/Badges/MICROSOFT_Logo.png';
import GOOGLE1_LOGO from '../components/Images/Badges/GOOGLE1_LOGO.webp';

interface Badge {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  verificationUrl: string;
  image: string;
}

const badges: Badge[] = [
  {
    id: 1,
    name: "Data Fundamentals",
    issuer: "IBM",
    date: "2025",
    description: "Foundational certification covering data concepts, data analysis, and data visualization techniques.",
    verificationUrl: "https://www.credly.com/badges/e039298c-0508-4789-b54c-321dd349e848/public_url",
    image: IBM_Logo
  },
  {
    id: 2,
    name: "Develop GenAI Apps with Gemini and Streamlit Skill Badge",
    issuer: "Google",
    date: "2024",
    description: "Skill badge demonstrating the ability to develop generative AI applications using Google Gemini and Streamlit.",
    verificationUrl: "https://www.credly.com/badges/37e0ecac-801c-4a9a-98d0-76c09d278819/public_url",
    image: GOOGLE_Logo
  },
  {
    id: 3,
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "2025",
    description: "Certification covering the basics of artificial intelligence, including machine learning, natural language processing, and AI ethics.",
    verificationUrl: "https://www.credly.com/badges/473acf17-bf30-4c8e-81d1-9449dee37794/public_url",
    image: IBM_Logo
  },
  {
    id: 4,
    name: "AWS Educate Introduction to Generative AI",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "Introduction to Generative AI using AWS services, covering foundational concepts and practical applications.",
    verificationUrl: "https://www.credly.com/badges/11cc67a4-9c6c-4e77-8e8b-11e97fb84604/public_url",
    image: aws_logo
  },
  {
    id: 5,
    name: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google",
    date: "2024",
    description: "Skill badge demonstrating expertise in designing effective prompts for AI models using Google Vertex AI.",
    verificationUrl: "https://www.credly.com/badges/2dfec215-37c0-43ae-8503-eddc29f9c96d/public_url",
    image: GOOGLE_Logo
  },
  {
    id: 6,
    name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG Skill Badge",
    issuer: "Google",
    date: "2024",
    description: "Skill badge demonstrating the ability to inspect and analyze rich documents using Google Gemini's multimodal capabilities and retrieval-augmented generation (RAG) techniques.",
    verificationUrl: "https://www.credly.com/badges/ad1c4496-1e11-41f8-bc93-f6856db2d3e5/public_url",
    image: GOOGLE_Logo
  },
  {
    id: 7,
    name: "AI Foundations",
    issuer: "IBM",
    date: "2025",
    description: "This credential earner has the key knowledge, skills, and values necessary to understand and work with artificial intelligence (AI), and is aware of the implications of AI for the future of work and society in general. ",
    verificationUrl: "https://www.credly.com/badges/186745d6-6e65-436e-b5bc-9241cba17b0c/public_url",
    image: IBM_Logo
  },
  {
    id: 8,
    name: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "Earners of this badge have completed the Machine Learning Foundations training and achieved the required scores on the post-course assessment. ",
    verificationUrl: "https://www.credly.com/badges/19c2635c-6816-4041-ae47-b61fd98cc12e/public_url",
    image: aws_logo
  },
  {
    id: 9,
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024",
    description: "This certification provides foundational knowledge of cybersecurity concepts, principles, and practices, including network security, threat management, and risk assessment.",
    verificationUrl: "https://www.credly.com/badges/e490a738-c985-4df7-8b01-ed0d34b5ff41/public_url",
    image: cisco_logo
  },
  {
    id: 11,
    name: "Google Data Analytics Professional Certificate (v2)",
    issuer: "Google",
    date: "2025",
    description: "This professional certificate program provides learners with the skills and knowledge needed to become proficient in data analytics, including data cleaning, analysis, visualization, and reporting.",
    verificationUrl: "https://www.credly.com/badges/4e2d7597-496b-4e92-aaf7-12df46f8265b/public_url",
    image: GOOGLE1_LOGO
  }

];

const BadgesPage = () => {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const navigate = useNavigate();

  return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to Home Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Professional Badges</h1>
            <p className="mt-4 text-xl text-gray-600">Achievements earned throughout my career</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="relative w-56 h-56 mx-auto cursor-pointer group"
                onClick={() => setSelectedBadge(badge)}
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
              >
                {/* Hexagon Border */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 group-hover:scale-105"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                />
                
                {/* Hexagon Content */}
                <div 
                  className="absolute inset-1 bg-white flex flex-col items-center justify-center p-6 group-hover:scale-95 transition-all duration-300"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                >
                  <img 
                    src={badge.image} 
                    alt={badge.name}
                    className="w-20 h-20 object-cover rounded-full border-2 border-gray-200 mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <Award className="w-16 h-16 text-blue-600 mb-2 hidden" />
                  <h3 className="text-sm font-semibold text-center text-gray-900 leading-tight px-2">{badge.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{badge.date}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedBadge && (
            <div className="fixed inset-0 bg-black/50 badge-modal-overlay flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl max-w-lg w-full p-8 relative badge-modal active shadow-2xl">
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={selectedBadge.image} 
                    alt={selectedBadge.name}
                    className="w-16 h-16 object-cover rounded-full border-2 border-gray-200 mr-4"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <Award className="w-12 h-12 text-blue-600 mr-4 hidden" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedBadge.name}</h2>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{selectedBadge.description}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Issued by: {selectedBadge.issuer}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Issued: {selectedBadge.date}</span>
                    </div>
                  </div>
                  
                  <a
                    href={selectedBadge.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Badge
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default BadgesPage;