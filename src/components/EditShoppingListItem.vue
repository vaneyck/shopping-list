<template>
  <Page>
    <StackLayout class="content">
      <TextField v-model="itemName" hint="Item Name" />
      <TextField v-model="unitPrice" keyboardType="number" hint="Unit Price" />
      <TextField v-model="unitNumber" keyboardType="number" hint="Unit Number" />
      <Button @tap="saveShoppingListItem" text="Save"/>
    </StackLayout>
  </Page>
</template>

<script>
  import firebase from 'nativescript-plugin-firebase';
  const shoppingListItemsReference = firebase.firestore.collection("shopping_list_item");

  export default {
    data () {
      return {
        itemName: null,
        unitPrice: null,
        unitNumber: null
      }
    },
    methods: {
      saveShoppingListItem: function () {
        //TODO Error handling i.e. no input, bad values
        let newItem = {
          name: this.itemName,
          unitPrice: parseInt(this.unitPrice),
          unitNumber: parseInt(this.unitNumber),
          shoppingListId: this.listIdToEdit
        }
        shoppingListItemsReference.add(newItem).then( documentRef => {
          newItem.id = documentRef.id;
          this.$store.dispatch('addItemInShoppingList', newItem);
          this.$modal.close();
        });
      }
    },
    computed: {
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