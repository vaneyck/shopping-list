<template>
  <Page>
    <ActionBar title="Edit Shopping List">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <StackLayout>
      <StackLayout class="header">
        <Label class="item-name" :text="shoppingList.name"/>
      </StackLayout>
      <StackLayout class=content>
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
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    computed: {
      shoppingList () {
        return this.$store.getters.getShoppingListById(this.listIdToEdit);
      },
      listIdToEdit () {
        return this.$store.getters.getListIdToEdit;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 100;
    padding: 10 0 10 20;
    background-color: blue;
    vertical-align: middle;

    .item-name {
      color: white;
      font-weight: bold;
      font-size: 30;
    }
  }
  .shopping-list-item {
    padding: 10;
    font-size: 20;
  }
</style>