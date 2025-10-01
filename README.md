<<<<<<< HEAD
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/b6e314df-9ae6-4651-b5fc-0423237c3350

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b6e314df-9ae6-4651-b5fc-0423237c3350) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b6e314df-9ae6-4651-b5fc-0423237c3350) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
=======
# QBK Solutions Website

Production marketing site for QBK Solutions built with Vite + React + TypeScript + Tailwind + shadcn/ui.

## Tech Stack
- Vite (bundler)
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui components
- Radix UI primitives

## Local Development
```bash
git clone https://github.com/QBKsolution/qbksolutions.git
cd qbksolutions
npm install
npm run dev
```
App runs by default at: http://localhost:8080

## Production Build
```bash
npm run build
npm run preview   # Optional local preview of dist
```

## Deployment (GitHub Pages)
Automatic via GitHub Actions workflow at `.github/workflows/deploy.yml` on pushes to `main`.

Custom domain: `qbksolution.com` managed via `CNAME` file.

### SPA Routing Support
`404.html` provides fallback so deep links route correctly with React Router.

## Project Structure (key folders)
```
src/
  components/
  pages/
  assets/
  hooks/
```

## Environment Variables
Currently no runtime env vars required. Add as needed via import.meta.env pattern.

## Contributing
1. Create a feature branch.
2. Commit changes (conventional or clear messages).
3. Push and open a PR.

## License
Proprietary – All rights reserved © QBK Solutions.

---
For questions or support contact: +1 8882744313
>>>>>>> afc3c4dd4cd4e7a1bd345514ec9374bc2b6b9055
