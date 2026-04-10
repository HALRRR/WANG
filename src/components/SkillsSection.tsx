import React from 'react';
import { FileText, BarChart3, Presentation, Code } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Word',
      icon: <FileText className="w-6 h-6" />,
      level: 90,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Excel',
      icon: <BarChart3 className="w-6 h-6" />,
      level: 85,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'PowerPoint',
      icon: <Presentation className="w-6 h-6" />,
      level: 80,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Python',
      icon: <Code className="w-6 h-6" />,
      level: 75,
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          技能展示
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-purple-500"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-br ${skill.color} text-white`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5 mb-2">
                <div 
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;