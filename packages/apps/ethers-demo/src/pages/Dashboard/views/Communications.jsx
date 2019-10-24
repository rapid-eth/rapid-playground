/**
 * @name Communications
 * @version 1.0.0
 */
/* --- Global --- */
import { Menu } from '@horizin/design-system-molecules';
import { FormName } from '3box-react-system-profiles'

/* --- Local --- */

/* --- Module --- */
const data =[
  {
    title: 'A Fresh Content Item',
    tagline: 'The Item Taglin.....',
    image: 'https://image.flaticon.com/icons/svg/1673/1673636.svg',
    to: 'fresh',
    isLinkInsert: true,
  },
  {
    title: 'Captivating Titlte',
    tagline: 'Let the games begin!',
    image: 'https://image.flaticon.com/icons/svg/1673/1673639.svg',
    to: 'fresh',
    isLinkInsert: true,
  },
]

const Communications = props =>
<Atom.Box>
  <Atom.Box sx={{p: 3}}>
    <Atom.Heading lg heavy mb={0}>Communications</Atom.Heading>
    {
      data.map( item =>
        <Molecules.Card
          layout='row'
          mainRow mainAlignCenter mainBetween 
          isTitleLink
          linkProperties={{
            variants: ['tag'],
            effects: ['white', 'sm']
          }}
          variants={['card', 'small']}
          sxTitle={{mb: 0}}
          sxDetails={{
            alignItems: 'center'
          }}
          sxImage={{
            maxWidth: 32,
            mr: 2
          }}
          {...item} 
        />)
    }
  </Atom.Box>
</Atom.Box>


export default Communications
