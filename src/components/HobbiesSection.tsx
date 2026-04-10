import React from 'react';
import { Music, Activity } from 'lucide-react';

interface Hobby {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const HobbiesSection: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      name: '吉他弹唱',
      icon: <Music className="w-8 h-8" />,
      description: '喜欢弹奏吉他并演唱，享受音乐带来的快乐和放松。',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: '街舞',
      icon: <Activity className="w-8 h-8" />,
      description: '热爱街舞，通过舞蹈表达自己的情感和创造力。',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          兴趣爱好
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div 
              key={hobby.name}
              className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${hobby.color} flex items-center justify-center mb-6`}>
                {hobby.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{hobby.name}</h3>
              <p className="text-gray-300">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;