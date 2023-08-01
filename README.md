# Automated Wholesale Warehouse


A website where you can order wholesale items and have them sent to a dock for you to pick up.

## Tech Stack


**Server:** Node, Express, MongoDB, Mongoose, JWT, Bcryptjs, dotenv, Cors


## Features

- [User] Create Account/Login
- [User] Create Cart
- [User] Add/Remove Items from cart
- [User] Purchase cart


## API Reference

#### Get all products

```http
  GET /api/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get product

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create cart

```http
  POST /api/create-cart
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Update cart

```http
  PUT /api/update/cart/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

