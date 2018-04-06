import _ from "lodash";

const state = {
  listToEditId: null,
  shoppingList: [
    {
      id: 1,
      dateCreated: new Date(),
      name: 'January Shopping',
      items: [
        { id:1, name: 'Banana', price: 303450 },
        { id:2, name: 'Mango', price: 400 },
        { id:3, name: 'Tree House', price: 23 },
        { id:4, name: 'Television', price: 40 },
        { id:5, name: 'Chair', price: 60 },
        { id:6, name: 'Table', price: 502 },
        { id:7, name: 'Carpet', price: 23 },
        { id:8, name: 'Jacket', price: 234 },
        { id:9, name: 'Car Keys', price: 123 },
        { id:10, name: 'Pillow', price: 34534534 },
      ]
    },
    {
      id: 2,
      dateCreated: new Date(),
      name: 'Random Shopping',
      items: [
        { id: 1, name: 'Chair', price: 20 },
        { id: 2, name: 'TV', price: 40000 }
      ]
    },
    {
      id: 3,
      dateCreated: new Date(),
      name: 'Road Trip Things',
      items: []
    },
    {
      id: 4,
      dateCreated: new Date(),
      name: 'Office Items',
      items: []
    }
  ],
};

const mutations = {
  addShoppingList (state) {
    let randomId = _.now();
    var newList = {
      id: randomId,
      dateCreated: new Date(),
      name: 'New List',
      items: []
    };
    state.shoppingList.push(newList);
    state.listToEditId = randomId;
  },
  deleteShoppingList (state) {
    // TODO > delete shopping list
  },
  updateListToEditId (state, listId) {
    state.listToEditId = listId;
  },
  updateShoppingListName (state, shoppingListName) {
    let shoppingList = state.shoppingList.find(list => list.id === parseInt(state.listToEditId));
    shoppingList.name = shoppingListName;
  }
};

const getters = {
  getListIdToEdit (state) {
    return state.listToEditId;
  },
  getAllShoppingLists (state) {
    return state.shoppingList;
  },
  getShoppingListById: (state) => (id) => {
    return state.shoppingList.find(list => list.id === parseInt(id));
  }
}

const actions = {
  addShoppingList: ({commit}) => commit('addShoppingList'),
  deleteShoppingList: ({commit}) => commit('deleteShoppingList'),
  updateShoppingListName (context, shoppingListName) {
    context.commit('updateShoppingListName', shoppingListName);
  },
  updateListToEditId (context, listId) {
    context.commit('updateListToEditId', listId);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
};
