# INAIS Gov AI Suite — Initial Version

Inter-National AI Infrastructure Suite starter for a government-style web portal, mobile application, backend API, AI orchestration service, PostgreSQL, Redis, Docker, seeded demo data, governance audit logs, and future national-priority modules.

## Modules in V0.1
- Government web portal: dashboard, missions, services, chatbot UI, document intake, audit view.
- Mobile app scaffold: React Native / Expo citizen app.
- API service: Fastify + Prisma + PostgreSQL.
- AI orchestrator: policy-safe RAG/agent placeholder endpoints.
- Seed data: legal, education, MSME, agriculture, health, energy, civic, cyber missions.
- Docker Compose stack: web, API, AI orchestrator, Postgres, Redis.

## Run locally
```bash
cp .env.example .env
docker compose up --build
```

Web: http://localhost:3000  
API: http://localhost:4000/health  
AI Orchestrator: http://localhost:4100/health

## GitHub deploy
```bash
git init
git add .
git commit -m "Initial INAIS government AI suite"
git branch -M main
git remote add origin https://github.com/<your-user>/inais-gov-ai-suite.git
git push -u origin main
```

## Production roadmap
See `docs/ROADMAP.md` and `docs/ARCHITECTURE.md`.
