import {Site} from 'templates';
import {EthersContext} from 'ethers-react-system';
const cardData = {
  title: 'Decentralized Application Playground',
  tagline: 'Rapidly Experiment with Ethereum Technology'
};

/* --- Component --- */
const Home = props => {
  return (
    <EthersContext>
      {ethers => {
        console.log('HOME', ethers);

        return (
          <Site
            sx={{bg: 'smoke'}}
            sxMain={{alignItems: 'center', justifyContent: 'center'}}
          >
            <Molecules.Card
              layout="showcase"
              variants={['large', 'centered']}
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
        );
      }}
    </EthersContext>
  );
};

export default Home;
