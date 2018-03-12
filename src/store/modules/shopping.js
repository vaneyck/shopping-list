import _ from "lodash";

const state = {
  listToEditId: null,
  shoppingList: [
    {
      id: 1,
      name: 'January Shopping',
      items: [
        { name: 'Banana', price: 303450 },
        { name: 'Mango', price: 400 },
        { name: 'Tree House', price: 23 },
        { name: 'Television', price: 40 },
        { name: 'Chair', price: 60 },
        { name: 'Table', price: 502 },
        { name: 'Carpet', price: 23 },
        { name: 'Jacket', price: 234 },
        { name: 'Car Keys', price: 123 },
        { name: 'Pillow', price: 34534534 },
      ]
    },
    {
      id: 2,
      name: 'Random Shopping',
      items: [
        { name: 'Chair', price: 20 },
        { name: 'TV', price: 40000 }
      ]
    },
    { id: 3, name: 'Road Trip Things', items: [] },
    { id: 4, name: 'Office Items', items: [] }
  ],
};

const mutations = {
  addShoppingList (state) {
    let randomId = _.now();
    var newList = {
      id: randomId,
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
    console.log(id);
    return state.shoppingList.find(list => list.id === parseInt(id));
  }
}

const actions = {
  addShoppingList: ({commit}) => commit('addShoppingList'),
  deleteShoppingList: ({commit}) => commit('deleteShoppingList'),
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
