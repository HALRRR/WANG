import React, { useState, useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { Play, ChevronDown, ChevronUp, RefreshCw, X } from 'lucide-react';

const FloatingCodeRunner: React.FC = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const pyodideRef = useRef<any>(null);
  const stdoutRef = useRef<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  // 初始化Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      if (!pyodideRef.current) {
        try {
          // 动态加载Pyodide CDN
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/pyodide.js';
          script.async = true;
          script.onload = async () => {
            // @ts-ignore
            pyodideRef.current = await window.loadPyodide({
              indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/',
            });
            
            // 重定向标准输出
            pyodideRef.current.globals.set('print', (text: any) => {
              stdoutRef.current += String(text) + '\n';
            });
          };
          document.body.appendChild(script);
        } catch (error) {
          console.error('Failed to load Pyodide:', error);
          setOutput('Failed to load Python runtime.');
        }
      }
    };

    loadPyodide();
  }, []);

  // 运行代码
  const runCode = async () => {
    if (!pyodideRef.current) {
      setOutput('Python runtime is loading...');
      return;
    }

    setIsRunning(true);
    setOutput('');
    stdoutRef.current = '';

    try {
      // 运行代码
      await pyodideRef.current.runPythonAsync(code);
      setOutput(stdoutRef.current || '代码执行成功，无输出');
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  // 清除代码和输出
  const clearCode = () => {
    setCode('');
    setOutput('');
  };

  // 鼠标按下事件
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // 鼠标移动事件
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  // 鼠标释放事件
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 监听鼠标事件
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startPos]);

  return (
    <div
      ref={containerRef}
      className="fixed right-4 bottom-4 z-50 w-80 md:w-96"
      style={{
        position: 'fixed',
        right: `${position.x}px`,
        bottom: `${position.y}px`,
        zIndex: 50,
        width: '320px',
        maxWidth: '90vw',
      }}
    >
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
        {/* 标题栏 */}
        <div 
          className="flex justify-between items-center p-4 bg-gray-700 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center">
            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-medium text-white">Python练习器</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearCode();
              }}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              title="清除代码"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearCode();
              }}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              title="重置代码"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            {isCollapsed ? (
              <ChevronUp className="w-5 h-5 text-gray-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-300" />
            )}
          </div>
        </div>

        {/* 代码编辑器和输出区域 */}
        {!isCollapsed && (
          <div className="p-4">
            {/* 代码编辑器 */}
            <div className="mb-4">
              <CodeMirror
                value={code}
                onChange={(value) => setCode(value)}
                extensions={[python(), oneDark]}
                className="rounded-lg"
                style={{
                  height: '200px',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  overflow: 'auto',
                }}
              />
            </div>

            {/* 控制按钮 */}
            <div className="flex justify-between mb-4">
              <button
                onClick={runCode}
                disabled={isRunning}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center ${
                  isRunning
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                }`}
              >
                <Play className="w-4 h-4 mr-2" />
                {isRunning ? '运行中...' : '运行代码'}
              </button>
              <button
                onClick={clearCode}
                className="px-4 py-2 rounded-lg font-medium transition-all flex items-center bg-gray-600 text-gray-300 hover:bg-gray-500"
              >
                <X className="w-4 h-4 mr-2" />
                清除
              </button>
            </div>

            {/* 输出区域 */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">输出：</h4>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap max-h-40 overflow-auto">{output}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCodeRunner;