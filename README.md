# Cloning and Modifying a React Project from GitHub

This guide will walk you through the process of cloning a React project from GitHub, making changes to the website, and pushing those changes back to the repository.

## Steps

### 1. Clone the Repository
First, you need to clone the repository from GitHub. Use the `git clone` command followed by the URL of the repository.

```bash
git clone https://github.com/BlockchainFreak/index-test.git
```

### 2. Install Dependencies
Navigate into the cloned repository and install the necessary dependencies using `pnpm install`.

```bash
pnpm install
```

### 3. Start the Development Server
Start the development server using `pnpm dev`.

```bash
pnpm dev
```

### 4. View the Website
Open your browser and navigate to `http://localhost:3000` to view the development server and your website.

### 5. Make Changes to the Website
Now, you can make changes to the website. There is only a single web page. The source code can be founded in `src/pages/index.ts`

### 6. Commit and Push Changes

```bash
git add .
git commit -m "Your descriptive commit message"
git push -u origin main
```

## Resources
Feel free to use Google, ChatGPT, Stack Overflow and other resources to learn more about any of the steps or commands in this guide. Here are a few to get you started:

Happy coding!