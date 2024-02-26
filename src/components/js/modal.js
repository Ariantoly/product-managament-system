import BliModal from '@blibli/blue.modal/dist/modal/blue/Modal'
import BliModalHeader from '@blibli/blue.modal/dist/modal/blue/ModalHeader'
import BliModalBody from '@blibli/blue.modal/dist/modal/blue/ModalBody'
import BliModalFooter from '@blibli/blue.modal/dist/modal/blue/ModalFooter'
import BliButton from '@blibli/blue.button/dist/button/blue/Button'

export default {
  name: 'Modal',
  components: {
    BliModal,
    BliModalHeader,
    BliModalBody,
    BliModalFooter,
    BliButton
  },
  props: {
    type: {
      type: String,
      default: 'info'
    },
    visibleModal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    confirm: {
      type: Function
    },
    cancel: {
      type: Function
    }
  }
}