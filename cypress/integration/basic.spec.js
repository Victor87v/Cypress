/// <reference types="cypress" />

describe('Cyoress Básico',() => {
    it.only('Visitar uma página e fazer uma assertiva no título', () =>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.pause()
        // const title = cy.title()
        // console.log(title)
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
    })

    it('Procurar interagir com um elemento', ()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')

    })
})