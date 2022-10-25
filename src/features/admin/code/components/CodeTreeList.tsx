import React from 'react';
import { Tree } from 'antd';
import PropTypes from 'prop-types';


const CodeTreeList = (dataSource: any, codeSelectHandler: any, selectedKeys: any) => {
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

// CodeTreeList.propTypes = {
//   dataSource: PropTypes.object,
//   codeSelectHandler: PropTypes.func.isRequired,
//   selectedKeys: PropTypes.arrayOf(PropTypes.string)
// }

export default CodeTreeList;
