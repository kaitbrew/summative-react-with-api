# Summative Project 1 - Random Cat Facts App

## Random Cat Facts!

A simple, interactive React web app that fetches and displays random cat facts. Click the button to get a new fact! Built with Vite for fast development and React for component-based UI. 

## Setup Instructions

**Prerequisites:**
- Node.js 14+ (LTS recommended)
- npm or Yarn

**Installation & Running:**

1. Clone the repository:
```bash
git clone <your-repo-url>
cd summative_1/vite-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

4. (Optional) Build for production:
```bash
npm run build
```

Available scripts:
- `npm run dev` — Start Vite dev server
- `npm run build` — Build for production (output in `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint checks

## API Used & Endpoint(s)

**API:** Cat Facts API (https://catfact.ninja/)

**Endpoint used:**
- `GET https://catfact.ninja/fact` — Returns a JSON object containing a random cat fact

**Response format:**
```json
{
  "fact": "Cat fact text here",
  "length": 123
}
```

The app extracts the `fact` field and displays it in the UI. Requests are made each time the user clicks the "Get A Cat Fact" button.

## Challenges & Known Bugs

- **No challenges or known bugs reported** — The app is functioning as intended. The API is reliable and the fetch logic includes basic error handling.
- **Potential improvements:** 
  - Add error state UI (currently just sets fact text to an error message)
  - Add a loading skeleton while fetching
  - Cache recent facts to reduce API calls
  - Add a keyboard shortcut to fetch new facts

---

**Tech Stack:** React, Vite, JavaScript (ESNext)  
**License & Credits:** Student project. Attribution to [catfact.ninja](https://catfact.ninja/) for the API.

