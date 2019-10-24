
import { Site } from 'templates'

const cardData = {
title:'Decentralized Application Playground',
tagline:'Rapidly Experiment with Ethereum Technology',
}

/* --- Component --- */
const Home = props =>
  <Site sx={{bg: 'smoke'}} sxMain={{alignItems: 'center', justifyContent: 'center'}}>
    <Molecules.Card 
      layout='showcase'
      variants={['large','centered']}
      sx={{
        p: 3
      }}
      sxTitle={{
        fontWeight: 700
      }}
      sxTagline={{
        fontWeight: 300
      }}
      sxMain={{
        maxWidth: 980
      }}
      {...cardData}
      image={null}
    />
  </Site>

export default Home