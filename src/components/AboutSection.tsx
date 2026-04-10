import React from 'react';
import { GraduationCap, User, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          个人信息
        </h2>
        
        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-4">
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20young%20Chinese%20woman%20with%20friendly%20smile%2C%20clean%20background&image_size=square_hd" 
              alt="个人头像" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold">汪宇涵</h3>
          <p className="text-gray-300 mt-2 flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-pink-500" />
            四川遂宁
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 教育背景 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-pink-500 mr-4" />
              <h3 className="text-2xl font-semibold">教育背景</h3>
            </div>
            <p className="text-gray-300">
              广东科学技术职业学院
            </p>
            <p className="text-gray-400 mt-2">
              商务数据分析与应用专业
            </p>
          </div>
          
          {/* MBTI类型 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-500">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 text-cyan-500 mr-4" />
              <h3 className="text-2xl font-semibold">个人特质</h3>
            </div>
            <p className="text-gray-300">
              MBTI类型: INFJ
            </p>
            <p className="text-gray-400 mt-2">
              倡导型人格，富有洞察力和创造力
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;