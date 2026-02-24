import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import JSZip from 'npm:jszip@3.10.1';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const zip = new JSZip();

    // package.json
    const packageJson = {
      name: "gy900e-website",
      version: "1.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview"
      },
      dependencies: {
        "@tanstack/react-query": "^5.0.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.20.0",
        "date-fns": "^3.0.0",
        "lucide-react": "latest",
        "framer-motion": "^11.0.0",
        "sonner": "^1.3.0"
      },
      devDependencies: {
        "@vitejs/plugin-react": "^4.2.1",
        "vite": "^5.0.0",
        "tailwindcss": "^3.4.0",
        "autoprefixer": "^10.4.16",
        "postcss": "^8.4.32"
      }
    };
    zip.file("package.json", JSON.stringify(packageJson, null, 2));

    // README.md
    const readme = `# GY900E-AS4 Power Meter Website

Professional website for GY900E-AS4 Three-Phase Multifunction Power Analyzer.

## Features

- Product showcase with image gallery
- Technical specifications
- Inquiry form
- Responsive design
- Modern UI with Tailwind CSS

## Tech Stack

- React
- Tailwind CSS
- Vite
- React Router
- Framer Motion

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

### Build

\`\`\`bash
npm run build
\`\`\`

## Product Information

**Model:** GY900E-AS4  
**Type:** Three-Phase Multifunction Power Analyzer  
**Dimensions:** 72×72mm  
**Accuracy:** 0.5%  
**Communication:** RS485 Modbus

## Company

**Guangzhou Xiaoyu Import and Export Co., Ltd.**  
Email: summer@yucore.ltd  
Phone: +86 150 1848 5957  
Address: A256, 1st Floor, Shop 114, Nansha District, Guangzhou, China

## License

© 2025 Guangzhou Xiaoyu Import and Export Co., Ltd. All rights reserved.
`;
    zip.file("README.md", readme);

    // .gitignore
    const gitignore = `# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
/coverage

# Production
/build
/dist

# Misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
`;
    zip.file(".gitignore", gitignore);

    // vite.config.js
    const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
`;
    zip.file("vite.config.js", viteConfig);

    // tailwind.config.js
    const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;
    zip.file("tailwind.config.js", tailwindConfig);

    // postcss.config.js
    const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;
    zip.file("postcss.config.js", postcssConfig);

    // index.html
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GY900E-AS4 Power Meter</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
    zip.file("index.html", indexHtml);

    // SETUP_INSTRUCTIONS.md
    const setupInstructions = `# Setup Instructions for GitHub

## Step 1: Download and Extract
You've already downloaded the \`github-setup.zip\` file. Extract it to your desired location.

## Step 2: Copy Your Base44 Code
Copy all your page files and components from Base44 into the \`src\` folder:
- Create \`src/pages/\` and copy all .js/.jsx files from pages/
- Create \`src/components/\` and copy all component files
- Copy Layout.js to \`src/Layout.js\`
- Copy entities/ folder to \`src/entities/\`

## Step 3: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "gy900e-website")
3. Don't initialize with README (we already have one)

## Step 4: Push to GitHub
Run these commands in your project folder:

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gy900e-website.git
git push -u origin main
\`\`\`

## Step 5: Deploy (Optional)
- **Vercel**: Connect your GitHub repo at https://vercel.com
- **Netlify**: Connect your GitHub repo at https://netlify.com
- **GitHub Pages**: Enable in repository settings

## Notes
- Replace YOUR_USERNAME with your actual GitHub username
- Make sure to install dependencies: \`npm install\`
- Update the repository URL in the commands above
- The website will need a backend for the inquiry form to work

## Need Help?
Contact: summer@yucore.ltd
`;
    zip.file("SETUP_INSTRUCTIONS.md", setupInstructions);

    // Generate zip
    const zipBlob = await zip.generateAsync({ type: "uint8array" });

    return new Response(zipBlob, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="github-setup.zip"',
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});