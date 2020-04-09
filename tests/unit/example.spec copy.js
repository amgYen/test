import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    //原生组件的测法
    // let Ctor = Vue.extend(HelloWorld);
    // let vm = new Ctor({
    //   propsData:{msg}
    // })
    // console.log(vm.$el.innerHTML).to.include(msg);
    
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
