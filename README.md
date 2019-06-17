# list2tree

It converts the list structure to the tree structure.

## Install

> npm install list2tree --save

## Usage

### Demo 01

```javascript
import list2tree from 'list2tree';

const getTreeData = list2tree({idKey: 'id', parentIdKey: 'parentId'});
const data = getTreeData([
    {id: 'A1', parentId: null, name: 'Title_A1'},
    {id: 'A2', parentId: 'A1', name: 'Title_A2'},
    {id: 'A3', parentId: null, name: 'Title_A3'}
]);
console.log(data);
```

#### Output
```javascript
[
  {
    "id": "A1",
    "parentId": null,
    "name": "Title_A1",
    "children": [
      {
        "id": "A2",
        "parentId": "A1",
        "name": "Title_A2"
      }
    ]
  },
  {
    "id": "A3",
    "parentId": null,
    "name": "Title_A3"
  }
]
```

### Demo 02

```javascript
import list2tree from 'list2tree';

const getTreeData = list2tree({idKey: 'id', parentIdKey: 'parentId', , newKey: {key: 'id', value: 'id', title: 'name'}});
const data = getTreeData([
    {id: 'A1', parentId: null, name: 'Title_A1'},
    {id: 'A2', parentId: 'A1', name: 'Title_A2'},
    {id: 'A3', parentId: null, name: 'Title_A3'}
]);
console.log(data);
```

#### Output
```javascript
[
  {
    "id": "A1",
    "parentId": null,
    "name": "Title_A1",
    "key": "A1",
    "value": "A1",
    "title": "Title_A1",
    "children": [
      {
        "id": "A2",
        "parentId": "A1",
        "name": "Title_A2",
        "key": "A2",
        "value": "A2",
        "title": "Title_A2"
      }
    ]
  },
  {
    "id": "A3",
    "parentId": null,
    "name": "Title_A3",
    "key": "A3",
    "value": "A3",
    "title": "Title_A3"
  }
]
```