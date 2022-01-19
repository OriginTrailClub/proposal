import Head from 'next/head';

import Proposal from 'content/proposal/index.mdx'
import ProposalLayout from 'layouts/ProposalLayout';
import MDXContent from 'components/MDXContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Origintrail Community Hub</title>
        <meta name="description" content="The OriginTrail Community Hub is an accessible and open-source knowledge hub for and by the community. A place where Tracers can connect, collaborate, contribute and learn about all things OriginTrail" />
        <link rel="icon" href="/favicon-origintrail.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OriginTrailClub" />
        <meta name="twitter:title" content="Origintrail Community Hub" />
        <meta name="twitter:description" content="The OriginTrail Community Hub is an accessible and open-source knowledge hub for and by the community. A place where Tracers can connect, collaborate, contribute and learn about all things OriginTrail" />
        <meta name="twitter:image" content="https://donate.origintrail.club/socials/twitter/placeholder-twitter.jpg" />
        <meta name="twitter:image:alt" content="Origintrail Community Hub" />

        <meta property="og:title" content="Origintrail Community Hub" />
        <meta property="og:description" content="The OriginTrail Community Hub is an accessible and open-source knowledge hub for and by the community. A place where Tracers can connect, collaborate, contribute and learn about all things OriginTrail" />
        <meta property="og:image" content="https://donate.origintrail.club/socials/open-graph/placeholder-og.jpg" />
        <meta property="og:site_name" content="Origintrail Community Hub"/>
      </Head>
      <ProposalLayout>
        <MDXContent>
          <Proposal />
        </MDXContent>
      </ProposalLayout>
    </>
  )
}
