import React from 'react';
import { BookOpen } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import HobbiesSection from './components/HobbiesSection';
import TraitsSection from './components/TraitsSection';
import FoodSection from './components/FoodSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <HobbiesSection />
      <TraitsSection />
      {/* 分析师发展前景 */}
      <section id="development" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
            专业发展
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Python课程链接 */}
            <div className="bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-purple-500">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Python基础课程</h3>
              </div>
              <p className="text-gray-300 mb-6">
                学习Python基础语法素养，包括变量、数据类型、控制流、函数等核心概念。
              </p>
              <a 
                href="/python-course" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                查看课程内容
              </a>
            </div>
            
            {/* 分析师发展前景 */}
            <div className="bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-cyan-500">
              <h3 className="text-2xl font-semibold mb-6">分析师发展前景</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>数据驱动决策成为企业核心竞争力</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>大数据分析师需求持续增长</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>薪资水平高于平均水平，晋升空间大</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>跨行业通用性强，就业范围广</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FoodSection />
    </div>
  );
}

export default App;