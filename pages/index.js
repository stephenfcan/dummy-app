import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [accessCode, setAccessCode] = useState("");
  const submit = (e) => {
    e.preventDefault();
    return (
      alert("Invalid access code")
    );
  }

  return (
    <div className="bg-[#2a2a2a] h-screen max-w-7xl mx-auto">
      <Head>
        <title>TackEdu - Closed Beta</title>
        <meta name="description" content="TackEdu Closed Beta v1.3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img className="pr-5 max-w-xs md:max-w-xl mx-auto pl-[50px] pt-[50px] object-cover" src="https://tackedu.netlify.app/Beta%20Logo.png" alt="" />

      <form method="post" onSubmit={submit} className="max-w-3xl mx-auto flex flex-col px-8 -mt-14">
        <label className="text-gray-500 mx-auto font-light mt-8 mb-3 dark:text-gray-50" htmlFor="accesscode">Access Code<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="accesscode"
          value={accessCode}
          onChange={(e) => {
            setAccessCode(e.target.value);
          }}
          className="bg-black max-w-xs mx-auto bg-opacity-20 py-2 pl-4 focus:outline-none font-light text-gray-500"
        />
        <button className="hidden" type="submit">Submit</button>
      </form>
    </div>
  )
}
