import React from 'react';
import { Award, Zap } from 'lucide-react';

interface Trait {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const TraitsSection: React.FC = () => {
  const traits: Trait[] = [
    {
      name: '领导力',
      icon: <Award className="w-6 h-6" />,
      description: '具备良好的领导能力，能够带领团队完成任务。',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      name: '执行力',
      icon: <Zap className="w-6 h-6" />,
      description: '执行力强，能够高效完成各项任务。',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="traits" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          个人特质
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {traits.map((trait, index) => (
            <div 
              key={trait.name}
              className="flex items-start p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-purple-500"
            >
              <div className={`p-3 rounded-full bg-gradient-to-br ${trait.color} text-white mr-4 flex-shrink-0`}>
                {trait.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{trait.name}</h3>
                <p className="text-gray-300">{trait.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraitsSection;