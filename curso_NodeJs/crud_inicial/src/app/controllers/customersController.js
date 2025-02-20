import Customer from '../models/Customer';

let customers  = [
    { id: 1, name: "Rythielly", site: "www.rythielly.com" },
    { id: 2, name: "José", site: "www.jose.com" },
    { id: 3, name: "João", site: "www.joao.com" },
  ];

class customersController {

  async index(req, res) {
    const data = await Customer.findAll();
    return res.json(data);
  }

  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 400;
    return res.status(status).json(customer);
  }

  create(req, res) {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;
    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
  }

  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers[index] = { id: parseInt(id), name, site };
    }

    return res.status(status).json(customers[index]);
  }

  delete(req, res) {
    /*
    server.delete('/customers/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 : 400;
        customers = customers.filter(obj => obj.id !== id);

        res.status(status).json();
    });
    */

    const id = parseInt(req.params.id);
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 400;

    if (index >= 0) {
      customers.splice(index, 1); //localiza o index e apaga o objeto
    }

    return res.status(status).json();
  }
}

export default new customersController();