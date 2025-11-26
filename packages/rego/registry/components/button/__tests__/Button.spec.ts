import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../files/Button.vue'

describe('Button', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('applies variant class', () => {
    const wrapper = mount(Button, {
      props: { variant: 'outline' },
    })
    expect(wrapper.classes()).toContain('ds-btn--outline')
  })

  it('applies size class', () => {
    const wrapper = mount(Button, {
      props: { size: 'lg' },
    })
    expect(wrapper.classes()).toContain('ds-btn--lg')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('sets aria-busy when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    expect(wrapper.attributes('aria-busy')).toBe('true')
  })

  it('renders start slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Label',
        start: '<span class="icon">→</span>',
      },
    })
    expect(wrapper.find('.ds-btn__icon--start').exists()).toBe(true)
  })

  it('renders end slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Label',
        end: '<span class="icon">←</span>',
      },
    })
    expect(wrapper.find('.ds-btn__icon--end').exists()).toBe(true)
  })
})
