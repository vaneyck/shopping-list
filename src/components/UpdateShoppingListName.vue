<template>
  <Page>
    <StackLayout class="content">
      <TextView v-model="newShoppingListName" hint="Give this shopping list a name" />
      <Button @tap="saveShoppingListName" text="Save"/>
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    data () {
      return {
        newShoppingListName: null
      };
    },
    mounted () {
      this.newShoppingListName = this.shoppingList.name;
    },
    computed: {
      shoppingList () {
        return this.$store.getters.getShoppingListById(this.listIdToEdit);
      },
      listIdToEdit () {
        return this.$store.getters.getListIdToEdit;
      },
    },
    methods: {
      saveShoppingListName: function () {
        this.$store.dispatch('updateShoppingListName', this.newShoppingListName);
      }
    }
  }
</script>

<style lang="scss" scoped>
  Page StackLayout.content {
    width: 70%;
  }
</style>