import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/solace-icon.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solace Guardian Dashboard</title>
        <meta name="description" content="Solace Guardian Dashboard" />
        <link rel="icon" href="/solace-icon.png" />
      </Head>
      <div className="flex items-start justify-center h-full md:items-center">
        <Image src={logo} alt="solace logo" height={100} width={100} />
      </div>
    </>
  );
};

export default Home;
