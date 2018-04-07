<template>
  <Page>
    <StackLayout class="content">
      <TextView v-model="newShoppingListName" hint="Give this shopping list a name" />
      <Button @tap="saveShoppingListName" text="Save"/>
    </StackLayout>
  </Page>
</template>

<script>
  import firebase from 'nativescript-plugin-firebase';
  const shoppingListReference = firebase.firestore.collection("shopping_list");

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
        shoppingListReference.doc(this.listIdToEdit).update({
          name: this.newShoppingListName
        });
        this.$store.dispatch('updateShoppingListName', this.newShoppingListName);
        this.$modal.close();
      }
    }
  }
</script>

<style lang="scss" scoped>
  Page StackLayout.content {
    width: 70%;
  }
</style>