
describe('Test search results component', () => {
  it('goes to the home page', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Label of search input is visible for screen readers', () => {
    cy.get('[data-test-search-label]')
    .should('be.visible')

  })
  it('Label has the text "Pick-up Location"', () => {
    cy.get('[data-test-search-label]')
    .should('have.text','Pick-up Location')
  })

  it('Placeholder has the text "Pick-up Location"', () => {
    cy.get('[data-test-search-input]')
    .invoke('attr', 'placeholder')
    .should('contain', 'Pick-up Location')
  })

  it('Placeholder clears after selecting input', () => {
    cy.get('[data-test-search-input]')
    .click()
    .invoke('attr', 'placeholder').should('contain', '')
  })

  it('I enter one character and no results should display', function() {
    cy.get('[data-test-search-input]').type('M')
    this.timeout(2000);
    cy.get('[data-test-results]').should('not.exist');
  })

  it('I enter a second character and results will display', function() {
    cy.get('[data-test-search-input]').type('a')
    this.timeout(2000);
    cy.get('[data-test-results]').should('exist');
  })

  it('I enter unrecognised search and expect "No results found" feedback', () => {
    cy.get('[data-test-search-input]').clear().type('asdf123')
    cy.get('[data-test-results]')
    .should('be.visible')
    cy.get('[data-test-results-heading]')
    .should('contain', 'No results found')
  })

  it('I enter text and then delete to 1 character. No results should display', function() {
    cy.get('[data-test-search-input]').clear().type('New York')
    cy.get('body').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}')
    cy.get('[data-test-results]').should('not.exist');
  })
})