/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
  
    requires: [
        'MyApp.store.Inventory'
    ],

    title: 'Inventory',
    
   
    store: {
        type: 'inventory',
        
    },

    columns: [{ 
        text: 'Product',
        dataIndex: 'name',
        width: 100,    
        
        cell: {
            userCls: 'productname'
        }
    }, {
        text: 'Category',
        dataIndex: 'category',
        width: 230 
    }, { 
        text: 'InStock',
        dataIndex: 'quantity',
        width: 150 
    }, { 
        text: 'Price',
        dataIndex: 'price',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
