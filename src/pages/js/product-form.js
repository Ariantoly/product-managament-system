import BliField from '@blibli/blue.field/dist/field/blue/Field'
import BliTextField from '@blibli/blue.text-field/dist/text-field/blue/TextField'
import BliButton from '@blibli/blue.button/dist/button/blue/Button'
import BliToast from '@blibli/blue.toast/dist/toast/blue/toast-index'
import { mapActions, mapState } from 'pinia'
import { useProductStore } from '../../store/product'

export default {
  name: 'ProductForm',
  components: {
    BliField,
    BliTextField,
    BliButton,
    BliToast
  },
  data () {
    return {
      form: {
        name: null,
        category: null,
        quantity: null,
        unitPrice: null
      },
      isEditPage: false
    }
  },
  computed: {
    ...mapState(useProductStore, [
      'productById'
    ])
  },
  methods: {
    ...mapActions(useProductStore, [
      'insertProduct', 'getProductById', 'editProduct'
    ]),
    submit () {
      if (this.form.name && this.form.category && this.form.quantity && this.form.unitPrice) {
        if (this.isEditPage) {
          this.edit()
          return
        }
        this.insertProduct({
          name: this.form.name,
          category: this.form.category,
          quantity: parseInt(this.form.quantity),
          unitPrice: parseInt(this.form.unitPrice)
        })
        .then(res => this.showSuccessToast(res.data))
        .then(() => this.$router.back())
        return
      }
      BliToast.open({
        status: 'error',
        text: 'Please fill the required field'
      })
    },
    edit () {
      this.editProduct({
        id: this.$route.params.id,
        requestBody: {
          name: this.form.name,
          category: this.form.category,
          quantity: parseInt(this.form.quantity),
          unitPrice: parseInt(this.form.unitPrice)
        }
      })
      .then(res => this.showSuccessToast(res.data))
      .then(() => this.$router.back())
    },
    showSuccessToast (message) {
      BliToast.open({
        status: 'success',
        text: message
      })
    },
    fetchProductById () {
      this.getProductById(this.$route.params.id)
        .then(() => {
          this.form.name = this.productById.name,
          this.form.category = this.productById.category,
          this.form.quantity = this.productById.quantity,
          this.form.unitPrice = this.productById.unitPrice
        })
    }
  },
  mounted () {
    if (this.$route.params?.id) {
      this.isEditPage = true
      this.fetchProductById()
    }
  }
}