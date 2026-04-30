# CaseBridge — Система команд

Платформа для верификации опыта джуниоров через решение реальных бизнес-кейсов.  
Данный репозиторий содержит реализацию **системы команд**, позволяющей джуниорам объединяться для совместной работы над кейсами, а компаниям — просматривать все существующие команды.

## 📁 Структура проекта

- `backend/` — Python-сервер на FastAPI, REST API, работа с PostgreSQL.
- `frontend/` — Next.js (React, TypeScript, Tailwind), пользовательский интерфейс.

## 🚀 Быстрый старт

### Бэкенд

```bash
cd backend
python -m venv venv
# Активировать venv (Windows: venv\Scripts\activate, Mac/Linux: source venv/bin/activate)
pip install -r requirements.txt
# Создать .env по образцу .env.example
alembic upgrade head
uvicorn app.main:app --reload
