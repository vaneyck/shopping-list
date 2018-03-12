<template>
  <Page>
    <StackLayout class="content">
      <TextField :text="shoppingList.name" hint="Give this shopping list a name" />
      <Button text="Save"/>
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
      },
    }
  }
</script>

<style lang="scss" scoped>
  Page StackLayout.content {
    width: 70%;
  }
</style>