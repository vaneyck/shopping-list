<template>
  <Page>
    <ActionBar title="Edit Shopping List">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <StackLayout>
      <DockLayout stretchLastChild="false" class="header">
        <StackLayout dock="left" width="65%">
          <Label class="item-name" :text="shoppingList.name" textWrap="true"/>
          <Label class="item-count" :text="numberOfItems"/>
          <Label class="total-cost" :text="totalCost"/>
          <Label class="date-created" :text="shoppingList.dateCreated"/>
        </StackLayout>
        <StackLayout dock="right" width="35%">
          <Button @tap="showEditNameModal">Edit Name</Button>
          <Button @tap="addListItem">Add Item</Button>
        </StackLayout>
      </DockLayout>
      <StackLayout class=content>
        <ListView for="item in shoppingList.items" @itemTap="editListItem">
          <v-template>
            <DockLayout stretchLastChild="false" class="shopping-list-item">
              <Label class="item-name" dock="left" :text="item.name"></Label>
              <Label class="item-price" dock="right" :text="(item.unitPrice * item.unitNumber)"></Label>
            </DockLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
  import _ from "lodash";
  import UpdateShoppingListName from './UpdateShoppingListName';
  import EditShoppingListItem from './EditShoppingListItem';

  export default {
    props: ['listToEditId'],
    computed: {
      shoppingList () {
        return this.$store.getters.getShoppingListById(this.listIdToEdit);
      },
      numberOfItems () {
        let count = this.shoppingList.items.length
        return "Items : " + count;
      },
      totalCost () {
        let total = 0;
        if (this.shoppingList.items.length > 0) {
          total = _.sumBy(this.shoppingList.items, function(o) { return o.unitPrice * o.unitNumber; });
        }
        return "Total Cost : " + total;
      }
    },
    methods: {
      showEditNameModal: function () {
         this.$showModal(UpdateShoppingListName);
      },
      editListItem: function (event) {
        this.$store.dispatch('updateListItemToEdit', event.item.id);
        this.$showModal(EditShoppingListItem);
      },
      addListItem: function () {
        this.$store.dispatch('updateListItemToEdit', null);
        this.$showModal(EditShoppingListItem);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    padding: 10 10 10 20;
    background-color: gray;

    .item-name {
      color: white;
      font-weight: bold;
      font-size: 30;
    }
    .item-count {
      color: white;
      font-size: 20;
    }
    .total-cost {
      color: white;
      font-size: 20;
    }
    .date-created {
      color: white;
      font-size: 10;
    }
  }
  .shopping-list-item {
    padding: 10;
    font-size: 20;

    .item-price {
      font-size: 20;
      color: gray;
    }
  }
</style>