import type { NextPage } from 'next'

import { CallsForSubmission22Fall, CurrentProjects } from '../../src/labs/projects'
import { IProject } from '../../src/labs/projects/models'
import ProjectProposalPreview from '../../components/projects/ProjectProposalPreview'
import { PopupButton } from '@typeform/embed-react'



const Ideas: NextPage = () => {
  return (
    <div className="">
      {/* <Head>
        <title>CMU Projects</title>
        <meta name="description" content="CMU blockchain club resouces." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

     <main className="max-w-4xl mx-auto px-8 pb-20">

      <div className="min-h-[6vh]">

      </div>

     <div className="mb-8">
      <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Conferences
      </h1>
      <img src="/media/conferences/ethDenverLogo.jpg" width="200" className="object-cover rounded-lg"/>
      <div className="text-xl text-slate-400 dark:text-slate-300 mt-4">
        <p>ETHDenver is the largest and longest running Ethereum event in the world. CBG will sponsor a group of 10-20 members to attend EthDenver 2023 which runs from March 1st to March 5th. </p>
        <p>Accepted members will have travel and stay fully covered.</p>
      </div>
    </div>

    {/* research team form */}
    <div className="mx-auto my-2">
          <PopupButton
            id="ZqdKjAuD"
            size={80}
            onReady={() => {
              console.log('Member application form ready')
            }}
            className="font-bold bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-lg text-slate-600 dark:text-slate-200 transition ease-in-out hover:scale-105 text-xl mx-auto"
          >
          Apply Now
          </PopupButton>
      </div>
    
      <div className="min-h-[10vh]">

    </div>

     </main>

    </div>
  )
}

export default Ideas