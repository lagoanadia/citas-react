# 🩺 Citas React

A React + TypeScript exercise for modelling medical appointments (*citas*) as components with typed props and state. **Work in progress.**

## 📁 Project Structure

```
src/
├── App.tsx            → Root component (will render the list of appointments)
├── dominio/
│   └── Cita.tsx       → Appointment component and its data model
├── App.css / index.css → Styles
└── main.tsx           → React entry point
```

## 🚀 How It Works

Each appointment is described by a `CitaData` interface:

```ts
interface CitaData {
  hora: string;
  paciente: string;
  especialidad: string;
  urgente?: boolean;
  compacta?: boolean;
  seleccionada?: boolean;
}
```

The `Cita` component keeps one `useState` per field, so it can later toggle *urgent*, *compact* view and *selected* states from the UI.

### Current status

The data model and state are in place; the JSX rendering and the list in `App.tsx` are still to be done.

## 🧠 Key Concepts

- **TypeScript interfaces** — required vs optional (`?`) fields
- **`useState`** — one state variable per field
- **Folder by domain** — `dominio/` holds the business entities

## 🛠️ How To Run

```bash
npm install
npm run dev
```
