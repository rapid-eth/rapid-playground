
/**
 * @name Branding
 * @description Default Top Branding region component.
 */

/* --- Global --- */


export const Branding = props => {
  return (
    <A.Flex alignCenter between>
      {/* Left */}
      <A.Flex>
        <A.Link to='/'>
          <A.Heading color='white' noMargin>{GLOBAL.siteName}</A.Heading>
        </A.Link>

        {/* Menu */}
        <A.Flex color='white' ml={4}>
          <A.Link to='/personal'>
            <A.Span xs mx={1}>Personal</A.Span>
          </A.Link>
          <A.Link to='/teams'>
            <A.Span xs mx={1}>Team</A.Span>
          </A.Link>
        </A.Flex>
      </A.Flex>

      {/* Right */}
      <CMS.Avatar mt={0} mb={3} />
    </A.Flex>
  )
}
