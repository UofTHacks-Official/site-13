# UofTHacks 13 - Landing Page

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules + Styled Components (Emotion)
- **UI Components**: Material-UI (MUI)
- **HTTP Client**: Axios
- **Validation**: Zod
- **Code Quality**: ESLint + Prettier + Husky

## 📋 Prerequisites

This project requires **Node.js 22.15.0** or higher. We enforce this through multiple methods:

### Option 1: Using NVM (Recommended)

````bash
# Install and use the correct Node version
nvm install
nvm use

### Option 2: Manual Installation
- Install Node.js 22.15.0+ from [nodejs.org](https://nodejs.org/)
- Verify: `node --version` should show v22.15.0 or higher

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd site-13
````

2. Ensure you're using the correct Node version:

```bash
node --version  # Should be v22.15.0 or higher
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Development Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run check-all` - Run all quality checks

[![CI](https://github.com/UofTHacks-Official/site-13/workflows/CI/badge.svg)](https://github.com/UofTHacks-Official/site-13/actions)
