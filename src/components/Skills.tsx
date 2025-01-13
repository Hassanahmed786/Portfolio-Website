import React from 'react';
import { Code2, Database, Globe, Palette, Server, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Globe className="w-8 h-8" />,
    skills: ['React', 'Tailwind CSS', 'Next.js' , 'HTML', 'CSS'],
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-8 h-8" />,
    skills: ['Python', 'Node.js', 'Django','REST API','Flask'],
  },
  {
    title: 'Tools & DevOps',
    icon: <Settings className="w-8 h-8" />,
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
  },
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-8 h-8" />,
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
  },
  {
    title: 'Database',
    icon: <Database className="w-8 h-8" />,
    skills: ['MongoDB', 'Redis', 'MySQL', 'Firebase'],
  },
  {
    title: 'Design',
    icon: <Palette className="w-8 h-8" />,
    skills: ['Figma', 'UI/UX', 'Responsive Design'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-blue-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;