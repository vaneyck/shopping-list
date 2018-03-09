<template>
  <Page>
    <ActionBar title="Shopping List" />
    <StackLayout class="content">
      <Button>Add Shopping List</Button>
      <ListView :items="shoppingList" @itemTap="editShoppingList">
        <v-template>
          <StackLayout class="shopping-list">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
  import { mapActions } from 'vuex';
  import EditShoppingList from './EditShoppingList';

  export default {
    computed: {
      shoppingList () {
        return this.$store.getters.getAllShoppingLists;
      }
    },
    methods: {
      ...mapActions([
        'addShoppingList',
        'deleteShoppingList',
      ]),
      editShoppingList: function (event) {
        this.$store.dispatch("updateListToEditId", event.item.id);
        this.$navigateTo(EditShoppingList);
      }
    }
  };
</script>

<style scoped>
  Button {
    background-color: #42b883;
    width: 100%;
  }
  .shopping-list {
    padding: 10;
    font-size: 24;
  }
</style>