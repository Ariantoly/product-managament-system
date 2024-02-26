import { createServer, Response } from 'miragejs'
const products = [
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
let id = products.length + 1

export function mockServer() {
  createServer({
    routes() {
      this.get('/api/product', () => {
        return new Response(200, {}, {
          code: 200,
          status: 'OK',
          data: products
        })
      })
      this.get('/api/product/:id', (schema, request) => {
        return new Response(200, {}, {
          code: 200,
          status: 'OK',
          data: products.find(product => product.id == request.params.id)
        })
      })
      this.post('/api/product', (schema, request) => {
        const body = JSON.parse(request.requestBody)
        products.push({
          id: id,
          ...body
        })
        id++
        return new Response(200, {}, {
          code: 200,
          status: 'OK',
          data: 'Success to insert new product'
        })
      })
      this.put('/api/product/:id', (schema, request) => {
        const productIdx = products.findIndex(product => product.id == request.params.id)
        const body = JSON.parse(request.requestBody)
        Object.entries(body).forEach(([key, value]) => {
          products[productIdx][key] = value
        })
        return new Response(200, {}, {
          code: 200,
          status: 'OK',
          data: 'Success to edit selected product'
        })
      })
      this.delete('/api/product/:id', (schema, request) => {
        const deletedIndex = products.findIndex(product => product.id == request.params.id)
        products.splice(deletedIndex, 1);
        return new Response(200, {},  {
          code: 200,
          status: 'OK',
          data: 'Success to delete selected product'
        })
      })
    }
  })
}