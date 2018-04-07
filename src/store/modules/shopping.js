import _ from "lodash";

const state = {
  user: null,
  listToEditId: null,
  shoppingList: [],
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
    let shoppingList = state.shoppingList.find(list => list.id === state.listToEditId);
    shoppingList.name = shoppingListName;
  },
  addItemInShoppingList (state, itemData) {
    let shoppingList = state.shoppingList.find(list => list.id === state.listToEditId);
    shoppingList.items.push(itemData);
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
  addItemInShoppingList (context, itemData) {
    context.commit('addItemInShoppingList', itemData);
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
