import React, { useState } from 'react';
import { Award } from 'lucide-react';
import IBM_1 from './Images/IBM_1.png';
import IBM_2 from './Images/IBM_2.png';
import AWS_1 from './Images/AWS_1.png';
import AWS_2 from './Images/AWS_2.png';
import Google_1 from './Images/Google_1.png';
import Google_2 from './Images/Google_2.png';
import Google_3 from './Images/Google_3.png';
import Cisco_1 from './Images/Cisco_1.png';
import META_1 from './Images/META_1.png';
import META_2 from './Images/META_2.png';
import META_3 from './Images/META_3.png';
import META_4 from './Images/META_4.png';
import META_5 from './Images/META_5.png';
import META_6 from './Images/META_6.png';
import HackerRank_1 from './Images/HackerRank_1.png';
import HackerRank_2 from './Images/HackerRank_2.png';
import HackerRank_3 from './Images/HackerRank_3.png';
import HackerRank_4 from './Images/HackerRank_4.png';
import HackerRank_5 from './Images/HackerRank_5.png';
import HackerRank_6 from './Images/HackerRank_6.png';
import HackerRank_7 from './Images/HackerRank_7.png';
import Forage_1 from './Images/Forage_1.png';


const certifications = [
  {
    title: 'Artificial Intelligence Fundamentals',
    description: 'Knowledge of AI concepts like NLP, computer vision, and running models with IBM Watson Studio.',
    image: IBM_1,
    provider: 'IBM-SkillsBuild',
    certificateUrl: 'https://www.credly.com/badges/473acf17-bf30-4c8e-81d1-9449dee37794/public_url',
  },
  {
    title: 'AWS Educate Introduction to Generative AI',
    description: 'Fundamental understanding of generative AI concepts and use cases from AWS Educate.',
    image: AWS_1,
    provider: 'Amazon Web Services',
    certificateUrl: 'https://www.credly.com/badges/11cc67a4-9c6c-4e77-8e8b-11e97fb84604/public_url',
  },
  {
    title: 'AI Foundations',
    description: 'Key AI skills and design thinking for AI-powered solutions from IBM SkillsBuild.',
    image: IBM_2,
    provider: 'IBM-SkillsBuild',
    certificateUrl: 'https://www.credly.com/badges/186745d6-6e65-436e-b5bc-9241cba17b0c/public_url',
  },
  {
    title: 'Develop GenAI Apps with Gemini and Streamlit Skill Badge',
    description: 'Skills in text generation, Gemini API, and deploying applications with Cloud Run from Google Cloud.',
    image: Google_1,
    provider: 'Google Cloud',
    certificateUrl: 'https://www.credly.com/badges/37e0ecac-801c-4a9a-98d0-76c09d278819/public_url',
  },
  {
    title: 'Prompt Design in Vertex AI Skill Badge',
    description: 'Skills in prompt engineering and multimodal generative techniques in Vertex AI from Google Cloud.',
    image: Google_3,
    provider: 'Google Cloud',
    certificateUrl: 'https://www.credly.com/badges/2dfec215-37c0-43ae-8503-eddc29f9c96d/public_url',
  },
  {
    title: 'AWS Educate Machine Learning Foundations',
    description: 'Fundamentals of machine learning and applying the ML pipeline to solve problems from AWS Educate.',
    image: AWS_2,
    provider: 'Amazon Web Services',
    certificateUrl: 'https://www.credly.com/badges/19c2635c-6816-4041-ae47-b61fd98cc12e/public_url',
  },
  {
    title: 'Introduction to Cybersecurity',
    description: 'Introductory knowledge of cybersecurity concepts and certifications from Cisco.',
    image: Cisco_1,
    provider: 'Cisco',
    certificateUrl: 'https://www.credly.com/badges/e490a738-c985-4df7-8b01-ed0d34b5ff41/public_url',
  },
  {
    title: 'Version Control',
    description: 'Understanding of version control systems and Git workflows from META.',
    image: META_3,
    provider: 'Coursera',
    certificateUrl: 'https://coursera.org/share/7dbb9c714ebc70858f2089154789aa77',
  },
  {
    title: 'React Basics',
    description: 'Foundational knowledge in React and building interactive UIs from META.',
    image: META_5,
    provider: 'Coursera',
    certificateUrl: 'https://coursera.org/share/c1c343b70ca375f4d57707e7a98bd711',
  },
  {
    title: 'Advanced React',
    description: 'Advanced skills in React, state management, and hooks from META.',
    image: META_6,
    provider: 'Coursera',
    certificateUrl: 'https://coursera.org/share/01021e6ce330860f7a8822fbbec8c73c',
  },
  {
    title: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG Skill Badge',
    description: 'Skills in multimodal RAG models and inspecting rich documents with Gemini from Google Cloud.',
    image: Google_2,
    provider: 'Google Cloud',
    certificateUrl: 'https://www.credly.com/badges/ad1c4496-1e11-41f8-bc93-f6856db2d3e5/public_url',
  },
  {
    title: 'Programming with JavaScript',
    description: 'Foundational knowledge in JavaScript programming and web development.',
    image: META_2,
    provider: 'Coursera',
    certificateUrl: 'https://coursera.org/share/d3d6551f4f94ca3e12d12c63e5273059',
  },
  {
    title: 'HTML and CSS in depth',
    description: 'Advanced skills in HTML and CSS for web development from META.',
    image: META_4,
    provider: 'Coursera',
    certificateUrl: 'https://coursera.org/share/576914ccbf4318ef12afed045bdc3d09',
  },
  {
    title: 'Introduction to Front-End Development',
    description: 'Foundational knowledge in front-end development and responsive design from META.',
    image: META_1,
    provider: 'Coursera',
    certificateUrl: 'https://coursera.org/share/c7ccb769cbbc2b4f568fdbcf82c3bf9c',
  },
  {
    title: 'Problem Solving (Basic)',
    description: 'Foundational knowledge in problem-solving and programming from HackerRank.',
    image: HackerRank_6,
    provider: 'HackerRank',
    certificateUrl: 'https://www.hackerrank.com/certificates/iframe/21df71dee7c3',
  },
  {
    title: 'CSS (Basic)',
    description: 'Foundational knowledge in CSS and styling web pages from HackerRank.',
    image: HackerRank_2,
    provider: 'HackerRank',
    certificateUrl: 'https://www.hackerrank.com/certificates/iframe/1d37f26128c0',
  },
  {
    title: 'C# (Basic)',
    description: 'Foundational knowledge in C# programming from HackerRank.',
    image: HackerRank_3,
    provider: 'HackerRank',
    certificateUrl: 'https://www.hackerrank.com/certificates/iframe/65b123f83fe0',
  },
  {
    title: 'JavaScript (Basic)',
    description: 'Foundational knowledge in JavaScript programming from HackerRank.',
    image: HackerRank_4,
    provider: 'HackerRank',
    certificateUrl: 'https://www.hackerrank.com/certificates/iframe/b0b7e0ecd83d',
  },
  {
    title: 'React (Basic)',
    description: 'Foundational knowledge in React and building interactive UIs from HackerRank.',
    image: HackerRank_5,
    provider: 'HackerRank',
    certificateUrl: 'https://www.hackerrank.com/certificates/iframe/d2a0632bc2e2',
  },
  {
    title: 'Frontend Developer (React)',
    description: 'Skills in building scalable React applications from HackerRank.',
    image: HackerRank_6,
    provider: 'HackerRank',
    certificateUrl: 'https://www.hackerrank.com/certificates/iframe/e28784c16e5c',
  },
  {
    title: 'SQL (Basic)',
    description: 'Foundational knowledge in SQL and database management from HackerRank.',
    image: HackerRank_7,
    provider: 'HackerRank',
    certificateUrl: 'https://www.hackerrank.com/certificates/iframe/1490719b0d29',
  },
  {
    title: 'Software Engineering Job Simulation',
    description: 'Real-world software engineering skills and practices from Forage.',
    image: Forage_1,
    provider: 'Forage',
    certificateUrl: 'https://www.theforage.com/simulations/goldman-sachs/software-engineering-unei',
  },
  {
    title: 'Problem Solving (Basic)',
    description: 'Foundational knowledge in problem-solving and programming from HackerRank.',
    image: HackerRank_1,
    provider: 'HackerRank',
    certificateUrl: 'https://www.hackerrank.com/certificates/iframe/21df71dee7c3',
  },
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const certificationsToShow = showAll ? certifications : certifications.slice(0, 3); // Initially show only 3 certifications

  return (
    <section id="certifications" className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A selection of certifications I have earned to enhance my skills.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {certificationsToShow.map((certification) => (
            <div
              key={certification.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={certification.image}
                  alt={certification.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {certification.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {certification.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
                    >
                      {certification.provider}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
