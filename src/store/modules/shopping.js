import _ from "lodash";

const state = {
  user: null,
  listToEditId: null,
  listItemToEditId: null,
  shoppingList: [],
};

const mutations = {
  addShoppingList (state, newList) {
    state.shoppingList.push(newList);
  },
  deleteShoppingList (state) {
    // TODO > delete shopping list
  },
  updateListItemToEdit (state, listItemId) {
    state.listItemToEditId = listItemId;
  },
  updateShoppingListName (state, shoppingListName) {
    let shoppingList = state.shoppingList.find(list => list.id === state.listToEditId);
    shoppingList.name = shoppingListName;
  },
  addItemInShoppingList (state, itemData) {
    let shoppingList = state.shoppingList.find(list => list.id === state.listToEditId);
    shoppingList.items.push(itemData);
  },
  updateItemInShoppingList (state, itemData) {
    let shoppingList = state.shoppingList.find(list => list.id === state.listToEditId);
    let shoppingListItem = shoppingList.items.find(item => item.id === state.listItemToEditId);
    shoppingListItem.name = itemData.name;
    shoppingListItem.unitPrice = itemData.unitPrice;
    shoppingListItem.unitNumber = itemData.unitNumber;
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
  getListItemIdToEdit (state) {
    return state.listItemToEditId;
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
  },
  updateListItemToEdit (context, listItemId) {
    context.commit('updateListItemToEdit', listItemId);
  },
  updateItemInShoppingList (context, itemData) {
    context.commit('updateItemInShoppingList', itemData);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
};
