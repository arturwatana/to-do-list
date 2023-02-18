import { expect, test } from "vitest";
import { User } from "./user.entity";

test("Should be able to create a new User", () => {
  const userMock: User = User.create({
    name: "John",
    email: "johndoe@gmail.com",
    username: "johndoe",
    password: "123456",
    created_at: new Date(),
  });

  expect(userMock).toBeInstanceOf(User);
});

test("Should not be able to create a new User without required fields", () => {
  expect(() => {
    const userMock: User = User.create({
      name: "John",
      username: "",
      email: "johndoe@gmail.com",
      password: "123456",
      created_at: new Date(),
    });
  }).toThrow("Required fields are missing!");
});

test("A User must have an id attribute after created", () => {
  const userMock: User = User.create({
    name: "John",
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "123456",
    created_at: new Date(),
  });

  expect(userMock).toHaveProperty("id");
});
