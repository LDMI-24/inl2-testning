import React from 'react'
import { Todos } from './Todos'

describe('<Todos />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Todos />)
  })
})