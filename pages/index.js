import Head from 'next/head';

import Proposal from 'content/proposal/index.mdx'
import ProposalLayout from 'layouts/ProposalLayout';
import MDXContent from 'components/MDXContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Community Hub proposal</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProposalLayout>
        <MDXContent>
          <Proposal />
        </MDXContent>
      </ProposalLayout>
    </>
  )
}
