# Raisio

A lightweight client-side auth app built with Next.js, TypeScript, and Tailwind CSS for a hiring task. Features a login flow for Iranian users with mobile validation, API integration, and a dashboard.

## Features

- **Login Page**: Validates Iranian mobile numbers (`09xxxxxxxxx`, `+989xxxxxxxxx`, `00989xxxxxxxxx`). Fetches mock user data from [randomuser.me](https://randomuser.me/api/?results=1&nat=us), saves to `localStorage`, redirects to dashboard.
- **Dashboard**: Shows welcome message with user's name, and logout button (clears `localStorage`, redirects to login).
- **Auth Guard**: Redirects to login if no user data in `localStorage`.
- **UI/UX**: Mobile-first, responsive, Persian RTL, accessible (ARIA, focus-visible).
- **State**: Managed via React Context API.

## Tech Stack

- Next.js 15+ (App Router)
- TypeScript (strict, no `any`)
- Tailwind CSS + ShadCN/ui
- `localStorage` for client-side persistence
- Regex for mobile validation

## Setup & Run

1. Clone repo:
   git clone https://github.com/kouroshey/raisio.git
   cd raisio https://github.com/kouroshey/raisio.git

2. Install:
   pnpm install

3. Run dev server:
   pnpm run dev
   - Opens at `http://localhost:3000`.

4. Build for prod:
   pnpm run build && pnpm run start

## Usage

- **Login**: Enter valid Iranian mobile (e.g., `09123456789`), click "Login" → redirects to dashboard.
- **Dashboard**: Shows user’s name/pic; click "Logout" → back to login.
- **Notes**: Validates mobile with regex, handles API errors, supports RTL.

## Deployment

- Deploy to Vercel: Link GitHub repo in Vercel dashboard.
- Live: [Vercel Link](https://raisio.vercel.app/).

## License

MIT – Free to use/modify.
