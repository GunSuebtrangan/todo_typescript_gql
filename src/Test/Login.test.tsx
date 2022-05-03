import React from "react";
import { shouldButtonDisable } from "../helpers/loginHelpers";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Login from "../Component/Login";

beforeEach(() => {
  jest.clearAllMocks();
});
describe("test should button algor", () => {
  test("test email type string and password type string", () => {
    const email: string = "test@email.com";
    const password: string = "1234567";
    const expectResult: boolean = false;
    const result: boolean = shouldButtonDisable(email, password);
    expect(result).toBe(expectResult);
  });
  test("test email type string null and password type string null", () => {
    const email: string = "";
    const password: string = "";
    const expectResult: boolean = true;
    const result: boolean = shouldButtonDisable(email, password);
    expect(result).toBe(expectResult);
  });
  test("test email type string null and password type string not null", () => {
    const email: string = "";
    const password: string = "1234567";
    const expectResult: boolean = true;
    const result: boolean = shouldButtonDisable(email, password);
    expect(result).toBe(expectResult);
  });
  test("test email type string not null and password type string null", () => {
    const email: string = "test@email.com";
    const password: string = "";
    const expectResult: boolean = true;
    const result: boolean = shouldButtonDisable(email, password);
    expect(result).toBe(expectResult);
  });
  test("test email type string not null and password type string not null password less than 6", () => {
    const email: string = "test@email.com";
    const password: string = "12345";
    const expectResult: boolean = true;
    const result: boolean = shouldButtonDisable(email, password);
    expect(result).toBe(expectResult);
  });
});

// describe("test ", () => {
//   console.log("6666");
//   test("check signin", async () => {
//     const fakeUser = {
//       name: "Joni Baez",
//       age: "32",
//       address: "123, Charming Avenue",
//     };
//     jest.spyOn(Login, "signInWithEmailAndPassword").mockImplementation(() => {
//       Promise.resolve({
//         json: () => Promise.resolve(fakeUser),
//       });
//     });
//     await act(async () => {
//       render(<Login />, container);
//     });
//     expect(container.querySelector("label").textContent).toBe("");
//   });
// });

// import React from "react";
// import { shouldButtonDisable } from "../helpers/loginHelpers";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import Login from "../Component/Login";
// import "regenerator-runtime/runtime";
// import { loginAuth } from "../helpers/loginHelpers";
// let container: any = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });
// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });
// it("check signin", async () => {
//   const fakeUser = {
//     name: "test",
//   };
//   jest
//     .spyOn(loginAuth, "signInWithEmailAndPassword ")
//     .mockImplementation(() => {
//       Promise.resolve({
//         json: () => Promise.resolve(fakeUser),
//       });
//     });
//   await act(async () => {
//     render(<Login />, container);
//   });
//   expect(container.querySelector("label").textContent).toBe("");
// });
