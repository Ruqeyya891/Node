const blogs = [
    {
      id: "1",
      title: "Express.js ilə İlk REST API (GET/POST/PUT/DELETE)",
      category: "Node.js",
      desc: "Express qurulumu, routing və sadə CRUD endpoint-lərin yazılması (praktik nümunə).",
      image: "/images/blog/node-rest-api.jpg",
      tags: ["nodejs", "express", "rest", "crud"]
    },
    {
      id: "2",
      title: "Middleware nədir? (Global, Route-level, Error)",
      category: "Node.js",
      desc: "req-res arasındakı işləmə məntiqi, next(), və error middleware-in düzgün istifadəsi.",
      image: "/images/blog/node-middleware.jpg",
      tags: ["nodejs", "express", "middleware"]
    },
    {
      id: "3",
      title: "Nodemon və Scripts: dev mühiti necə qurulur?",
      category: "Node.js",
      desc: "nodemon quraşdırılması, package.json scripts və server restart prosesinin rahatlaşdırılması.",
      image: "/images/blog/node-nodemon.jpg",
      tags: ["nodejs", "nodemon", "npm", "scripts"]
    },
    {
      id: "4",
      title: "Status Kodlar: 200, 201, 400, 401, 404, 500 — nə vaxt hansını verək?",
      category: "Node.js",
      desc: "API-də doğru HTTP status kod seçimi və real case-lər (validation, not found, server error).",
      image: "/images/blog/node-status-codes.jpg",
      tags: ["nodejs", "http", "status-codes", "api"]
    },
    {
      id: "5",
      title: "MongoDB Intro: Collection, Document və CRUD məntiqi",
      category: "Node.js",
      desc: "MongoDB əsas anlayışlar və Node.js ilə sadə CRUD əməliyyatlarının ümumi strukturu.",
      image: "/images/blog/node-mongodb-intro.jpg",
      tags: ["nodejs", "mongodb", "database", "crud"]
    },
    {
      id: "6",
      title: "Pagination necə işləyir? (limit, page, skip)",
      category: "Node.js",
      desc: "Server tərəfdə pagination məntiqi və praktiki nümunə ilə izah.",
      image: "/images/blog/node-pagination.jpg",
      tags: ["nodejs", "pagination", "api"]
    },
    {
      id: "7",
      title: "Query və Route Params fərqi",
      category: "Node.js",
      desc: "req.params və req.query arasındakı fərq və real istifadə nümunələri.",
      image: "/images/blog/node-params.jpg",
      tags: ["nodejs", "express", "params"]
    },
    {
      id: "8",
      title: "MVC Pattern Node.js-də necə qurulur?",
      category: "Node.js",
      desc: "Controller, Service və Model strukturu ilə təmiz arxitektura qurmaq.",
      image: "/images/blog/node-mvc.jpg",
      tags: ["nodejs", "mvc", "architecture"]
    },
    {
      id: "9",
      title: "JWT Authentication nədir və necə işləyir?",
      category: "Node.js",
      desc: "Token əsaslı authentication sistemi və praktiki tətbiqi.",
      image: "/images/blog/node-jwt.jpg",
      tags: ["nodejs", "jwt", "auth"]
    },
    {
      id: "10",
      title: "Environment Variables (.env) istifadəsi",
      category: "Node.js",
      desc: "dotenv paketi və təhlükəsiz konfiqurasiya idarəetməsi.",
      image: "/images/blog/node-env.jpg",
      tags: ["nodejs", "dotenv", "env"]
    },
    {
      id: "11",
      title: "CORS problemi və həlli",
      category: "Node.js",
      desc: "Cross-Origin məsələləri və cors middleware istifadəsi.",
      image: "/images/blog/node-cors.jpg",
      tags: ["nodejs", "cors", "api"]
    },
    {
      id: "12",
      title: "File Upload (Multer) necə işləyir?",
      category: "Node.js",
      desc: "Şəkil və fayl yükləmə üçün multer paketi ilə praktik nümunə.",
      image: "/images/blog/node-file-upload.jpg",
      tags: ["nodejs", "multer", "upload"]
    },
    {
      id: "13",
      title: "Async/Await və Promise məntiqi",
      category: "Node.js",
      desc: "Asinxron proqramlaşdırma və callback hell-dən çıxış yolu.",
      image: "/images/blog/node-async.jpg",
      tags: ["nodejs", "async", "promise"]
    },
    {
      id: "14",
      title: "Express Router istifadəsi",
      category: "Node.js",
      desc: "Route-ları modullara bölmək və layihəni daha oxunaqlı etmək.",
      image: "/images/blog/node-router.jpg",
      tags: ["nodejs", "express", "router"]
    },
    {
      id: "15",
      title: "API-də Validation necə yazılır?",
      category: "Node.js",
      desc: "express-validator və custom validation məntiqi.",
      image: "/images/blog/node-validation.jpg",
      tags: ["nodejs", "validation", "api"]
    }
  ];
  
  module.exports = blogs;