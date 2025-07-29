# 🚀 StackBuilders Repositories Viewer

Este proyecto muestra los repositorios públicos de la organización [StackBuilders](https://github.com/stackbuilders) usando una arquitectura **frontend + backend**:

- 📦 **Backend:** Node.js + Express + GitHub API
- 💻 **Frontend:** React (Create React App)

---

## 📁 Estructura del proyecto
── backend/ → Servidor Express que consulta GitHub y expone una API.

── frontend/ → Aplicación React que consume esa API


---

## ⚙️ Requisitos previos

- Node.js 18 o superior
- npm o yarn

---

## 🛠️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/xaviercarpio13/REST-API-SB-Github
```
### 2. Backend
``` bash
cd backend
npm install
npm start
```

##### Endpoints disponibles:
 | Método | Ruta                                | Descripción                           |
| ------ | ----------------------------------- | ------------------------------------- |
| GET    | `/repositories`                     | Todos los repos de StackBuilders      |
| GET    | `/repositories/five-stars`          | Repos con 5+ estrellas                |
| GET    | `/repositories/last-updated/:count` | Últimos repos actualizados            |
| GET    | `/repositories/stars/total`         | Total de estrellas de todos los repos |

### 3. Frontend
``` bash
cd frontend
npm install
npm start
```
## Autor
Developed by @xaviercarpio13 ✌️

