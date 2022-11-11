describe("Delete rooms test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deletes a room", () => {
    // Check room has 18 entries
    cy.getByData("room-item").should("have.length", 18);
    cy.getByData("delete-icon").eq(0).click();
  });
});

export {};
