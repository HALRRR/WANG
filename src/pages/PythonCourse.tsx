import React, { useState } from 'react';
import { BookOpen, Home, Menu, X } from 'lucide-react';

const PythonCourse: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courseSections = [
    { id: 'basic', title: '核心语法与流程控制' },
    { id: 'data-structures', title: '核心数据结构' },
    { id: 'functions', title: '函数与模块化思维' },
    { id: 'data-processing', title: '数据处理三剑客' },
    { id: 'file-handling', title: '文件操作与异常处理' },
    { id: 'resources', title: '学习资源与编程规范' },
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
            面向AI时代的Python学习，从核心语法到数据分析，构建完整的编程思维
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
          {/* 核心语法与流程控制 */}
          <section id="basic" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">模块一：核心语法与流程控制 — 建立计算思维</h2>
              <p className="text-xl mb-8 text-gray-300">学习目标：这是与AI沟通的底层逻辑，无需死记符号，但必须理解其运行机制。</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">1.1 变量与数据类型</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>整数（int）、浮点数（float）、字符串（str）、布尔值（bool）</li>
                    <li>数据类型转换：int(), float(), str(), bool()</li>
                    <li>类型检测：type() 函数的使用</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">1.2 运算符</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>算术运算符：+, -, *, /, //, %, **</li>
                    <li>比较运算符：==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
                    <li>逻辑运算符：and, or, not</li>
                    <li>赋值运算符：=, +=, -=, *=, /=</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">1.3 流程控制</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>条件语句：if-elif-else 结构</li>
                    <li>循环语句：for 循环与遍历</li>
                    <li>while 循环</li>
                    <li>break 与 continue 的控制</li>
                    <li>实战要点：在AI时代，你需要清楚告诉AI"在什么条件下循环做什么事"，这部分逻辑必须清晰</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 核心数据结构 */}
          <section id="data-structures" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">模块二：核心数据结构 — 数据的容器</h2>
              <p className="text-xl mb-8 text-gray-300">学习目标：数据分析与AI处理的起点都是数据容器，这部分必须熟练掌握其特性（增删改查）。</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">2.1 列表（List）⭐ 重点</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>创建与访问：索引、切片操作</li>
                    <li>修改操作：append(), extend(), insert(), remove(), pop()</li>
                    <li>列表推导式：简洁高效的数据处理方式</li>
                    <li>常用方法：sort(), reverse(), len(), in 操作</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">2.2 字典（Dictionary）⭐ 重点</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>键值对存储：创建、访问、修改</li>
                    <li>核心方法：keys(), values(), items(), get(), update()</li>
                    <li>遍历技巧：按键遍历、按值遍历、按键值对遍历</li>
                    <li>实战要点：字典是后续处理JSON数据、调用API返回结果的核心格式，必须熟练掌握</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">2.3 元组（Tuple）</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>创建与访问</li>
                    <li>不可变性及其应用场景</li>
                    <li>元组解包</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">2.4 集合（Set）</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>创建与基本操作</li>
                    <li>去重、交集、并集、差集运算</li>
                    <li>集合推导式</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 函数与模块化思维 */}
          <section id="functions" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">模块三：函数与模块化思维 — 指挥AI的"指令单元"</h2>
              <p className="text-xl mb-8 text-gray-300">学习目标：AI生成代码往往是以函数为单位的，你需要懂如何定义和调用。</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.1 函数定义与调用</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>def 关键字定义函数</li>
                    <li>函数命名规范</li>
                    <li>函数调用与执行流程</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.2 参数类型</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>位置参数：按顺序传递</li>
                    <li>关键字参数：按名称传递</li>
                    <li>默认参数：预设默认值</li>
                    <li>可变参数：*args 和 **kwargs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.3 返回值</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>return 语句</li>
                    <li>单返回值与多返回值</li>
                    <li>实战要点：理解函数如何输出结果，以便在后续流程中承接数据</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.4 模块与包</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>import 导入标准库</li>
                    <li>from ... import ... 选择性导入</li>
                    <li>第三方库安装：pip install</li>
                    <li>实战要点：这是你扩展Python能力的入口——你不需要自己写算法，只需知道调用哪个库的哪个函数</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.5 Lambda函数（补充）</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>匿名函数的定义与使用</li>
                    <li>与 map(), filter(), sorted() 配合使用</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 数据处理三剑客 */}
          <section id="data-processing" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">模块四：数据处理"三剑客" — 直接对接业务与AI ⭐⭐⭐</h2>
              <p className="text-xl mb-8 text-gray-300">学习目标：这是传统编程向数据/AI领域跨越的关键，也是你专业的核心。不要用纯Python去造轮子，直接学习这三大库。</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">4.1 NumPy — 科学计算基础</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>多维数组（ndarray）：创建、属性、形状操作</li>
                    <li>向量化运算：告别循环，高效计算</li>
                    <li>数组索引与切片</li>
                    <li>常用函数：sum(), mean(), std(), max(), min()</li>
                    <li>广播机制简介</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">4.2 Pandas — 数据分析核心 ⭐⭐⭐ 重中之重</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>DataFrame结构：理解表格数据的核心对象</li>
                    <li>数据读取：</li>
                    <li className="pl-6">CSV文件：pd.read_csv()</li>
                    <li className="pl-6">Excel文件：pd.read_excel()</li>
                    <li>数据清洗：</li>
                    <li className="pl-6">处理缺失值：dropna(), fillna()</li>
                    <li className="pl-6">处理重复值：duplicated(), drop_duplicates()</li>
                    <li className="pl-6">数据类型转换：astype()</li>
                    <li>数据筛选：</li>
                    <li className="pl-6">条件筛选：布尔索引</li>
                    <li className="pl-6">loc[] 与 iloc[] 的使用</li>
                    <li>分组聚合：</li>
                    <li className="pl-6">groupby() 分组操作</li>
                    <li className="pl-6">聚合函数：agg(), sum(), mean(), count()</li>
                    <li>数据合并：</li>
                    <li className="pl-6">merge() 连接操作</li>
                    <li className="pl-6">concat() 拼接操作</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">4.3 Matplotlib — 数据可视化</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>基础绑定：plt.plot(), plt.show()</li>
                    <li>核心图表：</li>
                    <li className="pl-6">折线图：plt.plot()</li>
                    <li className="pl-6">柱状图：plt.bar()</li>
                    <li className="pl-6">散点图：plt.scatter()</li>
                    <li className="pl-6">饼图：plt.pie()</li>
                    <li className="pl-6">直方图：plt.hist()</li>
                    <li>图表美化：标题、标签、图例、样式</li>
                    <li>中文显示问题解决</li>
                    <li>实战要点：能够将分析结果可视化呈现</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 文件操作与异常处理 */}
          <section id="file-handling" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">模块五：文件操作与异常处理 — 让程序健壮落地</h2>
              <p className="text-xl mb-8 text-gray-300">学习目标：真实业务需要与外部数据交互，且运行中难免出错。</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">5.1 文件操作</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>基本读写：with open() 上下文管理器</li>
                    <li>文件模式：r, w, a, rb, wb</li>
                    <li>文本文件操作：read(), readline(), readlines(), write()</li>
                    <li>CSV文件处理：结合Pandas进行读写</li>
                    <li>文件路径操作：os 模块与 pathlib 模块</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">5.2 异常处理</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>基本结构：try-except 语句</li>
                    <li>完整结构：try-except-else-finally</li>
                    <li>常见异常类型：</li>
                    <li className="pl-6">ValueError, TypeError</li>
                    <li className="pl-6">FileNotFoundError</li>
                    <li className="pl-6">KeyError, IndexError</li>
                    <li>自定义异常：创建与应用</li>
                    <li>实战要点：让程序在遇到错误时不至于直接崩溃，而是优雅地处理或记录</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 学习资源与编程规范 */}
          <section id="resources" className="mb-20">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-pink-400">附录：学习资源与编程规范</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">A. 推荐学习资源</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>官方文档：Python官方文档</li>
                    <li>在线平台：Coursera、edX、Udemy、B站教程</li>
                    <li>推荐书籍：《Python编程：从入门到实践》、《利用Python进行数据分析》</li>
                    <li>社区资源：Stack Overflow、GitHub、CSDN</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">B. 编程规范（PEP 8）</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>代码缩进：4个空格</li>
                    <li>命名规范：</li>
                    <li className="pl-6">变量/函数：snake_case</li>
                    <li className="pl-6">类名：PascalCase</li>
                    <li className="pl-6">常量：UPPER_CASE</li>
                    <li>注释与文档字符串</li>
                    <li>代码可读性原则</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">C. 常用第三方库速查</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-600">
                          <th className="px-4 py-3 text-left">库名</th>
                          <th className="px-4 py-3 text-left">用途</th>
                          <th className="px-4 py-3 text-left">安装命令</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-600">
                          <td className="px-4 py-3">NumPy</td>
                          <td className="px-4 py-3">科学计算</td>
                          <td className="px-4 py-3">pip install numpy</td>
                        </tr>
                        <tr className="border-t border-gray-600">
                          <td className="px-4 py-3">Pandas</td>
                          <td className="px-4 py-3">数据分析</td>
                          <td className="px-4 py-3">pip install pandas</td>
                        </tr>
                        <tr className="border-t border-gray-600">
                          <td className="px-4 py-3">Matplotlib</td>
                          <td className="px-4 py-3">数据可视化</td>
                          <td className="px-4 py-3">pip install matplotlib</td>
                        </tr>
                        <tr className="border-t border-gray-600">
                          <td className="px-4 py-3">Requests</td>
                          <td className="px-4 py-3">HTTP请求</td>
                          <td className="px-4 py-3">pip install requests</td>
                        </tr>
                        <tr className="border-t border-gray-600">
                          <td className="px-4 py-3">OpenPyXL</td>
                          <td className="px-4 py-3">Excel处理</td>
                          <td className="px-4 py-3">pip install openpyxl</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">课程学习路线图</h3>
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <ol className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-4">1</div>
                        <span>模块一：核心语法与流程控制</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-4">2</div>
                        <span>模块二：核心数据结构</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-4">3</div>
                        <span>模块三：函数与模块化思维</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-4">4</div>
                        <span>模块四：数据处理"三剑客" ← 核心重点</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-4">5</div>
                        <span>模块五：文件操作与异常处理</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-4">6</div>
                        <span>实战项目</span>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">课程特色</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>✅ 面向AI时代的学习视角</li>
                    <li>✅ 强调数据处理实战能力</li>
                    <li>✅ 精简理论，注重应用</li>
                    <li>✅ 与数据分析专业紧密结合</li>
                  </ul>
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