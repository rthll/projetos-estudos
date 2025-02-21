import { Router } from 'express';
import customers from "./app/controllers/customersController";

const routes = new Router();

routes.get("/customers", customers.show);
routes.get("/customers/:id", customers.index);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.delete);

export default routes;
