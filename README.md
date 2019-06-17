# list2tree

It converts the list structure to the tree structure.

## Install

> npm install list2tree --save

## Usage

```javascript
import list2tree from 'list2tree';

const getTreeData = list2tree({idKey: 'id', parentIdKey: 'parentId', nameKey: 'name'});
const data = getTreeData([
    {id: 'A1', parentId: null, name: 'A1'},
    {id: 'A2', parentId: 'A1', name: 'A2'},
    {id: 'A3', parentId: null, name: 'A3'},
]);
console.log(data);
```

#### Output
```javascript
[{
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
  }
}]
```