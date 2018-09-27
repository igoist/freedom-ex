import React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

class TreeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: [],
    };
    this.onExpand = this.onExpand.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onExpand(expandedKeys) {
    this.setState({ expandedKeys });
  }

  onSelect(selectedKeys) {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];

    if (expandedKeys.includes(key)) {
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key)
      });
    } else {
      this.setState({ expandedKeys: [...expandedKeys, key] });
    }
  }

  render() {
    return (
      <Tree
        expandedKeys={ this.state.expandedKeys }
        selectedKeys={ [] }
        onExpand={ this.onExpand }
        onSelect={ this.onSelect }
      >
        <TreeNode title='parent 1' key='0-0'>
          <TreeNode title='leaf' key='0-0-0' />
          <TreeNode title='leaf' key='0-0-1' />
          <TreeNode title='parent 1-1' key='0-0-2'>
            <TreeNode title='leaf' key='0-0-2-0' />
            <TreeNode title='leaf' key='0-0-2-1' />
          </TreeNode>
          <TreeNode title='parent 1-2' key='0-0-3'>
            <TreeNode title='leaf' key='0-0-3-0' />
            <TreeNode title='leaf' key='0-0-3-1' />
          </TreeNode>
        </TreeNode>
        <TreeNode title='parent 2' key='0-1'>
          <TreeNode title='leaf' key='0-1-0' />
          <TreeNode title='leaf' key='0-1-1' />
          <TreeNode title='leaf' key='0-1-2' />
        </TreeNode>
      </Tree>
    );
  }
}

export default TreeApp;
