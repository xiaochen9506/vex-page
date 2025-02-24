import { ref, getCurrentInstance, defineEmits, watch } from 'vue'

export default function useDialog(props) {
  const instance = getCurrentInstance()

  const dialogVisible = ref(props.modelValue)


  watch(() => props.modelValue, (v) => {
    dialogVisible.value = v
  })

  const closeDialog = () => {
    instance.emit('update:modelValue', false)
  }

  const beforeClose = (done) => {
    instance.emit('update:modelValue', false)
    done()
  }

  return {
    dialogVisible,
    closeDialog,
    beforeClose,
  }
}
