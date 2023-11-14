# Store API

This is a description of your project.

## Features

### 1. Get All Products

#### Endpoint: `/api/products`

- **Description:** Retrieve a list of products based on various search parameters.

#### Query Parameters:

- `featured` (Boolean): Filter by featured products.
- `company` (String): Filter by company name.
- `name` (String): Filter by product name (case-insensitive, supports pattern matching).
- `sort` (String): Sort the results by specified fields.
- `fields` (String): Select specific fields to be included in the response.
- `numericFilters` (String): Apply numeric filters on fields like price and rating.

#### Example Usage:

```plaintext
GET /api/products?featured=true&company=ExampleCompany&name=example&sort=price&fields=name,price
```
