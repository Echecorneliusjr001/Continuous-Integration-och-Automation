
const axios = require("axios");

const BASE_URL = "https://fakestoreapi.com";

describe("FakeStore API – Advanced integration tests", () => {

  test("GET /products returns status 200", async () => {
    const res = await axios.get(`${BASE_URL}/products`);
    expect(res.status).toBe(200);
  });

  test("GET /products returns expected number of products", async () => {
    const res = await axios.get(`${BASE_URL}/products`);
    expect(res.data.length).toBe(20);
  });

  test("Product contains required fields", async () => {
    const res = await axios.get(`${BASE_URL}/products`);
    const product = res.data[0];

    expect(product).toHaveProperty("title");
    expect(product).toHaveProperty("price");
    expect(product).toHaveProperty("category");
  });

  test("GET /products/1 returns correct product", async () => {
    const res = await axios.get(`${BASE_URL}/products/1`);

    expect(res.status).toBe(200);
    expect(res.data.id).toBe(1);
    expect(res.data).toHaveProperty("title");
    expect(res.data).toHaveProperty("price");
    expect(res.data).toHaveProperty("category");
  });

});
