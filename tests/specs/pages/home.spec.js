import { beforeEach, describe, test, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import Home from '/src/pages/Home.vue'
import { useProductStore } from '/src/store/product.js'

const mocks = {
  $router: {
    push: vi.fn()
  }
}

describe('Home', () => {
  let wrapper, store

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      global: {
        plugins: [createPinia()],
        mocks
      }
    })

    // store = useProductStore()
    // store.products = getProductInitData()
  })

  function getProductInitData() {
    return [
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

  test('initialize', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('[computed] total quantity', () => {
    wrapper.vm.productData = getProductInitData()
    expect(wrapper.vm.totalQuantity).toBe(57)
  })

  test('[methods] fetchProduct', async () => {
    const getProductsSpy = vi.spyOn(wrapper.vm, 'getProducts')
    wrapper.vm.productData = [
      {
        id: 1,
        name: 'Roti',
        category: 'Makanan',
        quantity: 12,
        unitPrice: 5000
      }
    ]
    wrapper.vm.fetchProducts()
    expect(wrapper.vm.productData).toHaveLength(0)
    expect(getProductsSpy).toHaveBeenCalledOnce()
  })

  test('[methods] mapProductsToTableData', () => {
    wrapper.vm.mapProductsToTableData()
    expect(wrapper.vm.productData).toEqual(wrapper.vm.products.map(product => {
      return {
        id: product.id,
        name: product.name,
        category: product.category,
        quantity: product.quantity,
        unitPrice: `Rp${product.unitPrice}`
      }
    }))
  })

  test('[methods] goToInsertProduct', () => {
    wrapper.vm.goToInsertProduct()
    expect(wrapper.vm.$router.push).toHaveBeenCalledOnce()
  })

  test('[methods] goToEditProduct', () => {
    wrapper.vm.goToEditProduct(1)
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith(`/product/edit/1`)
  })
})