import { shallowMount } from '@vue/test-utils'
import DummyComponent from '@/components/DummyComponent/DummyComponent.vue'

describe('DummyComponent.vue', () => {
  it('renders', () => {
    const msg = 'new message'
    const wrapper = shallowMount(DummyComponent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
