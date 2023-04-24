import Head from 'next/head'
import React from 'react'
import Hero from '../components/Hero'
import Run from '../components/Run'
import Week from '../components/Week'
import Shoes from '../components/Shoes'
import Races from '../components/Races'

export default function Home({activities, athlete}) {
  return (
    <div>
      <Head>
        <title>milesperdonut</title>
        <meta name="description" content="Running by Vincent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-screen-lg relative space-y-10">
      <a name="top" />
      {activities && <div className="h-min-screen">
        <Hero activities={activities} />
      </div>}

      {/* Last run */}
      {activities && 
      <div className="h-min-screen bg-gray-100">
        <a name="run" />
        <Run activities={activities} />
      </div>}

      {/* This week */}
      {activities && <div className="h-min-screen bg-gray-100">
      <a name="week" />
        <Week activities={activities} />
      </div>}

      {/* Shoes */}
      {athlete && <div className="h-min-screen bg-gray-100">
      <a name="shoes" />
        <Shoes shoes={athlete.shoes}/>
      </div>}

      {/* Races */}
      <div className="h-min-screen bg-gray-100">
      <a name="races" />
        <Races />
      </div>
      <div className="fixed left-0 bottom-5">
      <div className="hidden text-md sm:flex sm:flex-col sm:justify-end">
          <div className="hidden sm:block">SM</div>
          <div className="hidden md:block">MD</div>
          <div className="hidden lg:block">LG</div>
        </div>
      </div>
      <div className="fixed right-5 bottom-5">
        <a className="text-3xl text-right" href="#top">TOP</a>
      </div>
    </main>
    </div>
  );

}

export async function getStaticProps() {
  console.log('ENV', process.env.NEXT_PUBLIC_STRAPI_URL);
<<<<<<< Updated upstream
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/activities?_sort=start_date:DESC`);
=======
  const authResponse = await authorizeApi();
  const authToken = authResponse.jwt;

  const options = {
    headers: {Authorization: 'Bearer ' + authToken}
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/activities?_sort=start_date:DESC`, options);
>>>>>>> Stashed changes
  const activities = await response.json();

  const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/athletes`);
  const [athlete] = await usersResponse.json(); 
  return { 
    props: {
      activities,
      athlete,
    }
  };
}