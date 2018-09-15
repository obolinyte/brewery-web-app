const beers = [
    {
      name: 'Angular Stout',
      style: 'Stout',
      alcohol: '8.2',
      price: '1.78',
      img: 'product1.svg'
    },
    {
      name: 'Backbone Porter',
      style: 'Porter',
      alcohol: '4.7',
      price: '2.41',
      img: 'product5.svg'
    },
    {
      name: 'DHTMLX Indian Pale Ale',
      style: 'Indian Pale Ale',
      alcohol: '4.6',
      price: '2.04',
      img: 'product3.svg'
    },
    {
      name: 'Dojo Porter',
      style: 'Porter',
      alcohol: '8.0',
      price: '1.43',
      img: 'product3.svg'
    },
    {
      name: 'Ember Pilsner',
      style: 'Pilsner',
      alcohol: '5.0',
      price: '2.57',
      img: 'product7.svg'
    },
    {
      name: 'Enyo American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '7.0',
      price: '1.60',
      img: 'product4.svg'
    },
    {
      name: 'Ext Stout',
      style: 'Stout',
      alcohol: '3.9',
      price: '1.61',
      img: 'product1.svg'
    },
    {
      name: 'jQuery American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '7.5',
      price: '3.22',
      img: 'product2.svg'
    },
    {
      name: 'Knockout Porter',
      style: 'Porter',
      alcohol: '5.1',
      price: '3.35',
      img: 'product3.svg'
    },
    {
      name: 'MooTools Porter',
      style: 'Porter',
      alcohol: '5.2',
      price: '1.38',
      img: 'product6.svg'
    },
    {
      name: 'React Porter',
      style: 'Porter',
      alcohol: '6.4',
      price: '1.79',
      img: 'product9.svg'
    },
    {
      name: 'OpenUI5 Porter',
      style: 'Porter',
      alcohol: '7.8',
      price: '1.46',
      img: 'product5.svg'
    },
    {
      name: 'qooxdoo Stout',
      style: 'Stout',
      alcohol: '5.7',
      price: '2.26',
      img: 'product2.svg'
    },
    {
      name: 'Vue Pilsner',
      style: 'Pilsner',
      alcohol: '4.0',
      price: '2.56',
      img: 'product9.svg'
    },
    {
      name: 'Wakanda Stout',
      style: 'Stout',
      alcohol: '4.5',
      price: '2.58',
      img: 'product1.svg'
    },
    {
      name: 'Webix Stout',
      style: 'Stout',
      alcohol: '6.9',
      price: '2.28',
      img: 'product1.svg'
    },
    {
      name: 'ZX European Lager',
      style: 'European Lager',
      alcohol: '7.5',
      price: '1.58',
      img: 'product9.svg'
    },
    {
      name: 'MobX American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '7.7',
      price: '1.81',
      img: 'product9.svg'
    },
    {
      name: 'Mercury American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '5.2',
      price: '1.89',
      img: 'product1.svg'
    },
    {
      name: 'WebRX Pilsner',
      style: 'Pilsner',
      alcohol: '7.4',
      price: '2.21',
      img: 'product7.svg'
    },
    {
      name: 'Deku American Lager',
      style: 'American Lager',
      alcohol: '7.5',
      price: '2.52',
      img: 'product1.svg'
    },
    {
      name: 'Riot Stout',
      style: 'Stout',
      alcohol: '7.9',
      price: '2.99',
      img: 'product2.svg'
    },
    {
      name: 'Mithril European Lager',
      style: 'European Lager',
      alcohol: '3.6',
      price: '3.34',
      img: 'product6.svg'
    },
    {
      name: 'Polymer Indian Pale Ale',
      style: 'Indian Pale Ale',
      alcohol: '4.5',
      price: '2.33',
      img: 'product4.svg'
    },
    {
      name: 'D3 Indian Pale Ale',
      style: 'Indian Pale Ale',
      alcohol: '4.6',
      price: '3.22',
      img: 'product9.svg'
    },
    {
      name: 'Aurelia European Lager',
      style: 'European Lager',
      alcohol: '6.1',
      price: '3.59',
      img: 'product7.svg'
    },
    {
      name: 'Stapes Porter',
      style: 'Porter',
      alcohol: '4.2',
      price: '3.31',
      img: 'product3.svg'
    },
    {
      name: 'Stimulus European Lager',
      style: 'European Lager',
      alcohol: '4.7',
      price: '2.66',
      img: 'product7.svg'
    },
    {
      name: 'NativeScript Porter',
      style: 'Porter',
      alcohol: '6.0',
      price: '3.65',
      img: 'product3.svg'
    },
    {
      name: 'Relay European Lager',
      style: 'European Lager',
      alcohol: '4.9',
      price: '1.98',
      img: 'product7.svg'
    },
    {
      name: 'Cycle Porter',
      style: 'Porter',
      alcohol: '5.0',
      price: '2.58',
      img: 'product8.svg'
    },
    {
      name: 'Babylon American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '6.1',
      price: '2.18',
      img: 'product2.svg'
    },
    {
      name: 'Flight European Lager',
      style: 'European Lager',
      alcohol: '7.8',
      price: '1.99',
      img: 'product4.svg'
    },
    {
      name: 'jEli Indian Pale Ale',
      style: 'Indian Pale Ale',
      alcohol: '7.0',
      price: '1.15',
      img: 'product1.svg'
    },
    {
      name: 'KickOff Stout',
      style: 'Stout',
      alcohol: '8.2',
      price: '1.54',
      img: 'product4.svg'
    },
    {
      name: 'R American Lager',
      style: 'American Lager',
      alcohol: '7.5',
      price: '1.54',
      img: 'product8.svg'
    },
    {
      name: 'Truck American Lager',
      style: 'American Lager',
      alcohol: '4.9',
      price: '1.28',
      img: 'product5.svg'
    },
    {
      name: 'T3 American Lager',
      style: 'American Lager',
      alcohol: '4.4',
      price: '2.52',
      img: 'product3.svg'
    },
    {
      name: 'Snack Indian Pale Ale',
      style: 'Indian Pale Ale',
      alcohol: '6.6',
      price: '3.02',
      img: 'product3.svg'
    },
    {
      name: 'Zepto American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '6.4',
      price: '2.75',
      img: 'product6.svg'
    },
    {
      name: 'Durandal American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '5.3',
      price: '2.87',
      img: 'product2.svg'
    },
    {
      name: 'Sammy American Lager',
      style: 'American Lager',
      alcohol: '3.8',
      price: '3.33',
      img: 'product5.svg'
    },
    {
      name: 'CorMVC Porter',
      style: 'Porter',
      alcohol: '8.0',
      price: '1.11',
      img: 'product5.svg'
    },
    {
      name: 'Matreshka Pilsner',
      style: 'Pilsner',
      alcohol: '6.0',
      price: '1.41',
      img: 'product9.svg'
    },
    {
      name: 'Famous Pilsner',
      style: 'Pilsner',
      alcohol: '5.8',
      price: '3.33',
      img: 'product9.svg'
    },
    {
      name: 'Vanilla American Lager',
      style: 'American Lager',
      alcohol: '6.5',
      price: '1.48',
      img: 'product5.svg'
    },
    {
      name: 'Flatiron Porter',
      style: 'Porter',
      alcohol: '5.2',
      price: '1.77',
      img: 'product5.svg'
    },
    {
      name: 'Minified Porter',
      style: 'Porter',
      alcohol: '7.2',
      price: '3.55',
      img: 'product4.svg'
    },
    {
      name: 'Javelin Pilsner',
      style: 'Pilsner',
      alcohol: '4.7',
      price: '2.78',
      img: 'product6.svg'
    },
    {
      name: 'Right American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '4.7',
      price: '3.39',
      img: 'product3.svg'
    },
    {
      name: 'midori Pilsner',
      style: 'Pilsner',
      alcohol: '5.9',
      price: '2.20',
      img: 'product6.svg'
    },
    {
      name: 'MochiKit American Pale Ale',
      style: 'American Pale Ale',
      alcohol: '5.8',
      price: '1.47',
      img: 'product2.svg'
    },
    {
      name: 'Angular Indian Pale Ale',
      style: 'Indian Pale Ale',
      alcohol: '7.3',
      price: '1.13',
      img: 'product4.svg'
    }
  ]

module.exports = {
    beers: beers,
}