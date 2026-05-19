Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog,
and this project adheres to Semantic Versioning.

[0.9.0] - 2026-04-15

Added

Multi-Database Support: Added full connection drivers for both PostgreSQL and MongoDB database architectures.

Custom Domains: Implemented automated SSL certificate generation and custom domain binding for deployed APIs.

Billing integration: Added Lemon Squeezy and Razorpay payment integrations to authorize paywalled backend endpoints.

Auto-generated SDKs: Introduced a CLI build step that automatically exports TypeScript/JavaScript SDK clients based on project schemas.

Changed

Connection Pooling: Refactored the core database connection pool lifecycle to dynamically scale based on active CPU core count.

API Routing: Optimised prefix routing tables inside the router middleware, reducing middleware routing latency by 14%.

Fixed

JWT Mismatch: Resolved an edge case where token validation would occasionally fail during rapid concurrent token-refresh operations.

CORS Configuration: Fixed a bug preventing wildcard domains (*) from being resolved properly under complex proxy configurations.

[0.8.0] - 2026-02-10

Added

API Rate Limiting: Implemented configurable IP-based and user-token-based rate limiters for public routes.

Webhooks: Added outgoing webhook subscription handlers, allowing external services to receive event updates on data mutations.

Role-Based Access Control (RBAC): Integrated granular access policies to protect specific collections by assigning roles (e.g., Admin, Moderator, User).

Changed

Session Tracking: Updated user session storage to utilize Redis memory storage when available, defaulting back to file-based session stores in minimal environments.

Fixed

Query Parser Error: Fixed a syntax error in the API endpoint query parser that occurred when handling deeply nested JSON filter queries.

[0.7.0] - 2025-12-05

Added

Storage Buckets: Added native support for S3-compatible cloud storage providers (S3, MinIO, DigitalOcean Spaces).

Advanced Query Filters: Introduced dynamic syntax operators to APIs: $or, $and, $in, along with pagination params (limit, skip).

Dashboard UI Enhancements: Rebuilt the collections management interface using an interactive spreadsheet-style grid.

Fixed

Upload Timeout: Patched an issue where multi-part file uploads larger than 50MB would prematurely close connection pipelines.

[0.6.0] - 2025-10-18

Added

Authentication Engine: Implemented standard JSON Web Token (JWT) flow parameters complete with sign-up, login, and secure logout handlers.

Email Mailers: Added SMTP provider bindings for dynamic verification, onboarding, and password reset email automation.

Changed

Logger Format: Upgraded standard system output logs to standard structured JSON format to aid in production monitoring (Datadog/Winston format).

[0.5.0] - 2025-08-12

Added

Visual Schema Builder: Built an interactive GUI inside the management dashboard to visually define schemas and field validation criteria.

Custom Header Middleware: Allowed developers to configure global response headers through the project management dashboard interface.

Fixed

Validation Fallback: Handled cases where empty or undefined string fields would fail validation rather than falling back to schema default values.

[0.4.0] - 2025-06-01

Added

CLI Initialization Wizard: Introduced the urbackend init interactive terminal command to instantly bootstrap local project configurations.

Environment variables loader: Integrated an automated mechanism to read and apply .env parameters during framework boot sequence.

Changed

Route Initialization: Relocated the middleware mounting execution pipeline to run earlier in the server boot process.

[0.3.0] - 2025-04-10

Added

Automated Mock Data Generator: Added a feature to populate collections with realistic placeholder records during testing environments.

Health Check Endpoint: Implemented standard /health status endpoints returning system resource statistics (CPU, memory, database connection state).

Fixed

Process Leak: Resolved a critical bug causing isolated Node.js child-processes to remain suspended in memory after hot-reloading configurations.

[0.2.0] - 2025-02-15

Added

Developer Live Reloading: Integrated instant runtime rebuild configuration triggers for quicker localized API development cycles.

Local JSON Database Support: Created a local filesystem-based database driver (db.json) for zero-dependency prototyping.

Changed

Error Handling Architecture: Standardized error formats to return consistent API response payloads containing { error: true, message: "..." }.

[0.1.0] - 2024-12-01

Added

Initial Public Engine Release: Established core service framework engine allowing immediate creation of relational/NoSQL API collections.

Instant CRUD Generation: Automated exposure of POST, GET, PUT, and DELETE endpoints immediately upon collection declaration.

Documentation Engine: Auto-generated Swagger/OpenAPI runtime interface for visual testing of newly launched endpoints.