export const mockList = [
  {id: 'A1', parentId: null, name: 'Title_A1'},
  {id: 'A2', parentId: 'A1', name: 'Title_A2'},
  {id: 'A3', parentId: null, name: 'Title_A3'},
  {id: 'B1', parentId: 'B0', name: 'Title_B1'},
  {id: 'B2', parentId: null, name: 'Title_B2'},
  {id: 'B3', parentId: 'B2', name: 'Title_B3'}
];
export const mockTree01 = [
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
  },
  {
    "id": "B1",
    "parentId": "B0",
    "name": "Title_B1"
  },
  {
    "id": "B2",
    "parentId": null,
    "name": "Title_B2",
    "children": [
      {
        "id": "B3",
        "parentId": "B2",
        "name": "Title_B3"
      }
    ]
  }
];

export const mockTree02 = [
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
  },
  {
    "id": "B1",
    "parentId": "B0",
    "name": "Title_B1",
    "key": "B1",
    "value": "B1",
    "title": "Title_B1"
  },
  {
    "id": "B2",
    "parentId": null,
    "name": "Title_B2",
    "key": "B2",
    "value": "B2",
    "title": "Title_B2",
    "children": [
      {
        "id": "B3",
        "parentId": "B2",
        "name": "Title_B3",
        "key": "B3",
        "value": "B3",
        "title": "Title_B3"
      }
    ]
  }
]