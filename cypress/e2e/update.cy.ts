describe("update rooms test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("updates a room", () => {
    // Check room has 18 entries
    cy.getByData("edit-icon").eq(0).click();
    cy.getByData("building-input").eq(0).click();

    // clear existing text
    cy.getByData("number-input").clear();
    cy.getByData("number-input").type("123123");
    cy.getByData("capacity-input").clear();
    cy.getByData("capacity-input").type("49");
    cy.getByData("type-input").eq(0).click();
    cy.getByData("submit-button").click();
    cy.getByData("success-alert").should("exist");
    cy.visit("/");
    cy.getByData("room-item").contains(/123123/);
  });
});

export {};
