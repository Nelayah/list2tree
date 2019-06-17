import list2tree from '../lib';
import {
  mockList,
  mockTree01,
  mockTree02
} from '../mock'

describe('It converts the list structure to the tree structure.', () => {
  it('It will be equal to the target tree structure', () => {
    const getTreeData = list2tree({idKey: 'id', parentIdKey: 'parentId'});
    expect(JSON.stringify(getTreeData(mockList))).toBe(JSON.stringify(mockTree01));
  });

  it('It will be equal to the target tree structure with new keys', () => {
    const getTreeData = list2tree({idKey: 'id', parentIdKey: 'parentId', newKey: {key: 'id', value: 'id', title: 'name'}});
    expect(JSON.stringify(getTreeData(mockList))).toBe(JSON.stringify(mockTree02));
  });
});