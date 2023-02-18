import { expect, test } from "vitest";
import { Task } from "../task.entity";

test("Should be able to create a new Task instance", () => {
  const task = Task.create({
    name: "Lavar louca",
    urgency: "Urgente",
    id_user: "129083120d092212-01293",
    end_at: "17/05/2023",
  });

  expect(task).toBeInstanceOf(Task);
});

test("A task must have be an id attribute", () => {
  const task = Task.create({
    name: "Lavar louca",
    urgency: "Urgente",
    id_user: "129083120d092212-01293",
    end_at: "17/05/2023",
  });

  expect(task).toHaveProperty("id");
});
