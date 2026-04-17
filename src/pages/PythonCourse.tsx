import React, { useState } from 'react';
import { BookOpen, Home, Menu, X } from 'lucide-react';
import CodeRunner from '../components/CodeRunner';

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
                  <div className="mt-6">
                    <CodeRunner
                      title="变量与数据类型示例"
                      initialCode={`# 变量与数据类型示例

# 整数
age = 20
print("年龄:", age, "类型:", type(age))

# 浮点数
height = 1.75
print("身高:", height, "类型:", type(height))

# 字符串
name = "Wang Yuhan"
print("姓名:", name, "类型:", type(name))

# 布尔值
is_student = True
print("是否学生:", is_student, "类型:", type(is_student))

# 数据类型转换
num_str = "42"
num_int = int(num_str)
print("字符串转整数:", num_int, "类型:", type(num_int))

num_float = float(num_int)
print("整数转浮点数:", num_float, "类型:", type(num_float))

result_str = str(num_float)
print("浮点数转字符串:", result_str, "类型:", type(result_str))
`}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">1.2 运算符</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>算术运算符：+, -, *, /, //, %, **</li>
                    <li>比较运算符：==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
                    <li>逻辑运算符：and, or, not</li>
                    <li>赋值运算符：=, +=, -=, *=, /=</li>
                  </ul>
                  <div className="mt-6">
                    <CodeRunner
                      title="运算符示例"
                      initialCode={`# 运算符示例

# 算术运算符
a = 10
b = 3

print("加法:", a + b)
print("减法:", a - b)
print("乘法:", a * b)
print("除法:", a / b)
print("整除:", a // b)
print("取余:", a % b)
print("幂运算:", a ** b)

# 比较运算符
print("\n比较运算符:")
print("a == b:", a == b)
print("a != b:", a != b)
print("a > b:", a > b)
print("a < b:", a < b)
print("a >= b:", a >= b)
print("a <= b:", a <= b)

# 逻辑运算符
x = True
y = False

print("\n逻辑运算符:")
print("x and y:", x and y)
print("x or y:", x or y)
print("not x:", not x)

# 赋值运算符
c = 5
print("\n赋值运算符:")
print("初始值 c:", c)
c += 2
print("c += 2:", c)
c -= 1
print("c -= 1:", c)
c *= 3
print("c *= 3:", c)
c /= 2
print("c /= 2:", c)
`}
                    />
                  </div>
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
                  <div className="mt-6">
                    <CodeRunner
                      title="流程控制示例"
                      initialCode={`# 流程控制示例

# 条件语句
print("=== 条件语句 ===")
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")

# for 循环
print("\n=== for 循环 ===")
# 遍历列表
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
for fruit in fruits:
    print(f"我喜欢吃{fruit}")

# 遍历数字范围
print("\n1到5的数字:")
for i in range(1, 6):
    print(i)

# while 循环
print("\n=== while 循环 ===")
count = 1
while count <= 5:
    print(f"计数: {count}")
    count += 1

# break 与 continue
print("\n=== break 与 continue ===")
print("使用 break:")
for i in range(1, 10):
    if i == 5:
        break
    print(i)

print("\n使用 continue:")
for i in range(1, 10):
    if i % 2 == 0:
        continue
    print(i)
`}
                    />
                  </div>
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
                  <div className="mt-6">
                    <CodeRunner
                      title="列表操作示例"
                      initialCode={`# 列表操作示例

# 创建列表
fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]
print("原始列表:", fruits)

# 访问元素
print("\n访问元素:")
print("第一个元素:", fruits[0])
print("最后一个元素:", fruits[-1])

# 切片操作
print("\n切片操作:")
print("前三个元素:", fruits[:3])
print("从第二个到第四个元素:", fruits[1:4])
print("最后两个元素:", fruits[-2:])

# 修改操作
print("\n修改操作:")
fruits.append("草莓")  # 添加元素到末尾
print("添加草莓后:", fruits)

fruits.extend(["菠萝", "芒果"])  # 扩展列表
print("添加菠萝和芒果后:", fruits)

fruits.insert(1, "梨")  # 在指定位置插入元素
print("插入梨后:", fruits)

fruits.remove("香蕉")  # 删除指定元素
print("删除香蕉后:", fruits)

popped_fruit = fruits.pop()  # 弹出最后一个元素
print("弹出的元素:", popped_fruit)
print("弹出后:", fruits)

# 列表推导式
print("\n列表推导式:")
numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers]
print("平方数:", squared_numbers)

# 常用方法
print("\n常用方法:")
print("列表长度:", len(fruits))
print("橙子是否在列表中:", "橙子" in fruits)

# 排序和反转
numbers = [5, 2, 8, 1, 9]
numbers.sort()
print("排序后:", numbers)

numbers.reverse()
print("反转后:", numbers)
`}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">2.2 字典（Dictionary）⭐ 重点</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>键值对存储：创建、访问、修改</li>
                    <li>核心方法：keys(), values(), items(), get(), update()</li>
                    <li>遍历技巧：按键遍历、按值遍历、按键值对遍历</li>
                    <li>实战要点：字典是后续处理JSON数据、调用API返回结果的核心格式，必须熟练掌握</li>
                  </ul>
                  <div className="mt-6">
                    <CodeRunner
                      title="字典操作示例"
                      initialCode={`# 字典操作示例

# 创建字典
student = {
    "name": "Wang Yuhan",
    "age": 20,
    "major": "商务数据分析与应用",
    "university": "广东科学技术职业学院",
    "MBTI": "INFJ"
}
print("原始字典:", student)

# 访问元素
print("\n访问元素:")
print("姓名:", student["name"])
print("专业:", student["major"])

# 使用get方法访问
print("\n使用get方法:")
print("年龄:", student.get("age"))
print("不存在的键:", student.get("grade", "未找到"))

# 修改元素
print("\n修改元素:")
student["age"] = 21
print("修改年龄后:", student)

# 添加新键值对
student["hobby"] = "吉他弹唱"
print("添加爱好后:", student)

# 删除键值对
del student["MBTI"]
print("删除MBTI后:", student)

# 核心方法
print("\n核心方法:")
print("所有键:", list(student.keys()))
print("所有值:", list(student.values()))
print("所有键值对:", list(student.items()))

# 使用update方法更新字典
print("\n使用update方法:")
student.update({"hobby": "吉他弹唱和街舞", "grade": "优秀"})
print("更新后:", student)

# 遍历字典
print("\n遍历字典:")
print("按键遍历:")
for key in student:
    print(key, ":", student[key])

print("\n按键值对遍历:")
for key, value in student.items():
    print(f"{key}: {value}")
`}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">2.3 元组（Tuple）</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>创建与访问</li>
                    <li>不可变性及其应用场景</li>
                    <li>元组解包</li>
                  </ul>
                  <div className="mt-6">
                    <CodeRunner
                      title="元组操作示例"
                      initialCode={`# 元组操作示例

# 创建元组
fruits = ("苹果", "香蕉", "橙子", "葡萄")
print("原始元组:", fruits)

# 访问元素
print("\n访问元素:")
print("第一个元素:", fruits[0])
print("最后一个元素:", fruits[-1])

# 切片操作
print("\n切片操作:")
print("前两个元素:", fruits[:2])
print("从第二个到第三个元素:", fruits[1:3])

# 元组长度
print("\n元组长度:", len(fruits))

# 元组是不可变的
print("\n元组不可变性:")
try:
    fruits[0] = "梨"  # 尝试修改元组，会抛出错误
except TypeError as e:
    print("错误信息:", e)

# 元组解包
print("\n元组解包:")
a, b, c, d = fruits
print(f"a = {a}, b = {b}, c = {c}, d = {d}")

# 部分解包
print("\n部分解包:")
x, *y = fruits
print(f"x = {x}, y = {y}")

# 元组的应用场景
print("\n元组的应用场景:")
# 1. 作为函数返回多个值
print("1. 作为函数返回多个值:")
def get_student_info():
    return "Wang Yuhan", 20, "商务数据分析与应用"

name, age, major = get_student_info()
print(f"姓名: {name}, 年龄: {age}, 专业: {major}")

# 2. 作为字典的键
print("\n2. 作为字典的键:")
coordinates = {
    (1, 2): "点A",
    (3, 4): "点B",
    (5, 6): "点C"
}
print("坐标 (1, 2):", coordinates[(1, 2)])
`}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">2.4 集合（Set）</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>创建与基本操作</li>
                    <li>去重、交集、并集、差集运算</li>
                    <li>集合推导式</li>
                  </ul>
                  <div className="mt-6">
                    <CodeRunner
                      title="集合操作示例"
                      initialCode={`# 集合操作示例

# 创建集合
fruits = {"苹果", "香蕉", "橙子", "葡萄", "苹果"}  # 注意：重复的"苹果"会被自动去重
print("原始集合:", fruits)

# 添加元素
print("\n添加元素:")
fruits.add("草莓")
print("添加草莓后:", fruits)

# 删除元素
print("\n删除元素:")
fruits.remove("香蕉")  # 如果元素不存在会抛出错误
print("删除香蕉后:", fruits)

# 安全删除
print("\n安全删除:")
fruits.discard("梨")  # 如果元素不存在不会抛出错误
print("尝试删除不存在的梨后:", fruits)

# 集合运算
print("\n集合运算:")
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

print("set1:", set1)
print("set2:", set2)

# 并集
print("\n并集:", set1 | set2)
print("并集:", set1.union(set2))

# 交集
print("\n交集:", set1 & set2)
print("交集:", set1.intersection(set2))

# 差集
print("\n差集 (set1 - set2):", set1 - set2)
print("差集 (set2 - set1):", set2 - set1)
print("差集:", set1.difference(set2))

# 对称差集（只在一个集合中出现的元素）
print("\n对称差集:", set1 ^ set2)
print("对称差集:", set1.symmetric_difference(set2))

# 集合推导式
print("\n集合推导式:")
even_numbers = {x for x in range(1, 10) if x % 2 == 0}
print("1-9中的偶数:", even_numbers)

# 集合的应用场景
print("\n集合的应用场景:")
# 1. 去重
print("1. 去重:")
numbers = [1, 2, 3, 2, 1, 4, 5, 4]
unique_numbers = list(set(numbers))
print("原始列表:", numbers)
print("去重后:", unique_numbers)

# 2. 成员检测
print("\n2. 成员检测:")
print("3是否在set1中:", 3 in set1)
print("10是否在set1中:", 10 in set1)
`}
                    />
                  </div>
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
                  <div className="mt-6">
                    <CodeRunner
                      title="函数定义与调用示例"
                      initialCode={`# 函数定义与调用示例

# 定义一个简单函数
def greet():
    """打印问候信息"""
    print("Hello, welcome to Python!")

# 调用函数
print("调用greet函数:")
greet()

# 定义带参数的函数
def greet_name(name):
    """打印带姓名的问候信息"""
    print(f"Hello, {name}!")

# 调用带参数的函数
print("\n调用greet_name函数:")
greet_name("Wang Yuhan")

# 定义带返回值的函数
def add(a, b):
    """计算两个数的和并返回结果"""
    return a + b

# 调用带返回值的函数
result = add(3, 5)
print("\n调用add函数:")
print(f"3 + 5 = {result}")

# 函数的执行流程
def calculate_area(radius):
    """计算圆的面积"""
    print(f"开始计算半径为{radius}的圆的面积")
    area = 3.14159 * radius ** 2
    print(f"计算完成，面积为{area}")
    return area

print("\n函数执行流程:")
circle_area = calculate_area(5)
print(f"圆的面积: {circle_area}")
`}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.2 参数类型</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>位置参数：按顺序传递</li>
                    <li>关键字参数：按名称传递</li>
                    <li>默认参数：预设默认值</li>
                    <li>可变参数：*args 和 **kwargs</li>
                  </ul>
                  <div className="mt-6">
                    <CodeRunner
                      title="参数类型示例"
                      initialCode={`# 参数类型示例

# 1. 位置参数
def describe_person(name, age, city):
    """描述一个人的信息"""
    print(f"姓名: {name}, 年龄: {age}, 城市: {city}")

print("1. 位置参数:")
describe_person("Wang Yuhan", 20, "Suining")

# 2. 关键字参数
print("\n2. 关键字参数:")
describe_person(city="Guangzhou", name="Wang Yuhan", age=20)

# 3. 默认参数
def describe_person_with_default(name, age, city="Unknown"):
    """描述一个人的信息，城市有默认值"""
    print(f"姓名: {name}, 年龄: {age}, 城市: {city}")

print("\n3. 默认参数:")
describe_person_with_default("Wang Yuhan", 20)  # 使用默认城市
describe_person_with_default("Wang Yuhan", 20, "Suining")  # 覆盖默认城市

# 4. 可变参数 *args（接收任意数量的位置参数）
def sum_numbers(*args):
    """计算任意数量数字的和"""
    total = 0
    for num in args:
        total += num
    return total

print("\n4. 可变参数 *args:")
print(f"1 + 2 = {sum_numbers(1, 2)}")
print(f"1 + 2 + 3 + 4 = {sum_numbers(1, 2, 3, 4)}")
print(f"无参数: {sum_numbers()}")

# 5. 可变参数 **kwargs（接收任意数量的关键字参数）
def print_info(**kwargs):
    """打印任意关键字参数"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print("\n5. 可变参数 **kwargs:")
print_info(name="Wang Yuhan", age=20, major="商务数据分析与应用")

# 6. 混合使用不同类型的参数
def mixed_parameters(name, age, *args, city="Unknown", **kwargs):
    """混合使用不同类型的参数"""
    print(f"姓名: {name}, 年龄: {age}, 城市: {city}")
    print("额外的位置参数:", args)
    print("额外的关键字参数:", kwargs)

print("\n6. 混合使用不同类型的参数:")
mixed_parameters("Wang Yuhan", 20, "hobby1", "hobby2", city="Suining", major="商务数据分析与应用", grade="优秀")
`}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.3 返回值</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>return 语句</li>
                    <li>单返回值与多返回值</li>
                    <li>实战要点：理解函数如何输出结果，以便在后续流程中承接数据</li>
                  </ul>
                  <div className="mt-6">
                    <CodeRunner
                      title="返回值示例"
                      initialCode={`# 返回值示例

# 1. 无返回值的函数
def greet():
    """打印问候信息，无返回值"""
    print("Hello!")

print("1. 无返回值的函数:")
result = greet()
print(f"greet函数的返回值: {result}")

# 2. 单返回值的函数
def calculate_area(radius):
    """计算圆的面积并返回结果"""
    return 3.14159 * radius ** 2

print("\n2. 单返回值的函数:")
area = calculate_area(5)
print(f"半径为5的圆的面积: {area}")

# 3. 多返回值的函数
def get_student_info():
    """返回学生的姓名、年龄和专业"""
    name = "Wang Yuhan"
    age = 20
    major = "商务数据分析与应用"
    return name, age, major

print("\n3. 多返回值的函数:")
# 方法1：分别接收返回值
student_name, student_age, student_major = get_student_info()
print(f"姓名: {student_name}, 年龄: {student_age}, 专业: {student_major}")

# 方法2：作为元组接收
student_info = get_student_info()
print(f"学生信息元组: {student_info}")
print(f"通过索引访问: 姓名={student_info[0]}, 年龄={student_info[1]}, 专业={student_info[2]}")

# 4. 条件返回值
def get_grade(score):
    """根据分数返回等级"""
    if score >= 90:
        return "优秀"
    elif score >= 80:
        return "良好"
    elif score >= 60:
        return "及格"
    else:
        return "不及格"

print("\n4. 条件返回值:")
print(f"分数85的等级: {get_grade(85)}")
print(f"分数65的等级: {get_grade(65)}")
print(f"分数55的等级: {get_grade(55)}")

# 5. 返回值的应用场景
print("\n5. 返回值的应用场景:")
# 计算两个数的和与差
def calculate(a, b):
    """返回两个数的和与差"""
    return a + b, a - b

# 调用函数并使用返回值
sum_result, difference_result = calculate(10, 3)
print(f"10 + 3 = {sum_result}")
print(f"10 - 3 = {difference_result}")

# 将返回值作为参数传递给另一个函数
def multiply_by_two(number):
    """返回数字的两倍"""
    return number * 2

result = multiply_by_two(sum_result)
print(f"(10 + 3) * 2 = {result}")
`}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.4 模块与包</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>import 导入标准库</li>
                    <li>from ... import ... 选择性导入</li>
                    <li>第三方库安装：pip install</li>
                    <li>实战要点：这是你扩展Python能力的入口——你不需要自己写算法，只需知道调用哪个库的哪个函数</li>
                  </ul>
                  <div className="mt-6">
                    <CodeRunner
                      title="模块与包示例"
                      initialCode={`# 模块与包示例

# 1. 导入整个模块
print("1. 导入整个模块:")
import math
print(f"π的值: {math.pi}")
print(f"2的平方根: {math.sqrt(2)}")
print(f"sin(π/2): {math.sin(math.pi/2)}")

# 2. 从模块中选择性导入
print("\n2. 从模块中选择性导入:")
from math import pi, sqrt
print(f"π的值: {pi}")
print(f"4的平方根: {sqrt(4)}")

# 3. 使用别名
print("\n3. 使用别名:")
import math as m
print(f"π的值: {m.pi}")
print(f"cos(0): {m.cos(0)}")

# 4. 导入所有内容（不推荐）
print("\n4. 导入所有内容:")
from math import *
print(f"e的值: {e}")
print(f"tan(π/4): {tan(pi/4)}")

# 5. 使用内置模块
print("\n5. 使用内置模块:")
# 时间模块
import time
print(f"当前时间戳: {time.time()}")
print(f"本地时间: {time.localtime()}")

# 随机模块
import random
print(f"\n随机整数 (1-10): {random.randint(1, 10)}")
print(f"随机浮点数 (0-1): {random.random()}")

# 6. 第三方库安装与使用（演示）
print("\n6. 第三方库安装与使用:")
print("安装第三方库的命令:")
print("pip install numpy")
print("pip install pandas")
print("pip install matplotlib")

print("\n使用第三方库的示例:")
print("import numpy as np")
print("import pandas as pd")
print("import matplotlib.pyplot as plt")

# 7. 模块搜索路径
print("\n7. 模块搜索路径:")
import sys
print("Python模块搜索路径:")
for path in sys.path:
    print(f"- {path}")
`}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-cyan-400">3.5 Lambda函数（补充）</h3>
                  <ul className="space-y-3 pl-6 list-disc text-gray-300">
                    <li>匿名函数的定义与使用</li>
                    <li>与 map(), filter(), sorted() 配合使用</li>
                  </ul>
                  <div className="mt-6">
                    <CodeRunner
                      title="Lambda函数示例"
                      initialCode={`# Lambda函数示例

# 1. 基本语法
print("1. 基本语法:")
# 定义一个lambda函数
add = lambda x, y: x + y
print(f"3 + 5 = {add(3, 5)}")

# 计算平方
square = lambda x: x ** 2
print(f"4的平方: {square(4)}")

# 检查是否为偶数
is_even = lambda x: x % 2 == 0
print(f"5是偶数: {is_even(5)}")
print(f"6是偶数: {is_even(6)}")

# 2. 与map()函数配合使用
print("\n2. 与map()函数配合使用:")
# 计算列表中每个元素的平方
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(f"原始列表: {numbers}")
print(f"平方列表: {squared_numbers}")

# 将列表中的字符串转换为大写
fruits = ["apple", "banana", "orange", "grape"]
uppercase_fruits = list(map(lambda x: x.upper(), fruits))
print(f"原始水果列表: {fruits}")
print(f"大写水果列表: {uppercase_fruits}")

# 3. 与filter()函数配合使用
print("\n3. 与filter()函数配合使用:")
# 筛选出列表中的偶数
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(f"原始列表: {numbers}")
print(f"偶数列表: {even_numbers}")

# 筛选出长度大于5的字符串
words = ["apple", "banana", "orange", "grape", "watermelon"]
long_words = list(filter(lambda x: len(x) > 5, words))
print(f"原始单词列表: {words}")
print(f"长度大于5的单词: {long_words}")

# 4. 与sorted()函数配合使用
print("\n4. 与sorted()函数配合使用:")
# 按字符串长度排序
words = ["apple", "banana", "orange", "grape", "watermelon"]
sorted_by_length = sorted(words, key=lambda x: len(x))
print(f"原始单词列表: {words}")
print(f"按长度排序: {sorted_by_length}")

# 按字典的值排序
dict_items = {"apple": 3, "banana": 1, "orange": 4, "grape": 2}
sorted_items = sorted(dict_items.items(), key=lambda x: x[1])
print(f"原始字典: {dict_items}")
print(f"按键值排序: {sorted_items}")

# 5. 作为函数参数
print("\n5. 作为函数参数:")
def apply_operation(x, y, operation):
    """应用操作到两个数"""
    return operation(x, y)

# 使用lambda函数作为参数
result1 = apply_operation(10, 5, lambda x, y: x + y)
result2 = apply_operation(10, 5, lambda x, y: x - y)
result3 = apply_operation(10, 5, lambda x, y: x * y)
result4 = apply_operation(10, 5, lambda x, y: x / y)

print(f"10 + 5 = {result1}")
print(f"10 - 5 = {result2}")
print(f"10 * 5 = {result3}")
print(f"10 / 5 = {result4}")
`}
                    />
                  </div>
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