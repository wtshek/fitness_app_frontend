import { exercisesGroup } from "##/data/exercises";
import { BASE_URL } from "##/services/api/utils";
import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get(`${BASE_URL}/exercise-groups`, (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(exercisesGroup));
  })
);

worker.start();
