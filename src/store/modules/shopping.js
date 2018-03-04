const state = {
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
};

const getters = {
  getShoppingList () {
    return state.shoppingList;
  }
}

const actions = {
  addShoppingList: ({commit}) => commit('addShoppingList'),
  deleteShoppingList: ({commit}) => commit('deleteShoppingList'),
};

export default {
  state,
  mutations,
  getters,
  actions,
};
