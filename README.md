# HBO Quiz

React frontend + C# ASP.NET Core backend.

## Vereisten
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js 20+](https://nodejs.org)

## Backend starten

```bash
cd backend
dotnet run
```

Draait op **http://localhost:5000**

## Frontend starten

```bash
cd frontend
npm install
npm run dev
```

Draait op **http://localhost:5173** — gaat automatisch naar `/sectie/1`

> Start altijd eerst de backend, dan de frontend.

## API endpoints

| Method | URL | Beschrijving |
|--------|-----|--------------|
| GET | /api/quiz/sections | Alle secties |
| GET | /api/quiz/sections/{id}/questions | Vragen van een sectie |
| POST | /api/quiz/submit | Antwoorden inleveren |
