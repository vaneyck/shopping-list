<template>
  <StackLayout>
    <Button>Add Shopping List</Button>
    <ListView :items="shoppingList">
      <v-template>
        <StackLayout class="shopping-list">
          <Label :text="item.name"></Label>
        </StackLayout>
      </v-template>
    </ListView>
  </StackLayout>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      shoppingList () {
        return this.$store.getters.getShoppingList;
      }
    },
    methods: mapActions([
      'addShoppingList',
      'deleteShoppingList',
    ]),
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