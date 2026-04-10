import React from 'react';
import { BookOpen, TrendingUp } from 'lucide-react';

const DevelopmentSection: React.FC = () => {
  return (
    <section id="development" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          专业发展
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Python课程基础 */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white mr-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Python课程基础</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Python基础语法与数据类型</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>函数与模块编程</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>文件操作与异常处理</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>数据结构与算法</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>数据分析库（Pandas、NumPy）</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>数据可视化（Matplotlib、Seaborn）</span>
              </li>
            </ul>
          </div>
          
          {/* 分析师发展前景 */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-500">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white mr-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">分析师发展前景</h3>
            </div>
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
                <span>可向数据科学家、数据工程师等方向发展</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>跨行业通用性强，就业范围广</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>持续学习新技术，职业生命周期长</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;