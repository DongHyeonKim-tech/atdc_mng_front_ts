import React from 'react';
import { Tree } from 'antd';

const CodeTreeList = ({dataSource, codeSelectHandler, selectedKeys}: {dataSource: {children: any}, codeSelectHandler: any, selectedKeys: Array<string> | undefined}) => {
  return (
    <div
    // style={{ border: "1px solid #ddd" }}
    >
      {dataSource && (
        <Tree
          style={{ height: '70vh', overflowY: 'auto' }}
          selectedKeys={selectedKeys}
          treeData={dataSource.children}
          showLine={true}
          onSelect={codeSelectHandler}
        />
      )}
    </div>
  );
};


export default CodeTreeList;
