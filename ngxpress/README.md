# 🚀 NgXpress

> Modular Angular Starter Framework for Enterprise-Grade Web Applications

NgXpress is a scalable, hybrid-architecture Angular boilerplate designed to accelerate frontend development for general-purpose enterprise applications. It provides ready-to-use features like authentication, user management, dynamic forms, modular routing, shared UI components, and a plug-and-play layout system — all powered by modern Angular best practices.

---

## 🧩 Features

✅ Hybrid Architecture (Modules + Standalone Components)  
✅ Auth Module (Login, Register, JWT Mock Service)  
✅ Protected Routing (AuthGuard)  
✅ Modular Feature Structure (Lazy Loading)  
✅ Config-Driven Sidebar + Routing  
✅ Dynamic Forms & Tables (Schema-based)  
✅ Reusable UI Components (Button, Modal, Toast, Inputs)  
✅ TailwindCSS / SCSS Support  
✅ Role-Based Access (Planned)  
✅ NPM Packaging & CLI Scaffolding (Future Phase)

---

## 📁 Folder Structure (Phase 1)

```
src/app/
├── core/               # Global services (AuthService, Guard)
├── shared/             # Standalone UI components, pipes, directives
├── layout/             # Header, Sidebar, Layout Shell
├── modules/
│   ├── auth/           # Login, Register (Standalone Components)
│   ├── user-management/
│   └── dashboard/
├── config/             # Sidebar menu, environment settings
└── app-routing.ts
└── app-config.ts

```

---

## 🚧 Project Status

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Core Frontend Setup + Auth + Layout | 🟢 In Progress |
| Phase 2 | API Integration + Live Services | 🔜 Planned |
| Phase 3 | Plugin System + Role Access + Theme | 🔜 Planned |
| Phase 4 | CLI Tool + NPM Distribution | 🔜 Planned |

Track progress in `projects.md` or Notion *(if using)*.

---

## ⚙️ Getting Started

```bash
# Step 1: Clone the repo
git clone https://github.com/YOUR_USERNAME/ngxpress.git
cd ngxpress

# Step 2: Install dependencies
npm install

# Step 3: Run locally
ng serve
```

---

## 📦 Tech Stack

- Angular 17+
- Standalone Components + NgModules
- TypeScript
- Tailwind CSS / SCSS
- Reactive Forms
- LocalStorage Auth (Mock)
- Angular Router

---

## 📌 Roadmap Highlights

- 🔐 Auth with token service (done)
- 👥 User management (done)
- 📑 Dynamic forms and tables (in progress)
- 🎨 Reusable component library
- 🔌 Module loader system
- 🧪 Testing (Jest + Spectator planned)
- 🚀 NPM packaging for `ngxpress-core`

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

Inspired by best practices from:
- Angular Style Guide (Official)
- Nx, Angular Material, and PrimeNG
- Tailwind UI and other OSS boilerplates