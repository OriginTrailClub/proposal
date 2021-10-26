import Head from 'next/head';

import Proposal from 'content/proposal.mdx'
import MDXContent from 'components/MDXContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Community Hub proposal</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MDXContent>
          <Proposal />
        </MDXContent>
      </main>
    </div>
  )
}
