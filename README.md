Here’s your updated README with the **“Coming Soon” section removed** and your **additional APIs + version details** clearly explained:

---

🍎 Fruits API (Free & Static)

A simple, **read-only REST API** built using **Node.js + Express**, inspired by JSONPlaceholder.
Perfect for **practice, frontend projects, and demos**.

---

🌍 Live API

👉 [https://my-own-api-3gym.onrender.com/](https://my-own-api-3gym.onrender.com/)

---

📌 What This API Offers

This project now includes multiple static APIs:

* 🍎 Fruits API
* 🐶 Animals API
* 🌍 Countries API
* 👕 Men Clothes API(with images)
* 👤 Users API

All APIs are **free, public, and require no authentication**.

---
⚙️ Base URL

```
https://my-own-api-3gym.onrender.com/api
```

---

🔢 API Versions

✅ API v1 (Detailed Responses)

* Includes metadata like:

  * total items
  * pagination
  * page info
* Best for **backend integration** and structured apps

**Example:**

```
/api/v1/fruits
```

---

⚡ API v2 (Simple Responses)

* Returns **plain arrays (JSONPlaceholder style)**
* No metadata, cleaner responses
* Best for **frontend apps (React, Vue, Angular)**

**Example:**

```
/api/v2/fruits
```

---

📚 Example Endpoints

🍎 Get All Fruits

```
GET /api/v1/fruits
GET /api/v2/fruits
```

---

🔍 Query Options (v1 only)

| Param  | Example       | Description          |
| ------ | ------------- | -------------------- |
| color  | `?color=red`  | Filter by color      |
| name   | `?name=apple` | Filter by name       |
| search | `?search=ap`  | Search name or color |
| page   | `?page=2`     | Page number          |
| limit  | `?limit=5`    | Items per page       |

---

🍏 Get Single Item

```
GET /api/v1/fruits/:id
GET /api/v2/fruits/:id
```

---

👤 Users API

Access a complete and reliable user dataset including:

* Name
* Email
* Age
* Full address

**Example:**

```
GET /api/v1/users
GET /api/v2/users
```

---

✨ Fake Write Endpoints (Testing Only)

These endpoints **do NOT store data**.
They return fake success responses for practice.

```
POST   /api/v1/:resource
PUT    /api/v1/:resource/:id
DELETE /api/v1/:resource/:id
```

---

🚀 Why Use This API?

* Practice real-world API usage
* Build frontend apps without backend
* Use in portfolios & demos
* Learn filtering, pagination & versioning

---

🧠 Key Features

* ✅ Multiple APIs in one place
* ✅ Two response formats (v1 & v2)
* ✅ No authentication required
* ✅ Beginner-friendly
* ✅ Safe (no real data changes)
* ✅ Free to use

---

👨‍💻 Author

Built for learning, testing, and showcasing API development skills.

 
