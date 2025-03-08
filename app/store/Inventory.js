Ext.define('MyApp.store.Inventory', {
    extend: 'Ext.data.Store',

    alias: 'store.inventory',

    model: 'MyApp.model.Inventory',

    data: { items: [
        { name: 'Cheese', category: "Food", quantity: "100" , price: "120" },
        { name: 'iPhone 16 Pro',     category: "Electronics",  quantity: "10" , price: "100000"},
        { name: 'LG TV',   category: "Electronics", quantity: "20" , price: "50000"},
        { name: 'Kajal',     category: "Cosmetic",    quantity: "50" , price: "170"},
        { name: 'Parle G',     category: "Food",   quantity: "500", price: "15"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
