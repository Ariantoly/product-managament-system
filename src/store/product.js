import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    productById: {}
  }),
  actions: {
    async getProducts () {
      return fetch(`/api/product`, {
        method: 'GET',
      })
      .then((res) => res.json())
      .then((body) => {
        this.products = body.data
      })
      .catch(err => err)
    },
    async getProductById (id) {
      return fetch(`/api/product/${id}`, {
        method: 'GET',
      })
      .then((res) => res.json())
      .then((body) => {
        this.productById = body.data
      })
      .catch(err => err)
    },
    async insertProduct (requestBody) {
      return fetch(`/api/product`, {
        method: 'POST',
        body: JSON.stringify(requestBody)
      })
      .then((res) => res.json())
      .catch(err => console.log(err))
    },
    async editProduct ({ id, requestBody }) {
      return fetch(`/api/product/${id}`, {
        method: 'PUT',
        body: JSON.stringify(requestBody)
      })
      .then((res) => res.json())
      .catch(err => console.log(err))
    },
    async deleteProduct (id) {
      return fetch(`/api/product/${id}`, {
        method: 'DELETE'
      })
      .then((res) => res.json())
    },
  }
})
