<template>
  <Page>
    <ActionBar title="Shopping List" />
    <StackLayout class="content">
      <Button @tap="createNewShoppingList">Add Shopping List</Button>
      <ListView for="item in shoppingList" @itemTap="editShoppingList">
        <v-template>
          <StackLayout class="shopping-list">
            <DockLayout stretchLastChild="false">
              <Label :text="item.name" textWrap="true" dock="left"></Label>
              <Label class="item-count" :text="item.items.length" textWrap="true" dock="right"></Label>
            </DockLayout>
            <Label class="date-created" :text="item.dateCreated"></Label>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
  import { mapActions } from 'vuex';
  import EditShoppingList from './EditShoppingList';
  import firebase from 'nativescript-plugin-firebase';

  const shoppingListReference = firebase.firestore.collection("shopping_list");
  const shoppingListItemsReference = firebase.firestore.collection("shopping_list_item");

  export default {
    mounted () {
      firebase.login({
        type: firebase.LoginType.ANONYMOUS,
        }).then(
          (user) => {
            // Retrieve logged in user
            console.log(user);
            this.$store.dispatch("updateUser", user);

            // Retrieve all shopping lists
            const shoppingListCollection = shoppingListReference.where('owner', '==', this.user.uid);
            shoppingListCollection.get().then( shoppingListSnapshot => {
              shoppingListSnapshot.forEach( doc => {
                var docData = doc.data()
                docData.id = doc.id;
                docData.items = [];
                console.log(`Retrieved List ${doc.id} : ${docData.name}`);
                const shoppingListItemCollection = shoppingListItemsReference.where('shoppingListId', '==', docData.id);
                shoppingListItemCollection.get().then ( shoppingListItemsSnapshot => {
                  shoppingListItemsSnapshot.forEach ( itemSnapshot => {
                    var itemData = itemSnapshot.data();
                    itemData.id =itemSnapshot.id;
                    console.log(`Retrieved Item ${itemData.id} : ${itemData.name}`);
                    docData.items.push(itemData);
                  });
                  this.$store.dispatch('addShoppingList', docData);
                });
              });
            }); 
          },
          (errorMessage) => {
            console.log(errorMessage);
          }
        );  
    },
    computed: {
      shoppingList () {
        return this.$store.getters.getAllShoppingLists;
      },
      user () {
        return this.$store.getters.getUser;
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
      },
      createNewShoppingList: function () {
        var newList = {
          name: 'New List',
          dateCreated: new Date(),
          owner: this.user.uid,
          items: []
        }
        shoppingListReference.add(newList).then( documentRef => {
          newList.id = documentRef.id
          this.$store.dispatch('addShoppingList', newList);
          this.$navigateTo(EditShoppingList);
        })
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
  .shopping-list .item-count {
    font-size: 20;
    color: gray;
  }
  .shopping-list .date-created {
    font-size: 10;
    color: gray;
  }
</style>