import React, { useState, useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { Play, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';

const CodeRunner: React.FC<{
  initialCode?: string;
  title?: string;
  className?: string;
}> = ({ initialCode = '', title = '代码运行器', className = '' }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pyodideRef = useRef<any>(null);
  const stdoutRef = useRef<string>('');

  // 初始化Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      if (!pyodideRef.current) {
        try {
          const pyodide = await import('pyodide');
          pyodideRef.current = await pyodide.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
          });
          
          // 重定向标准输出
          pyodideRef.current.globals.set('print', (text: any) => {
            stdoutRef.current += text + '\n';
          });
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

  // 重置代码
  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
  };

  return (
    <div className={`bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden ${className}`}>
      {/* 标题栏 */}
      <div 
        className="flex justify-between items-center p-4 bg-gray-700 cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center">
          <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              resetCode();
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
          </div>

          {/* 输出区域 */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2">输出：</h4>
            <pre className="text-sm text-gray-300 whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeRunner;