# Store API

# Project Description

It is a versatile API for searching and retrieving product information. Seamlessly filter products by features, company, name, and apply numeric filters. The API supports dynamic sorting, field selection, and provides endpoints for both general product queries and specific static conditions.


## Setup
1. npm i 
2. Add your kown MONGO_URI to .env file.
3. num run start

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

### 2. Get Products with Static Price Condition

#### Endpoint: `/api/products/static`

- **Description:** Retrieve products with prices greater than 30.

#### Example Usage:

```plaintext
GET /api/products/static
```
