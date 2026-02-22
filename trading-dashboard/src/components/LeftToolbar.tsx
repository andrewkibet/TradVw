'use client';

import { useState } from 'react';
import { ToolbarTool } from '@/types';
import { toolbarTools, TOOLBAR_WIDTH, TOOLBAR_EXPANDED_WIDTH } from '@/utils/mockData';
import { TOOLBAR_WIDTH as TW } from '@/utils/constants';

interface LeftToolbarProps {
  activeTool: string | null;
  onToolChange: (toolId: string) => void;
}

export const LeftToolbar: React.FC<LeftToolbarProps> = ({
  activeTool,
  onToolChange,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 glass border-r transition-all duration-300 ${
        isCollapsed ? 'w-12' : 'w-48'
      }`}
      style={{ top: '64px' }}
    >
      <div className="h-full flex flex-col py-2 px-1">
        {/* Collapse Button */}
        <button
          onClick={toggleCollapse}
          className="icon-button mb-2 justify-center"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? '→' : '←'}
        </button>

        <div className="w-px h-6 bg-border mx-auto my-2"></div>

        {/* Tools */}
        <div className="flex-1 overflow-y-auto space-y-1">
          {toolbarTools.map((tool: ToolbarTool) => (
            <button
              key={tool.id}
              onClick={() => onToolChange(tool.id)}
              className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg transition-colors text-sm font-medium ${
                activeTool === tool.id
                  ? 'bg-primary text-white'
                  : 'text-muted hover:bg-secondary/50 hover:text-foreground'
              }`}
              title={tool.tooltip}
            >
              <span className="text-lg">{tool.icon}</span>
              {!isCollapsed && <span className="flex-1 text-left">{tool.name}</span>}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-border mx-auto my-2"></div>

        {/* Zoom Controls */}
        <div className={`flex ${isCollapsed ? 'flex-col' : 'justify-between'} gap-1`}>
          <button
            className="icon-button flex-1"
            title="Zoom In (Ctrl++)"
          >
            +
          </button>
          <button
            className="icon-button flex-1"
            title="Zoom Out (Ctrl+-)"
          >
            −
          </button>
        </div>

        {/* Reset Zoom */}
        {!isCollapsed && (
          <button
            className="btn-secondary w-full mt-2 text-xs"
            title="Reset Zoom"
          >
            Reset View
          </button>
        )}
      </div>
    </aside>
  );
};
