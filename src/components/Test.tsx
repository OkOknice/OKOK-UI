import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const count = ref(0)
    const test = () => {
      console.log('test')
      count.value++
    }

    return () => {
      return (
        <div onClick={test}>
          <h1 class="font-bold text-3xl underline">{count.value}</h1>
          <input type="text" v-model={count.value} />
          <div class="text-3xl font-bold underline">3432432-0480</div>
        </div>
      )
    }
  },
})
