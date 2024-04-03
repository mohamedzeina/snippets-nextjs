## Description
Simple application done with NextJS and TailWind.css. Prisma was used to create a local SQLite database to store snippets.
Snippets represent snippets of code and they have two attributes:
1) Title of the snippet
2) Code of the snippet

The application allows the user to:
1) List snippets 
2) Create a new snippet
3) View a snippet
4) Edit a snippet using monaco editor
5) Delete a snippet

Caching optimizations were done using revalidatePath (on demand caching) as different behavior of the application was observed between the development version and the production version

## How To Run Locally
First, clone the repo to your local machine:
```
git clone https://github.com/mohamedzeina/snippets-nextjs.git
```
Then, open up a terminal in the project's directory and install next by running the following command:
```
npm install next
```
Then, open a terminal in the local repo and run the development server:

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

