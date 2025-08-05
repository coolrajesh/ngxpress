# 📅 NgXpress Project Roadmap

A detailed phase-wise and day-wise execution plan for building the `NgXpress` modular Angular boilerplate.

---

## ✅ Phase 1: Core Frontend Framework (MVP)

### Week 1
| Day | Task |
|-----|------|
| Day 1 | Project setup with Angular 17 and Tailwind/SCSS, layout module with sidebar and header |
| Day 2 | Auth module: login, register, auth service, mock token, route guards |
| Day 3 | User management module: list, add/edit form, mock service |
| Day 4 | Create shared components: Button, Modal, Toast, Input |
| Day 5 | Setup config-driven sidebar and routes |
| Day 6 | Dynamic table & form builders (JSON schema-based) |
| Day 7 | Refactor, test routing and guards, polish layout responsiveness |

### Week 2
| Day | Task |
|-----|------|
| Day 8 | Create `core/` services (interceptors, global error handler) |
| Day 9 | Add pagination, sorting, filtering utilities |
| Day 10 | Implement theme switching (light/dark via Tailwind classes) |
| Day 11 | Create error pages (403, 404, fallback) |
| Day 12 | Final polish and test all modules |
| Day 13 | Documentation for Phase 1 |
| Day 14 | Push to GitHub, tag version, prepare for API integration |

---

## 🔄 Phase 2: API Integration (Planned)

- Setup base `ApiService` using HttpClient
- JWT auth integration with refresh tokens
- Environment-based endpoint configs
- Replace mocks with real API models

---

## 🔌 Phase 3: Plugin System (Planned)

- Module/plugin loader with `modules.config.ts`
- Role-based routing and visibility
- i18n language support
- Custom theme tokens and dynamic layouts

---

## 🚀 Phase 4: CLI + SaaS Builder (Planned)

- `create-ngxpress` CLI scaffolding tool
- Pre-packaged modules (`ngxpress-core` on npm)
- Project templates: HRMS, LMS, CMS
- Hosting/Deployment guide (Vercel/Netlify)

---

## ✅ Tracking Tips

- Use [Trello](https://trello.com), [Notion](https://notion.so), or GitHub Projects for live tracking.
- Update this `projects.md` after every phase or release.
- Tag GitHub releases like: `v0.1-mvp`, `v0.2-api`, etc.

---

Happy building 🚀 — you're making Angular development faster for everyone!