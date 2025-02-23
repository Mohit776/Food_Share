import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
    <Head>
      <title>Food Donation & Delivery</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </Head>

    {/* Navbar */}

    {/* Hero Section */}
    <section className="relative ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-slate-50">
        <div className="mx-6 md:w-1/2 mb-12 md:mb-0 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Share Food, <span className="text-primary text-cyan-500">Save Lives</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Donate surplus food to those in need. Together, we can fight hunger and reduce food waste.
          </p>
          <div className="flex gap-4">
            <Link href="/Donate" className="btn-primary bg-orange-500 border-2 rounded-3xl py-2 px-3 hover:font-semibold hover:shadow-2xl">Donate Food</Link>
            <Link href="/Volunteer" className="btn-secondary border-black border-2 rounded-2xl py-2 px-3 hover:font-semibold hover:shadow-2xl">Become a Volunteer</Link>
            <Link href="/Needy" className="btn-tertiary bg-green-400 border-2 rounded-3xl py-2 px-3 hover:font-semibold hover:shadow-2xl">Get Food</Link>
          </div>
        </div>
        <div className="w-auto h-auto rounded-2xl  transform hover:scale-105 transition-transform ">

          <Image
            src={"/my.jpg"}
            alt="Description"
            width={475}
            height={300}
            className=' rounded-2xl transform hover:scale-10 transition-transform'

          />
        </div>
      </div>
    </section>
  </div>
  );
}
