# 🍎 Static Fruits API Documentation

A **free, static, read-only REST API** built with **Node.js + Express**, inspired by **JSONPlaceholder**. This API is designed for **learning, frontend testing, and portfolio projects**.

---

## 📌 Overview

* **Type**: Static REST API
* **Authentication**: None
* **Database**: None (JSON-based)
* **Hosting**: Free-tier friendly
* **Write Operations**: Fake (no data persistence)

---

## 🌍 Base URL

```
http://localhost:3000
```

(Will change after deployment)

---

## 🔢 API Versioning

Current version:

```
/api/v1
```

Backward compatibility:

```
/api/fruits  → redirects to /api/v1/fruits
```

---

## 📚 Endpoints

### 1️⃣ Get All Fruits

```
GET /api/v1/fruits
```

#### Query Parameters (optional)

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| `color`   | string | Filter by fruit color       |
| `name`    | string | Filter by fruit name        |
| `search`  | string | Search by name or color     |
| `page`    | number | Page number (default: 1)    |
| `limit`   | number | Items per page (default: 5) |

#### Example Request

```
GET /api/v1/fruits?color=yellow&page=1&limit=2
```

#### Example Response

```json
{
  "version": "v1",
  "totalItems": 2,
  "page": 1,
  "limit": 2,
  "totalPages": 1,
  "data": [
    {
      "id": 2,
      "name": "Banana",
      "color": "Yellow",
      "price": 60
    }
  ]
}
```

---

### 2️⃣ Get Single Fruit

```
GET /api/v1/fruits/:id
```

#### Example Request

```
GET /api/v1/fruits/1
```

#### Example Response

```json
{
  "version": "v1",
  "data": {
    "id": 1,
    "name": "Apple",
    "color": "Red",
    "price": 120
  }
}
```

---

## ✨ Fake Write Operations (JSONPlaceholder Style)

> ⚠️ These endpoints **do not modify data**. They return fake success responses for frontend testing.

---

### 3️⃣ Fake Create Fruit

```
POST /api/v1/fruits
```

#### Request Body

```json
{
  "name": "Kiwi",
  "color": "Green",
  "price": 90
}
```

#### Response

```json
{
  "message": "Fruit created (fake)",
  "version": "v1",
  "data": {
    "id": 999,
    "name": "Kiwi",
    "color": "Green",
    "price": 90
  }
}
```

---

### 4️⃣ Fake Update Fruit

```
PUT /api/v1/fruits/:id
```

#### Request Body

```json
{
  "price": 100
}
```

#### Response

```json
{
  "message": "Fruit updated (fake)",
  "version": "v1",
  "data": {
    "id": "1",
    "price": 100
  }
}
```

---

### 5️⃣ Fake Delete Fruit

```
DELETE /api/v1/fruits/:id
```

#### Example Response

```json
{
  "message": "Fruit deleted (fake)",
  "version": "v1",
  "id": "1"
}
```

---

## 🚀 Use Cases

* Frontend development (React, Vue, Angular)
* API learning & practice
* Portfolio projects
* Demo apps
* Interview demonstrations

---

## 🧠 Design Philosophy

* **Static & safe** → no real data changes
* **Free hosting friendly**
* **Versioned API** for future upgrades
* **JSONPlaceholder-style behavior**

---

## 📈 Future Improvements

* API v2 with real database
* Authentication (JWT / API keys)
* Rate limiting
* Swagger / OpenAPI docs

---

## 👨‍💻 Author

Built for learning and demonstration purposes.

---

✅ **This API is production-structured but learning-focused.**
