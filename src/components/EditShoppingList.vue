<template>
  <Page>
    <ActionBar title="Edit Shopping List" />
    <StackLayout>
      <TextField :text="shoppingList.name" hint="Enter shopping list name" />
      <Label text="Items"/>
      <ListView :items="shoppingList.items">
        <v-template>
          <StackLayout class="shopping-list-item">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    props : ['shoppingListId'],
    computed: {
      shoppingList () {
        return this.$store.getters.getShoppingListById(this.shoppingListId);
      }
    }
  }
</script>

<style scoped>
  .shopping-list-item {
    padding: 10;
    font-size: 20;
  }
</style>