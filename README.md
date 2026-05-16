# PlanXai

🇺🇸 English | [🇺🇦 Українська](./README.ua.md)

AI Operational Intelligence Platform for manufacturing and B2B companies.

PlanXai helps businesses automate operational workflows, detect risks before failures happen, and manage company performance through a unified AI-powered command center.

---

# 🚀 Vision

PlanXai transforms fragmented business operations into a centralized AI operating system.

The platform provides:

- AI-powered executive dashboards
- Meeting → Tasks automation
- Operational risk detection
- Procurement forecasting
- Team performance analytics
- Real-time KPI monitoring

---

# 🎯 Core MVP

The first MVP focuses on one powerful operational workflow:

Meeting  
→ AI Summary  
→ Task Extraction  
→ Risk Detection  
→ Executive Dashboard

---

# 🧠 Main Features

## AI Owner Command Center

- Company health score
- KPI monitoring
- Risk alerts
- Delayed tasks
- AI recommendations

## Meeting → Tasks Automation

- AI-generated meeting summaries
- Automatic task creation
- Deadline assignment
- Responsible person detection
- CRM synchronization

## Risk Intelligence

- Deadline risk detection
- Bottleneck analysis
- Operational alerts
- AI-generated explanations

## Procurement Forecasting

- Inventory monitoring
- Stock depletion prediction
- Supplier analytics
- Purchase recommendations

## Team Performance Analytics

- Workload heatmaps
- SLA tracking
- Performance analytics
- Bottleneck detection

---

# 🏗️ Tech Stack

## Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Zustand
- Recharts
- Framer Motion

## Backend

- FastAPI
- PostgreSQL
- Redis
- Celery

## AI Layer

- OpenAI API
- LangGraph

## Infrastructure

- Docker
- Turborepo
- pnpm

---

# 📁 Repository Structure

/apps

- web → Next.js frontend
- api → FastAPI backend
- worker → background AI jobs

/packages

- ui → shared UI components
- types → shared types
- config → shared configs
- ai-prompts → centralized AI prompts

/infrastructure

- docker
- nginx
- github-actions

/docs

- architecture
- api
- product

---

# ⚡ Development Principles

- Feature-based architecture
- Typed APIs
- Server-first approach
- Reusable UI system
- Event-driven backend
- AI-assisted workflows
- Explainable AI responses

---

# 🧩 Core Architecture

Meeting Upload  
↓  
AI Transcription  
↓  
AI Summary  
↓  
Task Extraction  
↓  
Risk Analysis  
↓  
Dashboard Update

---

# 🔥 Hackathon Goal

Build an AI-powered operational command center that looks and feels like a real enterprise SaaS product.

---

# 📌 Future Roadmap

## Phase 1

- AI meeting processing
- Task automation
- Risk alerts
- Executive dashboard

## Phase 2

- Procurement forecasting
- Team analytics
- Realtime collaboration

## Phase 3

- ERP integrations
- Predictive analytics
- Autonomous AI workflows

---

# 🛠️ Local Development

### 1. Prerequisites
This project uses **pnpm** as a package manager. Make sure you have it installed:
```bash
# Install pnpm globally if you don't have it
npm install -g pnpm
```

### 2. Installation
Install the project dependencies and approve required build scripts (like `msw`):
```bash
pnpm install
pnpm approve-builds
```

### 3. Run the Development Server
Start the local server in development mode:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.