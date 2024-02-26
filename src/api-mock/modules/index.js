export default [
  {
    url: '/api/product',
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          name: 'Roti',
          category: 'Makanan',
          quantity: 12,
          unitPrice: 5000
        },
        {
          id: 2,
          name: 'Wafer',
          category: 'Makanan',
          quantity: 20,
          unitPrice: 8000
        },
        {
          id: 3,
          name: 'Air Mineral 600mL',
          category: 'Minuman',
          quantity: 25,
          unitPrice: 4000
        }
      ]
    }
  },
  {
    url: '/api/product/1',
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 1,
        name: 'Roti',
        category: 'Makanan',
        quantity: 12,
        unitPrice: 5000
      }
    }
  },
  {
    url: '/api/product',
    method: 'POST',
    status: 200,
    param_values: {
      name: 'Snack',
      category: 'Makanan',
      quantity: 10,
      unitPrice: 10000
    },
    response: {
      code: 200,
      status: 'OK',
      data: 'Success to insert new product'
    }
  },
  {
    url: '/api/product/1',
    method: 'PUT',
    status: 200,
    param_values: {
      name: 'Kopi',
      category: 'Minuman',
      quantity: 12,
      unitPrice: 5000
    },
    response: {
      code: 200,
      status: 'OK',
      data: 'Success to update selected product'
    }
  },
  {
    url: '/api/product/1',
    method: 'DELETE',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: 'Success to delete selected product'
    }
  }
]