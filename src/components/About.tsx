import React from 'react';
import { Download } from 'lucide-react';
import Hero from './Images/Hero.jpg';
import Resume1 from './Images/Resume1.pdf';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3">
              <img
                src={Hero}
                alt="Profile"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-2/3 space-y-6 text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                About Me
              </h2>
              <p className="text-lg text-gray-600">
                I am Shaik Hassan Ahmed, a passionate Computer Science student at Anurag University, Hyderabad, pursuing a Bachelor of Engineering
                with a cumulative GPA of 8.3/10 and an expected graduation in May 2027. Alongside my degree,
                I am also pursuing a minor in Artificial Intelligence from IIT Ropar.
              </p>
              <p className="text-lg text-gray-600">
                As a Microsoft Learn Student Ambassador and Blackbox AI Student Ambassador, I actively contribute to tech communities. I am also the founder of TechnoSphere, an AI and tech-based community
                that officially started its activities on November 10, 2024. I am also a member of the IEEE Computer Society.
              </p>
              <p className="text-lg text-gray-600">
                I specialize in data structures and algorithms, with strong expertise in full-stack development using React, Flask, Python, and JavaScript. My certifications include the Meta Front-End Development Professional Certificate (Coursera),
                where I honed my skills in front-end technologies like React and responsive design, the IBM SkillsBuild AI Foundations Certificate, which deepened my understanding of AI concepts, and the React Certification (HackerRank), validating my proficiency in building scalable React applications.
                I have also completed multiple courses on Microsoft Azure services, enhancing my cloud computing capabilities. Additionally, I completed a 10-week virtual internship on generative AI with EduSkills and Google Cloud, focusing on prompt engineering and large language models (LLMs).
              </p>
              <p className="text-lg text-gray-600">
                I actively engage in hackathons, winning recognition for innovative projects such as a tourism app and a learning management system.
                These experiences have honed my problem-solving skills, teamwork, and ability to develop practical solutions under tight deadlines.
              </p>
              <div className="pt-10 flex justify-center space-x-4">
                <a
                  href={Resume1}
                  download
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a
                  href={Resume1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
