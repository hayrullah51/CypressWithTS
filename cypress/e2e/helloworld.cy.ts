describe("template spec", () => {
  it("passes", () => {
    cy.log("Hello World");
  });
  it("Typescript intration", () => {
    let stringVariable: string = "9";
    let numberVariable: number = 0;
    let booleanVariable: boolean = true;
    let anyVariable: any = false; // I can write any type I want.

    function addTwoNumbers(a:number,b:number):number { 
      return a + b;
    }

    interface User {
      username: string;
      password: string;
    }

    function returningUserInformation (user:User):void{
      console.log('This is the username : ' + user.username)
      console.log('This is the password : ' + user.password)
    }
  });
});
