# Architecture

INAIS uses a multi-service architecture:

1. **Web Portal**: Next.js public + admin UI.
2. **Mobile App**: Expo app for citizen access.
3. **API Gateway**: Fastify service with domain APIs.
4. **AI Orchestrator**: agent routing, RAG placeholder, safety filters, model routing.
5. **Data Layer**: PostgreSQL for operational data, Redis for cache/jobs, future vector DB for semantic search.
6. **Governance Layer**: audit logs, risk levels, human review workflow, compliance exports.

Future additions: pgvector/Qdrant, object storage, Kafka, identity provider, Kubernetes, Terraform, public dataset ingestion, court and civic API connectors.
