import { mapActions, mapState } from 'pinia'
import { useProductStore } from '/src/store/product.js'
import { sum, convertPriceToRupiah } from '../../utils/util'
import BliTable from '@blibli/blue.table/dist/table/blue/Table'
import BliButton from '@blibli/blue.button/dist/button/blue/Button'
import BliLink from '@blibli/blue.link/dist/link/blue/Link'
import BliToast from '@blibli/blue.toast/dist/toast/blue/toast-index'
import Modal from '/src/components/Modal.vue'

export default {
  name: 'Home',
  components: {
    BliTable,
    BliButton,
    BliLink,
    BliToast,
    Modal
  },
  data () {
    return {
      titles: ['No', 'Product Name', 'Category', 'Quantity', 'Unit Price', 'Actions'],
      productData: [],
      deletedProduct: null,
      modal: {
        delete: {
          visible: false,
          title: 'Delete product',
          description: 'Are you sure want to delete this product?'
        }
      }
    }
  },
  computed: {
    ...mapState(useProductStore, [
      'products'
    ]),
    totalQuantity () {
      return sum(this.productData.map(product => product.quantity))
    }
  },
  methods: {
    ...mapActions(useProductStore, [
      'getProducts', 'deleteProduct'
    ]),
    fetchProducts () {
      this.productData = []
      this.getProducts()
        .then(() => this.mapProductsToTableData())
    },
    mapProductsToTableData () {
      this.products.forEach(product => {
        this.productData.push({
          id: product.id,
          name: product.name,
          category: product.category,
          quantity: product.quantity,
          unitPrice: convertPriceToRupiah(product.unitPrice)
        })
      })
    },
    goToInsertProduct () {
      this.$router.push('/product/insert')
    },
    goToEditProduct (id) {
      this.$router.push(`/product/edit/${id}`)
    },
    openDeleteModal (product) {
      this.modal.delete.visible = true
      this.deletedProduct = product
    },
    cancelDeleteModal () {
      this.modal.delete.visible = false
      this.deletedProduct = null
    },
    callDeleteProduct () {
      this.modal.delete.visible = false
      this.deleteProduct(this.deletedProduct.id)
        .then(res => this.showSuccessToast(res.data))
        .finally(() => this.fetchProducts())
    },
    showSuccessToast (message) {
      BliToast.open({
        status: 'success',
        text: message
      })
    }
  },
  created () {
    this.fetchProducts()
  }
}