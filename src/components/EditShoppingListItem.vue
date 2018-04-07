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
    mounted () {
      if (this.listItemToEditId) {
        let item = this.shoppingList.items.find(item => item.id === this.listItemToEditId);
        if (item) {
          this.itemName = item.name;
          this.unitPrice = item.unitPrice;
          this.unitNumber = item.unitNumber;
        }
      }
    },
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
        let itemToSave = {
          name: this.itemName,
          unitPrice: parseInt(this.unitPrice),
          unitNumber: parseInt(this.unitNumber),
          shoppingListId: this.listIdToEdit
        }
        if (this.listItemToEditId) {
          // Edit existing item
          shoppingListItemsReference.doc(this.listItemToEditId).update(itemToSave);
          itemToSave.id = this.listItemToEditId;
          this.$store.dispatch('updateItemInShoppingList', itemToSave);
          this.$modal.close();
        } else {
          // Add new list item
          shoppingListItemsReference.add(itemToSave).then( documentRef => {
            itemToSave.id = documentRef.id;
            this.$store.dispatch('addItemInShoppingList', itemToSave);
            this.$modal.close();
          });
        }
      }
    },
    computed: {
      shoppingList () {
        return this.$store.getters.getShoppingListById(this.listIdToEdit);
      },
      listItemToEditId () {
        return this.$store.getters.getListItemIdToEdit;
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