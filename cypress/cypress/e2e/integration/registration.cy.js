describe('Testing Wikipedia', () => {
    beforeEach(() => {
      cy.visit('https://es.m.wikipedia.org/wiki/Wikipedia:Portada')
    })
  
    it('Test link desde botón de ayuda', () => {
      cy.get('span.mw-ui-button.mw-ui-quiet').contains("Ayuda").click()
      cy.url().should('include', '/wiki/Ayuda:Contenidos')
    })
  
    it('Debe marcar y desmarcar un checkbox', () => {
      cy.get('span.mw-ui-button.mw-ui-quiet').contains("Ayuda").click()
      cy.get('input[name="ns4"]').check({ force: true }).should('be.checked')
      cy.get('input[name="ns4"]').uncheck({ force: true }).should('not.be.checked')
    })
  
    it('Buscar modo oscuro', () => {
      cy.get('span.mw-ui-button.mw-ui-quiet').contains("Ayuda").click()
      cy.get('input[name="ns4"]').check({ force: true }).should('be.checked')
      cy.get('input[name="ns4"]').uncheck({ force: true }).should('not.be.checked')
      cy.get('input.mw-inputbox-input.searchboxInput')
          .type('modo oscuro')

        // Hacer clic en el botón de búsqueda
        cy.get('input.cdx-button').click()

        // Verificar que los resultados sean visibles
        cy.get('div.results-info', { timeout: 5000 })
          .should('be.visible')
    })
    
    it('Test redirección al hacer click en imagen destacada', () => {
        // Target the specific Ferdinand and Isabella image using more precise selectors
        // Using the specific src attribute visible in your screenshot
        cy.get('img[src*="Ferdinand_of_Aragon%2C_Isabella_of_Castile"]').click();
        
        // Alternative approach: Find the image by its caption text
        // cy.contains('Fernando II de Aragón (izquierda) e Isabel I de Castilla en un retrato de boda')
        //   .closest('figure')
        //   .find('img')
        //   .click();
        
        // Verify navigation to the image page
        cy.url().should('include', 'Ferdinand_of_Aragon');

      })
  })
  