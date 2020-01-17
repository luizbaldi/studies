import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import NumberInput from '../src/components/NumberInput'

describe('<NumberInput />', () => {
  afterAll(() => {
    cleanup()
  })

  it('should render number input', () => {
    const { queryByText } = render(<NumberInput />)
    const input = queryByText('Number')
    expect(input).toBeTruthy()
  })

  it('should fire onChangeEvent', () => {
    const { getByLabelText } = render(<NumberInput />)
    const input = getByLabelText('Number')
    const value = 2

    fireEvent.change(input, { target: { value } })
    expect(input.value).toEqual(value.toString())
  })

  it('should render invalid number message', () => {
    const { queryByText } = render(<NumberInput />)
    const messageEl = queryByText('Number is invalid')

    expect(messageEl).toBeTruthy()
  })
})
