const state = {
  listToEditId: null,
  shoppingList: [
    {
      id: 1,
      name: 'January Shopping',
      items: [
        { name: 'Banana', price: 300 },
        { name: 'Mango', price: 400 }
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
    // TODO > create shopping list
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
