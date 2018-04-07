import _ from "lodash";

const state = {
  user: null,
  listToEditId: null,
  shoppingList: [
    {
      id: "asdas2312",
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
    }
  ],
};

const mutations = {
  addShoppingList (state, newList) {
    state.shoppingList.push(newList);
    state.listToEditId = newList.id;
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
  },
  updateUser (state, user) {
    state.user = user;
  }
};

const getters = {
  getUser (state) {
    return state.user;
  },
  getListIdToEdit (state) {
    return state.listToEditId;
  },
  getAllShoppingLists (state) {
    return state.shoppingList;
  },
  getShoppingListById: (state) => (id) => {
    return state.shoppingList.find(list => list.id === id);
  }
}

const actions = {
  addShoppingList (context, newList) {
    context.commit('addShoppingList', newList);
  },
  deleteShoppingList: ({commit}) => commit('deleteShoppingList'),
  updateUser (context, user) {
    context.commit('updateUser', user);
  },
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
