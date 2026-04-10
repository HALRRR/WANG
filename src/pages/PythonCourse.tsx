import React, { useState } from 'react';
import { BookOpen, Home, Menu, X } from 'lucide-react';

const PythonCourse: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courseSections = [
    { id: 'basic', title: '基础语法' },
    { id: 'data-structures', title: '数据结构' },
    { id: 'functions', title: '函数' },
    { id: 'templates', title: '模板' },
    { id: 'oop', title: '面向对象编程' },
    { id: 'file-handling', title: '文件操作' },
    { id: 'exception', title: '异常处理' },
    { id: 'resources', title: '课程资源' },
    { id: 'coding-standards', title: '编程规范' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center text-xl font-bold">
            <BookOpen className="w-6 h-6 mr-2 text-pink-500" />
            Python基础课程
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:flex space-x-6">
            {courseSections.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`} 
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                {section.title}
              </a>
            ))}
            <a 
              href="/" 
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
            >
              返回主页
            </a>
          </div>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden text-gray-300 hover:text-pink-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {courseSections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.title}
                </a>
              ))}
              <a 
                href="/" 
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                返回主页
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 英雄区 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 极光多巴胺风格背景 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 opacity-80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          {/* 动态光效 */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* 内容 */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse">
            Python基础课程
          </h1>
          <p className="text-xl md:text-2xl text-white font-light max-w-2xl mx-auto mb-8">
            学习Python基础语法素养，掌握编程核心概念，开启数据分析之旅
          </p>
          <a 
            href="#basic" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            开始学习
          </a>
        </div>
      </section>

      {/* 课程内容 */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* 基础语法 */}
          <section id="basic" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">1. 基础语法</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>变量与数据类型（整数、浮点数、字符串、布尔值）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>运算符（算术、比较、逻辑、赋值）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>控制流（if-else语句、循环语句）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>模块与包的导入</span>
                </div>
              </div>
            </div>
          </section>

          {/* 数据结构 */}
          <section id="data-structures" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">2. 数据结构</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>列表（List）：创建、访问、修改、切片、方法（append, extend, remove, pop等）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>元组（Tuple）：创建、访问、不可变性</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>字典（Dictionary）：创建、访问、修改、遍历、方法（keys, values, items等）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>集合（Set）：创建、操作（并集、交集、差集）、唯一性</span>
                </div>
              </div>
            </div>
          </section>

          {/* 函数 */}
          <section id="functions" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">3. 函数</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>函数定义与调用</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>参数类型（位置参数、默认参数、可变参数、关键字参数）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>返回值与多个返回值</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>作用域（局部变量、全局变量）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Lambda函数（匿名函数）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>函数作为参数传递</span>
                </div>
              </div>
            </div>
          </section>

          {/* 模板 */}
          <section id="templates" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">4. 模板</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>字符串模板（format方法）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>f-strings（格式化字符串字面量）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>模板字符串模块（string.Template）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>字符串插值技巧</span>
                </div>
              </div>
            </div>
          </section>

          {/* 面向对象编程 */}
          <section id="oop" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">5. 面向对象编程</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>类与对象的概念</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>类的定义与实例化</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>属性与方法</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>继承与多态</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>封装与访问控制</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>特殊方法（__init__, __str__, __repr__等）</span>
                </div>
              </div>
            </div>
          </section>

          {/* 文件操作 */}
          <section id="file-handling" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">6. 文件操作</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>文件的打开与关闭</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>文件读取（read, readline, readlines）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>文件写入（write, writelines）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>文件模式（r, w, a, r+, w+, a+）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>with语句（上下文管理器）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>文件路径操作（os模块）</span>
                </div>
              </div>
            </div>
          </section>

          {/* 异常处理 */}
          <section id="exception" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">7. 异常处理</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>try-except语句</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>常见异常类型</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>自定义异常</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>try-except-else-finally结构</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>异常的传递与捕获</span>
                </div>
              </div>
            </div>
          </section>

          {/* 课程资源 */}
          <section id="resources" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">8. 课程资源</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Python官方文档</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>在线学习平台（Coursera, edX, Udemy等）</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Python编程书籍推荐</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>实战项目练习</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>社区资源与论坛</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>常用第三方库介绍</span>
                </div>
              </div>
            </div>
          </section>

          {/* 编程规范 */}
          <section id="coding-standards" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">9. 编程规范</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>PEP 8编码规范</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>注释与文档字符串</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>代码风格与可读性</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>命名规范</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>代码组织与模块化</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PythonCourse;