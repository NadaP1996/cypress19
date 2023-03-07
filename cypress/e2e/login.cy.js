/// <reference types="Cypress" /.



describe ("login tests", () => {
    it.only("login with unregistered user", () => {
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get("a[href='/login']").click();
        cy.get("#email").type("random@mail.com")
        cy.get("#password").type("nadapanic16")
        cy.get("button").click();
    });

    it("login without email adress provided", () => {
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get("a[href='/login']").click();
        cy.get("#password").type("nadapanic16")
        cy.get("button").click();
    });

    it("login with invalid passord", () => {
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get("a[href='/login']").click();
        cy.get("#email").type("testtest123@gmail.com");
        cy.get("#password").type("123")
        cy.get("button").click();
    })
    
    it ("login with valid credentials", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        //cy.get ("a[href='/login']").click();
        cy.get (".nav-link").eq(1).click();
        cy.get("#email").type("testtest123@gmail.com");
        cy.get("#password").type("nadapanic16")
        cy.get("button").click();
        
    });
});

/* <a data-v-4295d220="" href="/login" class="nav-link nav-buttons router-link-exact-active router-link-active">
            Login
          </a> */

         /* <input 
                data-v-15717af5="" 
                type="email" 
                id="email" 
                required="required" 
                class="form-control">
          </input> */