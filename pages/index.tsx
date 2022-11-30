import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets';
import { Tweet } from '../typings';
import { fetchTweets } from '../utils/fetchTweets';
import {Toaster} from 'react-hot-toast';

const Home = (data: Props) => {

  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <Toaster />

      <main className='grid grid-cols-9'>

        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed tweets={data.tweets}/>

        {/* Widgets */}
        <Widgets />

      </main>

      
    </div>
  )
}

export default Home;

interface Props {
  tweets: Tweet[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    }
  }
}