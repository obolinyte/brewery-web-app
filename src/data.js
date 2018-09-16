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

const orders = [
  {
    id: 'LHKGTQKM',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-07-18T17:13:42.008Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'jQuery American Pale Ale',
        price: '3.22',
        qty: 71
      },
      {
        beer: 'Minified Porter',
        price: '3.55',
        qty: 129
      },
      {
        beer: 'Mithril European Lager',
        price: '3.34',
        qty: 138
      }
    ]
  },
  {
    id: 'CF0JUQ6P',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-06-24T09:12:10.515Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Deku American Lager',
        price: '2.52',
        qty: 107
      },
      {
        beer: 'Angular Indian Pale Ale',
        price: '1.13',
        qty: 132
      },
      {
        beer: 'MobX American Pale Ale',
        price: '1.81',
        qty: 99
      }
    ]
  },
  {
    id: 'S6HRCGBY',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-02-09T11:00:03.494Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'OpenUI5 Porter',
        price: '1.46',
        qty: 128
      },
      {
        beer: 'MooTools Porter',
        price: '1.38',
        qty: 66
      },
      {
        beer: 'Mithril European Lager',
        price: '3.34',
        qty: 145
      },
      {
        beer: 'Webix Stout',
        price: '2.28',
        qty: 21
      }
    ]
  },
  {
    id: '87K8EFAD',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-06-05T06:39:59.322Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Enyo American Pale Ale',
        price: '1.60',
        qty: 113
      },
      {
        beer: 'Relay European Lager',
        price: '1.98',
        qty: 7
      },
      {
        beer: 'WebRX Pilsner',
        price: '2.21',
        qty: 127
      },
      {
        beer: 'Javelin Pilsner',
        price: '2.78',
        qty: 23
      }
    ]
  },
  {
    id: 'B202TZ4K',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-09-10T15:48:40.034Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'WebRX Pilsner',
        price: '2.21',
        qty: 130
      },
      {
        beer: 'Relay European Lager',
        price: '1.98',
        qty: 107
      },
      {
        beer: 'T3 American Lager',
        price: '2.52',
        qty: 32
      }
    ]
  },
  {
    id: 'I5N0JAYD',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-09-01T18:28:32.526Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Mercury American Pale Ale',
        price: '1.89',
        qty: 43
      }
    ]
  },
  {
    id: 'B7T99YAB',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-06-16T05:53:22.706Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'Riot Stout',
        price: '2.99',
        qty: 76
      },
      {
        beer: 'Sammy American Lager',
        price: '3.33',
        qty: 121
      },
      {
        beer: 'Snack Indian Pale Ale',
        price: '3.02',
        qty: 141
      }
    ]
  },
  {
    id: 'IPB4FDDS',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-01-01T01:07:48.655Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Ember Pilsner',
        price: '2.57',
        qty: 10
      },
      {
        beer: 'CorMVC Porter',
        price: '1.11',
        qty: 79
      }
    ]
  },
  {
    id: '3G2H7PN0',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-07-09T02:13:03.262Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'OpenUI5 Porter',
        price: '1.46',
        qty: 99
      }
    ]
  },
  {
    id: '3ILB2BCS',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-08-03T10:42:07.181Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'jQuery American Pale Ale',
        price: '3.22',
        qty: 96
      },
      {
        beer: 'KickOff Stout',
        price: '1.54',
        qty: 125
      },
      {
        beer: 'jQuery American Pale Ale',
        price: '3.22',
        qty: 101
      }
    ]
  },
  {
    id: 'ZX8EEH59',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-04-01T12:48:58.029Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Aurelia European Lager',
        price: '3.59',
        qty: 82
      },
      {
        beer: 'Stimulus European Lager',
        price: '2.66',
        qty: 99
      },
      {
        beer: 'midori Pilsner',
        price: '2.20',
        qty: 62
      },
      {
        beer: 'Mercury American Pale Ale',
        price: '1.89',
        qty: 4
      },
      {
        beer: 'Zepto American Pale Ale',
        price: '2.75',
        qty: 30
      }
    ]
  },
  {
    id: 'NAK0AP2K',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-05-14T10:29:30.414Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Matreshka Pilsner',
        price: '1.41',
        qty: 13
      }
    ]
  },
  {
    id: '0IW86H82',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-07-20T12:02:17.748Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'Matreshka Pilsner',
        price: '1.41',
        qty: 49
      },
      {
        beer: 'Riot Stout',
        price: '2.99',
        qty: 111
      }
    ]
  },
  {
    id: 'LQPRJVFA',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-08-25T18:23:39.070Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'D3 Indian Pale Ale',
        price: '3.22',
        qty: 2
      },
      {
        beer: 'T3 American Lager',
        price: '2.52',
        qty: 94
      }
    ]
  },
  {
    id: 'XBH11QKH',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-09-14T10:45:31.941Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'Mercury American Pale Ale',
        price: '1.89',
        qty: 93
      }
    ]
  },
  {
    id: '0EVW5915',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-09-08T13:00:40.350Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'T3 American Lager',
        price: '2.52',
        qty: 63
      },
      {
        beer: 'Angular Stout',
        price: '1.78',
        qty: 15
      }
    ]
  },
  {
    id: 'KKTSWNCY',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-02-21T21:36:18.183Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Javelin Pilsner',
        price: '2.78',
        qty: 93
      },
      {
        beer: 'Dojo Porter',
        price: '1.43',
        qty: 57
      },
      {
        beer: 'Backbone Porter',
        price: '2.41',
        qty: 6
      },
      {
        beer: 'Ext Stout',
        price: '1.61',
        qty: 29
      },
      {
        beer: 'Truck American Lager',
        price: '1.28',
        qty: 143
      }
    ]
  },
  {
    id: 'R9Z79EQH',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-07-28T08:30:55.111Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Angular Indian Pale Ale',
        price: '1.13',
        qty: 114
      },
      {
        beer: 'Truck American Lager',
        price: '1.28',
        qty: 126
      }
    ]
  },
  {
    id: '5PZF0JHG',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-04-03T11:11:46.335Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Ext Stout',
        price: '1.61',
        qty: 116
      },
      {
        beer: 'Vanilla American Lager',
        price: '1.48',
        qty: 1
      },
      {
        beer: 'MobX American Pale Ale',
        price: '1.81',
        qty: 39
      }
    ]
  },
  {
    id: 'F90YKZ9U',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-05-27T01:34:24.396Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Mercury American Pale Ale',
        price: '1.89',
        qty: 138
      },
      {
        beer: 'Angular Stout',
        price: '1.78',
        qty: 110
      },
      {
        beer: 'midori Pilsner',
        price: '2.20',
        qty: 79
      },
      {
        beer: 'Flatiron Porter',
        price: '1.77',
        qty: 124
      },
      {
        beer: 'Stimulus European Lager',
        price: '2.66',
        qty: 91
      }
    ]
  },
  {
    id: '3ZXJTVPD',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-05-17T16:35:39.942Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Angular Stout',
        price: '1.78',
        qty: 46
      }
    ]
  },
  {
    id: '1CMTJZZG',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-07-22T16:56:46.047Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Snack Indian Pale Ale',
        price: '3.02',
        qty: 85
      }
    ]
  },
  {
    id: '1B7P7ADS',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-04-14T03:39:35.844Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'qooxdoo Stout',
        price: '2.26',
        qty: 30
      },
      {
        beer: 'Mithril European Lager',
        price: '3.34',
        qty: 30
      }
    ]
  },
  {
    id: 'EZNDUXNW',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-09-08T13:21:47.803Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'midori Pilsner',
        price: '2.20',
        qty: 72
      },
      {
        beer: 'OpenUI5 Porter',
        price: '1.46',
        qty: 127
      },
      {
        beer: 'Right American Pale Ale',
        price: '3.39',
        qty: 59
      },
      {
        beer: 'Enyo American Pale Ale',
        price: '1.60',
        qty: 130
      },
      {
        beer: 'Sammy American Lager',
        price: '3.33',
        qty: 115
      }
    ]
  },
  {
    id: 'SB31QUEI',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-01-02T10:16:07.789Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'qooxdoo Stout',
        price: '2.26',
        qty: 114
      },
      {
        beer: 'WebRX Pilsner',
        price: '2.21',
        qty: 142
      },
      {
        beer: 'Backbone Porter',
        price: '2.41',
        qty: 30
      },
      {
        beer: 'MochiKit American Pale Ale',
        price: '1.47',
        qty: 90
      },
      {
        beer: 'Famous Pilsner',
        price: '3.33',
        qty: 1
      }
    ]
  },
  {
    id: '4TFAIIMH',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-02-21T18:19:24.058Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Javelin Pilsner',
        price: '2.78',
        qty: 40
      },
      {
        beer: 'Snack Indian Pale Ale',
        price: '3.02',
        qty: 96
      },
      {
        beer: 'NativeScript Porter',
        price: '3.65',
        qty: 72
      }
    ]
  },
  {
    id: '1NE9XN9M',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-05-21T07:03:28.140Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'jQuery American Pale Ale',
        price: '3.22',
        qty: 54
      },
      {
        beer: 'Backbone Porter',
        price: '2.41',
        qty: 136
      },
      {
        beer: 'OpenUI5 Porter',
        price: '1.46',
        qty: 22
      },
      {
        beer: 'Stimulus European Lager',
        price: '2.66',
        qty: 39
      }
    ]
  },
  {
    id: '2TPGGEOQ',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-01-17T16:34:47.567Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Angular Stout',
        price: '1.78',
        qty: 53
      },
      {
        beer: 'MochiKit American Pale Ale',
        price: '1.47',
        qty: 40
      },
      {
        beer: 'MobX American Pale Ale',
        price: '1.81',
        qty: 37
      }
    ]
  },
  {
    id: 'R1O9N7KR',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-03-30T00:28:44.447Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'DHTMLX Indian Pale Ale',
        price: '2.04',
        qty: 119
      },
      {
        beer: 'Mercury American Pale Ale',
        price: '1.89',
        qty: 42
      },
      {
        beer: 'T3 American Lager',
        price: '2.52',
        qty: 64
      },
      {
        beer: 'Durandal American Pale Ale',
        price: '2.87',
        qty: 149
      },
      {
        beer: 'Enyo American Pale Ale',
        price: '1.60',
        qty: 65
      }
    ]
  },
  {
    id: 'SLUVARP8',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-03-20T08:27:41.661Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Stimulus European Lager',
        price: '2.66',
        qty: 91
      },
      {
        beer: 'Flight European Lager',
        price: '1.99',
        qty: 97
      },
      {
        beer: 'D3 Indian Pale Ale',
        price: '3.22',
        qty: 53
      }
    ]
  },
  {
    id: 'XZ6ZJNBG',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-03-12T22:04:52.656Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'KickOff Stout',
        price: '1.54',
        qty: 69
      },
      {
        beer: 'OpenUI5 Porter',
        price: '1.46',
        qty: 102
      },
      {
        beer: 'Enyo American Pale Ale',
        price: '1.60',
        qty: 130
      },
      {
        beer: 'jQuery American Pale Ale',
        price: '3.22',
        qty: 27
      }
    ]
  },
  {
    id: 'ULRALH5S',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-07-24T15:42:08.678Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Aurelia European Lager',
        price: '3.59',
        qty: 75
      },
      {
        beer: 'MobX American Pale Ale',
        price: '1.81',
        qty: 28
      }
    ]
  },
  {
    id: 'F0I1PM93',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-02-14T01:20:23.367Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Wakanda Stout',
        price: '2.58',
        qty: 37
      },
      {
        beer: 'Mithril European Lager',
        price: '3.34',
        qty: 65
      },
      {
        beer: 'DHTMLX Indian Pale Ale',
        price: '2.04',
        qty: 25
      },
      {
        beer: 'Right American Pale Ale',
        price: '3.39',
        qty: 125
      }
    ]
  },
  {
    id: '95U5DY97',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-09-11T15:18:38.830Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'qooxdoo Stout',
        price: '2.26',
        qty: 71
      },
      {
        beer: 'NativeScript Porter',
        price: '3.65',
        qty: 55
      },
      {
        beer: 'jEli Indian Pale Ale',
        price: '1.15',
        qty: 5
      },
      {
        beer: 'Vanilla American Lager',
        price: '1.48',
        qty: 72
      }
    ]
  },
  {
    id: 'VDQ27U2N',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-07-25T11:30:19.986Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Mithril European Lager',
        price: '3.34',
        qty: 42
      },
      {
        beer: 'Deku American Lager',
        price: '2.52',
        qty: 62
      },
      {
        beer: 'Backbone Porter',
        price: '2.41',
        qty: 139
      }
    ]
  },
  {
    id: 'L3V9KD4I',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-04-23T01:29:26.447Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'Snack Indian Pale Ale',
        price: '3.02',
        qty: 64
      },
      {
        beer: 'WebRX Pilsner',
        price: '2.21',
        qty: 52
      }
    ]
  },
  {
    id: 'ERIUPSN7',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-07-29T14:19:34.384Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'qooxdoo Stout',
        price: '2.26',
        qty: 134
      },
      {
        beer: 'Flight European Lager',
        price: '1.99',
        qty: 53
      },
      {
        beer: 'Ext Stout',
        price: '1.61',
        qty: 135
      },
      {
        beer: 'Relay European Lager',
        price: '1.98',
        qty: 50
      },
      {
        beer: 'KickOff Stout',
        price: '1.54',
        qty: 130
      }
    ]
  },
  {
    id: 'F7V4ZD43',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-08-09T16:22:37.695Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'MooTools Porter',
        price: '1.38',
        qty: 64
      },
      {
        beer: 'midori Pilsner',
        price: '2.20',
        qty: 90
      }
    ]
  },
  {
    id: 'GUSRJ1JI',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-05-04T13:19:43.511Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Dojo Porter',
        price: '1.43',
        qty: 33
      },
      {
        beer: 'Famous Pilsner',
        price: '3.33',
        qty: 104
      },
      {
        beer: 'Angular Stout',
        price: '1.78',
        qty: 131
      },
      {
        beer: 'Vanilla American Lager',
        price: '1.48',
        qty: 125
      }
    ]
  },
  {
    id: '9KLQELEX',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-03-19T14:31:33.343Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Angular Stout',
        price: '1.78',
        qty: 36
      },
      {
        beer: 'MooTools Porter',
        price: '1.38',
        qty: 82
      }
    ]
  },
  {
    id: 'TVKAJEBG',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-03-21T20:16:42.943Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Mithril European Lager',
        price: '3.34',
        qty: 44
      },
      {
        beer: 'KickOff Stout',
        price: '1.54',
        qty: 4
      },
      {
        beer: 'MochiKit American Pale Ale',
        price: '1.47',
        qty: 55
      },
      {
        beer: 'midori Pilsner',
        price: '2.20',
        qty: 28
      },
      {
        beer: 'jQuery American Pale Ale',
        price: '3.22',
        qty: 127
      }
    ]
  },
  {
    id: '0ZRDVJWH',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-04-25T14:11:54.034Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Webix Stout',
        price: '2.28',
        qty: 90
      },
      {
        beer: 'Snack Indian Pale Ale',
        price: '3.02',
        qty: 79
      },
      {
        beer: 'D3 Indian Pale Ale',
        price: '3.22',
        qty: 102
      },
      {
        beer: 'Ext Stout',
        price: '1.61',
        qty: 125
      }
    ]
  },
  {
    id: 'TW84F1JA',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-07-11T09:44:59.479Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Famous Pilsner',
        price: '3.33',
        qty: 124
      },
      {
        beer: 'CorMVC Porter',
        price: '1.11',
        qty: 24
      },
      {
        beer: 'Angular Indian Pale Ale',
        price: '1.13',
        qty: 78
      },
      {
        beer: 'D3 Indian Pale Ale',
        price: '3.22',
        qty: 150
      },
      {
        beer: 'Stimulus European Lager',
        price: '2.66',
        qty: 34
      }
    ]
  },
  {
    id: 'YMQ5HUHA',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-01-16T23:25:52.489Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'midori Pilsner',
        price: '2.20',
        qty: 31
      },
      {
        beer: 'NativeScript Porter',
        price: '3.65',
        qty: 12
      }
    ]
  },
  {
    id: 'XDA286N9',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-01-18T04:49:59.914Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'Stapes Porter',
        price: '3.31',
        qty: 7
      },
      {
        beer: 'OpenUI5 Porter',
        price: '1.46',
        qty: 39
      }
    ]
  },
  {
    id: '2R3HYFYM',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-08-27T16:56:26.661Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'Wakanda Stout',
        price: '2.58',
        qty: 118
      },
      {
        beer: 'Ember Pilsner',
        price: '2.57',
        qty: 143
      },
      {
        beer: 'Flatiron Porter',
        price: '1.77',
        qty: 122
      }
    ]
  },
  {
    id: '9FJGGKU6',
    recipient: 'John Resig',
    address: 'jQuery st. 2-3, New York, USA',
    orderDate: '2018-05-16T21:05:03.653Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Mithril European Lager',
        price: '3.34',
        qty: 116
      }
    ]
  },
  {
    id: 'BK3PAHYA',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-02-23T10:08:44.857Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Stapes Porter',
        price: '3.31',
        qty: 130
      },
      {
        beer: 'Vue Pilsner',
        price: '2.56',
        qty: 27
      }
    ]
  },
  {
    id: 'NG67CTCZ',
    recipient: 'Douglas Crockford',
    address: 'Javascript Blvd. 5-10, Toronto, Canada',
    orderDate: '2018-07-21T13:36:17.911Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'OpenUI5 Porter',
        price: '1.46',
        qty: 126
      },
      {
        beer: 'React Porter',
        price: '1.79',
        qty: 110
      },
      {
        beer: 'Riot Stout',
        price: '2.99',
        qty: 121
      },
      {
        beer: 'Flight European Lager',
        price: '1.99',
        qty: 88
      },
      {
        beer: 'Matreshka Pilsner',
        price: '1.41',
        qty: 53
      }
    ]
  },
  {
    id: 'DM7W1FG2',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-07-03T18:03:44.127Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'MooTools Porter',
        price: '1.38',
        qty: 82
      },
      {
        beer: 'Truck American Lager',
        price: '1.28',
        qty: 76
      }
    ]
  },
  {
    id: '5BWPBZ5G',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-04-29T08:40:19.925Z',
    status: 'shipped',
    orderItems: [
      {
        beer: 'Webix Stout',
        price: '2.28',
        qty: 52
      },
      {
        beer: 'Minified Porter',
        price: '3.55',
        qty: 87
      },
      {
        beer: 'qooxdoo Stout',
        price: '2.26',
        qty: 5
      },
      {
        beer: 'Dojo Porter',
        price: '1.43',
        qty: 11
      },
      {
        beer: 'T3 American Lager',
        price: '2.52',
        qty: 78
      }
    ]
  },
  {
    id: 'DE80Y1R4',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-05-01T13:04:35.717Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'Cycle Porter',
        price: '2.58',
        qty: 60
      },
      {
        beer: 'WebRX Pilsner',
        price: '2.21',
        qty: 14
      },
      {
        beer: 'Backbone Porter',
        price: '2.41',
        qty: 71
      },
      {
        beer: 'WebRX Pilsner',
        price: '2.21',
        qty: 8
      }
    ]
  },
  {
    id: 'FM8GKWUW',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-05-03T22:28:43.244Z',
    status: 'delivered',
    orderItems: [
      {
        beer: 'Stimulus European Lager',
        price: '2.66',
        qty: 64
      },
      {
        beer: 'KickOff Stout',
        price: '1.54',
        qty: 4
      },
      {
        beer: 'midori Pilsner',
        price: '2.20',
        qty: 77
      },
      {
        beer: 'Webix Stout',
        price: '2.28',
        qty: 70
      },
      {
        beer: 'Babylon American Pale Ale',
        price: '2.18',
        qty: 147
      }
    ]
  },
  {
    id: 'V5UTW6I1',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-04-22T20:03:10.986Z',
    status: 'pending payment',
    orderItems: [
      {
        beer: 'Vanilla American Lager',
        price: '1.48',
        qty: 13
      },
      {
        beer: 'Durandal American Pale Ale',
        price: '2.87',
        qty: 48
      }
    ]
  },
  {
    id: '9Z2VM7U5',
    recipient: 'Brendan Eich',
    address: 'ECMA street 4-7, Tokyo, Japan',
    orderDate: '2018-06-18T11:10:35.077Z',
    status: 'processing',
    orderItems: [
      {
        beer: 'Sammy American Lager',
        price: '3.33',
        qty: 67
      }
    ]
  }
]

module.exports = {
  beers: beers,
  orders:orders,
}