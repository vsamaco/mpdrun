# mpdrun

Vincent's running page made with React and Tailwind CSS.

Highlights recent run, week progress, shoe rotation, and races.

Visit [https://mpdrun.vercel.app/](https://mpdrun.vercel.app/)

## Features
 - Built React components for each section
 - Queries REST API for running activity data
 - Generates pre-rendered pages using NextJS
 - Created responsive layout using TailwindCSS
## Requirements
 - Node 14
 - NextJS 
 - React
 - Tailwind CSS

 ## Setup
  1. Setup vsrun server api project [https://github.com/vsamaco/vsrun-server-strapi](https://github.com/vsamaco/vsrun-server-strapi)

     Default api server configuration used in environment variables

     ```
     STRAPI_URL=http://localhost:1337
     STRAPI_EMAIL=apiuser@example
     STRAPI_PASSWORD=apiuser
     ```

  2. Copy .env.example to .env.local and update environment variables with api server configuration

    NEXT_PUBLIC_STRAPI_URL=STRAPI_URL
    NEXT_PUBLIC_STRAPI_EMAIL=STRAPI_EMAIL
    NEXT_PUBLIC_STRAPI_PASSWORD=STRAPI_PASSWORD

  3. Install dependencies

    yarn install
  

 ## Usage

  1. Run vsrun server api

    yarn develop
  
  2. Run vsrun client app

    yarn dev

  3. Visit main page at `http://localhost:3000`

 ## Test

  1. Run jest test 

    yarn test

 ## Production

  Deployed in production using Vercel hosting.  See steps below to configure Vercel.

  1. Clone project on github
  2. Create Vercel account `https://vercel.com/`
  3. Create New Project
  4. Import Git repo from github
  5. Configure Project with following environment variables

    NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
    NEXT_PUBLIC_STRAPI_EMAIL=apiuser@example.com
    NEXT_PUBLIC_STRAPI_PASSWORD=password

  6. Click Deploy
  7. Visit application on Vercel
