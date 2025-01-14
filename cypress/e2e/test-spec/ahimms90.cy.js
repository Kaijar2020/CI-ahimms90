describe("Test the URL Stability",()=>{

    it('Check the url is run open smoothly',()=>{

        cy.clearAllCookies;
        cy.visit('http://ahimms90.com/');
        cy.wait(1000);

        // cy.xpath("//h3[normalize-space()='AHIMMS90']").should('not.be.visible');
        cy.get('.x-el-div > .x-el-a > .x-el').should('be.visible');
        cy.get('.x-el-div > .x-el-a > .x-el').contains("AHIMMS90")
        cy.wait(1000)
        cy.get('.c1-24 > .x-el-div > :nth-child(2) > .x-el').should("be.visible");

    })
})