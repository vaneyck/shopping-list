<template>
  <Page>
    <StackLayout class="content">
      <TextField hint="Item Name" />
      <TextField hint="Unit Price" />
      <TextField hint="Unit Number" />
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