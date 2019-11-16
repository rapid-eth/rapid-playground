
import { Site } from 'templates'
/* --- Component --- */
const Started = props =>
  <Site>

    {/* Hero */}
    <Molecules.Card
      layout='showcase'
      variants={['xlarge', 'centered']}
      variantsMain={['scopedLarge']}
      sx={{
        bg: 'blue', color: 'white', p: 6, py: 6
      }}
      sxTitle={{
        fontWeight: 700
      }}
      sxTagline={{
        fontWeight: 300
      }}
      {...cardData}
    />

    {/* Features */}
    <Atom.Container my={5}>
      <Atom.Flex sx={{}}>
        <Molecules.Card
          sx={{ flex: 1, p: 3 }}
          sxImage={{
            maxWidth: 45
          }}
          {...card1}
        />

        <Molecules.Card
          sx={{ flex: 1, p: 3 }}
          sxImage={{
            maxWidth: 45
          }}
          {...card2}
        />

        <Molecules.Card
          sx={{ flex: 1, p: 3 }}
          sxImage={{
            maxWidth: 45
          }}
          {...card3}
        />

      </Atom.Flex>
    </Atom.Container>


  </Site>

const cardData = {
  title: 'Contribute',
  tagline: 'Add to the Community',
  imageCover: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
}

const card1 = {
  title: 'Build Faster',
  tagline: 'Create New Tools',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673590.svg',

}
const card2 = {
  title: 'Move Quicker',
  tagline: 'Less Code in the Way',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
}
const card3 = {
  title: 'Connect Data',
  tagline: 'Captivate Your Audience',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673579.svg',
}

export default Started