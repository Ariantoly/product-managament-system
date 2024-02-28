import { describe, test, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Home from '../../../src/pages/Home.vue'
import { createPinia } from 'pinia'

const mock = {
  $router: {
    push: vi.fn()
  }
}

describe('home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      global: {
        plugins: [createPinia()],
        mocks: mock
      }
    })
  })

  test('totalQuantity', () => {
    wrapper.vm.productData = [
      {
        quantity: 100
      },
      {
        quantity: 200
      }
    ]
    expect(wrapper.vm.totalQuantity).toBe(300)
  })

  test('goToEditProduct', () => {
    wrapper.vm.goToEditProduct('1')
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/product/edit/1')
  })
})