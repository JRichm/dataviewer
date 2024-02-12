"use client"

import React, { useState } from 'react';

const JsonViewer = ({ data, name }) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setCollapsed(!collapsed);
    };
  
    const renderValue = (value) => {
      if (typeof value === 'object') {
        return <JsonViewer data={value} />;
      }
      return <span>{String(value)}</span>;
    };
  
    const renderProperty = (key, value) => {
      return (
        <div key={key} style={{ marginLeft: '20px' }}>
          <span>{key}:</span>
          {renderValue(value)}
        </div>
      );
    };
  
    const renderObject = (obj) => {
      const keys = Object.keys(obj);
      return keys.map((key) => renderProperty(key, obj[key]));
    };
  
    const renderArray = (arr) => {
      return arr.map((item, index) => (
        <div key={index} style={{ marginLeft: '20px' }}>
          {renderValue(item)}
        </div>
      ));
    };
  
    return (
      <div className='flex flex-row'>
        <div className='flex flex-row' style={{ cursor: 'pointer' }} onClick={toggleCollapse}>
          {collapsed ? '▶' : '▼'} {name}
        </div>
        {!collapsed && (
          <div style={{ marginLeft: '20px' }}>
            {Array.isArray(data) ? renderArray(data) : renderObject(data)}
          </div>
        )}
      </div>
    );
  };

export default JsonViewer;