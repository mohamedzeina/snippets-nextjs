## Description
Snippets is a Next.js application styled with Tailwind CSS. It utilizes Prisma to manage a local SQLite database for storing code snippets, each comprising a title and code content.

Key functionalities include:

* Listing Snippets: View all existing snippets.
* Creating Snippets: Add new snippets with titles and code.
* Viewing Snippets: Access details of a specific snippet.
* Editing Snippets: Modify snippet content using the Monaco Editor.
* Deleting Snippets: Remove snippets from the database.

Caching optimizations were implemented using `revalidatePath` (on-demand caching) to address varying behaviors observed between the development and production versions of the application.

## How To Run Locally
First, clone the repo to your local machine:
```
git clone https://github.com/mohamedzeina/snippets-nextjs.git
```
Then move into the project's directory:
```
cd snippets-nextjs
```
Then, install dependencies by running the following command:
```
npm install 
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

