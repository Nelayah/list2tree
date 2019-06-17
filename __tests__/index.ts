import list2tree from '../lib';

describe('It converts the list structure to the tree structure.', () => {
  const mockList = [
    {id: 'A1', parentId: null, name: 'A1'},
    {id: 'A2', parentId: 'A1', name: 'A2'},
    {id: 'A3', parentId: null, name: 'A3'},
    {id: 'B1', parentId: 'B0', name: 'B1'},
    {id: 'B2', parentId: null, name: 'B2'},
    {id: 'B3', parentId: 'B2', name: 'B3'}
  ];
  const mockTree = [
    {
      "id": "A1",
      "parentId": null,
      "name": "A1",
      "title": "A1",
      "key": "A1",
      "value": "A1",
      "children": [
        {
          "id": "A2",
          "parentId": "A1",
          "name": "A2",
          "title": "A2",
          "key": "A2",
          "value": "A2"
        }
      ]
    },
    {
      "id": "A3",
      "parentId": null,
      "name": "A3",
      "title": "A3",
      "key": "A3",
      "value": "A3"
    },
    {
      "id": "B1",
      "parentId": "B0",
      "name": "B1",
      "title": "B1",
      "key": "B1",
      "value": "B1"
    },
    {
      "id": "B2",
      "parentId": null,
      "name": "B2",
      "title": "B2",
      "key": "B2",
      "value": "B2",
      "children": [
        {
          "id": "B3",
          "parentId": "B2",
          "name": "B3",
          "title": "B3",
          "key": "B3",
          "value": "B3"
        }
      ]
    }
  ];

  it('It will be equal to the target tree structure', async () => {
    const getTreeData = list2tree({idKey: 'id', parentIdKey: 'parentId', nameKey: 'name'});
    expect(JSON.stringify(getTreeData(mockList))).toBe(JSON.stringify(mockTree));
  });
});