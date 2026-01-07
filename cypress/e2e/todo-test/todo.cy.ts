/// <reference types="cypress" />

describe('Todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('displays two todo items by default, where one is done and one is not done', () => {

    cy.get('.todos li').should('have.length', 2)

    cy.get('.todos li h2').first().should('have.text', 'Cook dinner')

    cy.contains('Cook dinner')
      .parents('li')
      .should('not.have.class', 'done')

    cy.get('.todos li h2').last().should('have.text', 'Go to the shop')

    cy.contains('Go to the shop')
      .parents('li')
      .should('have.class', 'done')
  })

  it('can add new todo items', () => {

    const newItem = 'Feed the cat'

    cy.get('#title').type(`${newItem}{enter}`)

    cy.get('.todos li h2')
      .should('have.length', 3)
      .first()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {

    cy.contains('Cook dinner')
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.contains('Cook dinner')
      .parents('li')
      .should('have.class', 'done')
  })
  
    it('can check off an item as not completed', () => {

    cy.contains('Go to the shop')
      .parents('li')
      .should('have.class', 'done')

    cy.contains('Go to the shop')
      .parent()
      .find('input[type=checkbox]')
      .uncheck()

    cy.contains('Go to the shop')
      .parents('li')
      .should('not.have.class', 'done')
  })

    it('can delete a todo that is marked as done', () => {

    cy.contains('Cook dinner')
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.contains('Cook dinner')
      .parents('li')
      .should('have.class', 'done')

    cy.contains('Cook dinner')
      .parents('li')
      .find('.delBtn')
      .click()

    cy.contains('Cook dinner').should('not.exist')
  })
})
