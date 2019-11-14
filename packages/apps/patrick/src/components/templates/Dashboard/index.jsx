import { Link } from '@reach/router'
import { RegionTopDashboard, RegionFooterDashboard } from 'core'
import { Menu } from '@horizin/design-system-molecules';

const SiteTemplate = ({ styled, children, ...props }) => {
  return (
    <Atom.Flex flex={1} minHeight='100vh'>
      <Atom.Flex flex={2} sx={{bg: 'cobalt', color: 'white'}}>
        
      <Atom.Flex between column flex={1}>

        <Atom.Box flex={1} sx={{p:3}}>
          <Atom.BackgroundGradient gradient='white' opacity={.1} />
          <Link to='/'>
            <Atom.Heading md heavy color='white' mb={0}>{GLOBAL.siteName}</Atom.Heading>
          </Link>
        </Atom.Box>

        <Atom.Box sx={{p: 3, flex: 10}}>
          <Menu
            direction='column'
            sx={{
              my: 1,
              flexDirection: 'column'
            }}
            items={[
              {
                label:'Activity',
                to:'/dashboard',
              },
              {
                label:'Store',
                to:'/dashboard/store',
                children: [
                  {
                    label:'Products',
                    to:'/dashboard/store/products',
                    image: <Atom.Image src='data:image/svg+xml;base64,
                    PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0xNDQuNDgxLDMyNi44NTZsLTIwLjMzNiw2MS4wMDNsNjEuMDA0LTIwLjMzNUw0ODcuOTQ2LDY0LjcyOWwtNDAuNjY5LTQwLjY2OUwxNDQuNDgxLDMyNi44NTZ6IE0xNzYuNjkxLDM1My44MzcgICAgIGwtMjcuNzgyLDkuMjYxbDkuMjYxLTI3Ljc4MmwzMC4xNS0zMC4xNWwxOC41MjEsMTguNTIxTDE3Ni42OTEsMzUzLjgzN3ogTTIxNy45MTUsMzEyLjYxM2wtMTguNTIxLTE4LjUyMUw0NDcuMjc3LDQ2LjIwOCAgICAgbDE4LjUyMSwxOC41MjFMMjE3LjkxNSwzMTIuNjEzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCQkKCQkJCTxyZWN0IHg9IjQ3Ni40MzUiIHk9Ii0zLjY1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAxMjIuMjI4NCAzNTAuNTQ5NCkiIHdpZHRoPSIxNS42NiIgaGVpZ2h0PSI2Mi43NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCQkJPHBvbHlnb24gcG9pbnRzPSI0NTAuNDI4LDQ5Ni4zNDEgMTUuNjY1LDQ5Ni4zNDEgMTUuNjY1LDY5LjYyIDM2MS43MzksNjkuNjIgMzYxLjczOSw1My45NiAwLjAwNSw1My45NiAwLjAwNSw1MTIuMDAyICAgICAgNDY2LjA4OSw1MTIuMDAyIDQ2Ni4wODksMTQyLjIyNiA0NTAuNDI4LDE0Mi4yMjYgICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BvbHlnb24+CgkJPC9nPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=' sx={{width: 28}} />
                  },
                  {
                    label:'Orders',
                    to:'/dashboard/store/orders',
                    image: <Atom.Image src='data:image/svg+xml;base64,
                    PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDk2LjIyNyw2My45NzF2MTcuNDAxTDE1Ljc3MywxNjYuNjE0di0xNC4zNjJIMHYxNzUuNTk5aDE1Ljc3M1YzMTMuNDlsNzIuMjY3LDEyLjgyMXY0OS44MDIgICAgYzAsMzkuNjU0LDMyLjI2MSw3MS45MTYsNzEuOTE2LDcxLjkxNmMzOS42NTUsMCw3MS45MTYtMzIuMjYyLDcxLjkxNi03MS45MTZWMzUxLjgzbDI2NC4zNTUsNDYuOTAydjE3LjRINTEyVjYzLjk3MUg0OTYuMjI3eiAgICAgTTU2LjAyNSwzMDQuNjEzbC00MC4yNTItNy4xNDFWMTgyLjYzNGw0MC4yNTItNy4xNDJWMzA0LjYxM3ogTTIxNi4wOTksMzc2LjExNGMwLDMwLjk1Ny0yNS4xODYsNTYuMTQzLTU2LjE0Myw1Ni4xNDMgICAgcy01Ni4xNDMtMjUuMTg1LTU2LjE0My01Ni4xNDN2LTQ3LjAwM2wxMTIuMjg2LDE5LjkyMVYzNzYuMTE0eiBNNDQwLjIwMiwzNzIuNzc0TDcxLjc5OCwzMDcuNDExVjE3Mi42OTNsMzY4LjQwNC02NS4zNjNWMzcyLjc3NHogICAgIE00OTYuMjI3LDM4Mi43MTRsLTQwLjI1Mi03LjE0MlYxMDQuNTMybDQwLjI1Mi03LjE0MlYzODIuNzE0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=' sx={{width: 22}} />
                  },
        
                ]
              },
              {
                label:'Communications',
                to:'/dashboard/communications',
                children: [
                  {
                    label:'SMS',
                    to:'/dashboard/communications/sms',
                    image: <Atom.Image src='data:image/svg+xml;base64,
                    PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0xNDQuNDgxLDMyNi44NTZsLTIwLjMzNiw2MS4wMDNsNjEuMDA0LTIwLjMzNUw0ODcuOTQ2LDY0LjcyOWwtNDAuNjY5LTQwLjY2OUwxNDQuNDgxLDMyNi44NTZ6IE0xNzYuNjkxLDM1My44MzcgICAgIGwtMjcuNzgyLDkuMjYxbDkuMjYxLTI3Ljc4MmwzMC4xNS0zMC4xNWwxOC41MjEsMTguNTIxTDE3Ni42OTEsMzUzLjgzN3ogTTIxNy45MTUsMzEyLjYxM2wtMTguNTIxLTE4LjUyMUw0NDcuMjc3LDQ2LjIwOCAgICAgbDE4LjUyMSwxOC41MjFMMjE3LjkxNSwzMTIuNjEzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCQkKCQkJCTxyZWN0IHg9IjQ3Ni40MzUiIHk9Ii0zLjY1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAxMjIuMjI4NCAzNTAuNTQ5NCkiIHdpZHRoPSIxNS42NiIgaGVpZ2h0PSI2Mi43NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCQkJPHBvbHlnb24gcG9pbnRzPSI0NTAuNDI4LDQ5Ni4zNDEgMTUuNjY1LDQ5Ni4zNDEgMTUuNjY1LDY5LjYyIDM2MS43MzksNjkuNjIgMzYxLjczOSw1My45NiAwLjAwNSw1My45NiAwLjAwNSw1MTIuMDAyICAgICAgNDY2LjA4OSw1MTIuMDAyIDQ2Ni4wODksMTQyLjIyNiA0NTAuNDI4LDE0Mi4yMjYgICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BvbHlnb24+CgkJPC9nPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=' sx={{width: 28}} />
                  },
                  {
                    label:'Voice',
                    to:'/dashboard/communications/voice',
                    image: <Atom.Image src='data:image/svg+xml;base64,
                    PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDk2LjIyNyw2My45NzF2MTcuNDAxTDE1Ljc3MywxNjYuNjE0di0xNC4zNjJIMHYxNzUuNTk5aDE1Ljc3M1YzMTMuNDlsNzIuMjY3LDEyLjgyMXY0OS44MDIgICAgYzAsMzkuNjU0LDMyLjI2MSw3MS45MTYsNzEuOTE2LDcxLjkxNmMzOS42NTUsMCw3MS45MTYtMzIuMjYyLDcxLjkxNi03MS45MTZWMzUxLjgzbDI2NC4zNTUsNDYuOTAydjE3LjRINTEyVjYzLjk3MUg0OTYuMjI3eiAgICAgTTU2LjAyNSwzMDQuNjEzbC00MC4yNTItNy4xNDFWMTgyLjYzNGw0MC4yNTItNy4xNDJWMzA0LjYxM3ogTTIxNi4wOTksMzc2LjExNGMwLDMwLjk1Ny0yNS4xODYsNTYuMTQzLTU2LjE0Myw1Ni4xNDMgICAgcy01Ni4xNDMtMjUuMTg1LTU2LjE0My01Ni4xNDN2LTQ3LjAwM2wxMTIuMjg2LDE5LjkyMVYzNzYuMTE0eiBNNDQwLjIwMiwzNzIuNzc0TDcxLjc5OCwzMDcuNDExVjE3Mi42OTNsMzY4LjQwNC02NS4zNjNWMzcyLjc3NHogICAgIE00OTYuMjI3LDM4Mi43MTRsLTQwLjI1Mi03LjE0MlYxMDQuNTMybDQwLjI1Mi03LjE0MlYzODIuNzE0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=' sx={{width: 22}} />
                  },
                  {
                    label:'Email',
                    to:'/dashboard/communications/email',
                    image: <Atom.Image src='data:image/svg+xml;base64,
                    PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHJlY3QgeD0iMjE1Ljk4IiB5PSI0MTIuMjU3IiB3aWR0aD0iMTYuMDEiIGhlaWdodD0iMTUuNjk2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3JlY3Q+CgkJCTxyZWN0IHg9IjI0OC4wMDEiIHk9IjQxMi4yNTciIHdpZHRoPSIxNi4wMDkiIGhlaWdodD0iMTUuNjk2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3JlY3Q+CgkJCTxyZWN0IHg9IjI4MC4wMTEiIHk9IjQxMi4yNTciIHdpZHRoPSIxNi4wMSIgaGVpZ2h0PSIxNS42OTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCQkJPHBhdGggZD0iTTQwNC4zNDgsMTMyLjA4MWgtNjAuNDUxVjQ0LjAyN0gxNjguMTAzdjg4LjA1M0g5OS40NjRMMCwyOTcuODU0djE3MC4xMTloNTEyVjI5Ny43TDQwNC4zNDgsMTMyLjA4MXogTTE4My43OTksNTkuNzIzICAgICBIMzI4LjJ2MTI4LjM5MWgtNTEuNDMzbC0yMC43NjcsMjAuNzY1bC0yMC43NjctMjAuNzY1aC01MS40MzNWNTkuNzIzeiBNMTA4LjM1LDE0Ny43NzdoNTkuNzUzdjU2LjAzNWg2MC42MjhsMjcuMjY5LDI3LjI2NiAgICAgbDI3LjI2OS0yNy4yNjZoNjAuNjI4di01Ni4wMzVoNTEuOTMzbDkzLjg2LDE0NC40MDJIMzA0LjE4NnY1Ni4wMzVoLTk2LjM3M3YtNTYuMDM1SDIxLjcwOUwxMDguMzUsMTQ3Ljc3N3ogTTQ5Ni4zMDUsNDUyLjI3NyAgICAgTDQ5Ni4zMDUsNDUyLjI3N0gxNS42OTZWMzA3Ljg3NmgxNzYuNDIydjU2LjAzNWgxMjcuNzY1di01Ni4wMzVoMTc2LjQyMlY0NTIuMjc3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCQk8cG9seWdvbiBwb2ludHM9IjI0OC4xNTIsMTYzLjk0NCAyNjMuODQ5LDE2My45NDQgMjYzLjg0OSwxMzEuNzY4IDI5Ni4wMjUsMTMxLjc2OCAyOTYuMDI1LDExNi4wNzIgMjYzLjg0OSwxMTYuMDcyICAgICAgMjYzLjg0OSw4My44OTQgMjQ4LjE1Miw4My44OTQgMjQ4LjE1MiwxMTYuMDcyIDIxNS45NzYsMTE2LjA3MiAyMTUuOTc2LDEzMS43NjggMjQ4LjE1MiwxMzEuNzY4ICAgICIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wb2x5Z29uPgoJCTwvZz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+' sx={{width: 22}} />
                  },
                ]
              },
            ]}
          />
        </Atom.Box>
        <Atom.Box>
          <Atom.BackgroundGradient gradient='white' opacity={.05} />
          <RegionFooterDashboard />
        </Atom.Box>
      </Atom.Flex>

      </Atom.Flex>
      <Atom.Flex column flex={10}>
        <RegionTopDashboard bg='cobalt' color='white' borderBottom='3px solid #4481DC' p={2} />
        <Atom.Flex column flex={112} width='100%' {...props.styled}>
          {children}
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  )
}


SiteTemplate.defaultProps = {
  styled: {}
}

SiteTemplate.propTypes = {
  styled: PropTypes.object
}


const ImageCommunications = <Atom.Image src='data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTAsMjM0LjkxOWwxNzQuNjgyLDEwMi4zOTlsMTAyLjM5OSwxNzQuNjgyTDUxMiwwLjAwMUwwLDIzNC45MTl6IE0yNzUuMzg3LDQ3OC4xNmwtODUuMTc2LTE0NS4zMDRsNTIuMDk3LTUyLjA5NyAgICAgbC0xMS4wNjgtMTEuMDY4bC01Mi4wOTgsNTIuMDk4TDMzLjg0LDIzNi42MTJMNDU5LjcyNiw0MS4yMDZMMjkzLjI0OSwyMDcuNjgxbDExLjA2OCwxMS4wNjhMNDcwLjc5NSw1Mi4yNzVMMjc1LjM4Nyw0NzguMTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+CgkJCQoJCQkJPHJlY3QgeD0iMjU3LjEzMiIgeT0iMjIzLjEyMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAtMC43MDcxIDAuNzA3MSAtMC43MDcxIDI3Ny42MjkyIDYwOS4wNzMzKSIgd2lkdGg9IjE1LjY1MiIgaGVpZ2h0PSI0Ny44MzQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRkZGRkYiPjwvcmVjdD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==' sx={{width: 28}} />

const ImageSMS = <Atom.Image src='data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0xNDQuNDgxLDMyNi44NTZsLTIwLjMzNiw2MS4wMDNsNjEuMDA0LTIwLjMzNUw0ODcuOTQ2LDY0LjcyOWwtNDAuNjY5LTQwLjY2OUwxNDQuNDgxLDMyNi44NTZ6IE0xNzYuNjkxLDM1My44MzcgICAgIGwtMjcuNzgyLDkuMjYxbDkuMjYxLTI3Ljc4MmwzMC4xNS0zMC4xNWwxOC41MjEsMTguNTIxTDE3Ni42OTEsMzUzLjgzN3ogTTIxNy45MTUsMzEyLjYxM2wtMTguNTIxLTE4LjUyMUw0NDcuMjc3LDQ2LjIwOCAgICAgbDE4LjUyMSwxOC41MjFMMjE3LjkxNSwzMTIuNjEzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCQkKCQkJCTxyZWN0IHg9IjQ3Ni40MzUiIHk9Ii0zLjY1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAxMjIuMjI4NCAzNTAuNTQ5NCkiIHdpZHRoPSIxNS42NiIgaGVpZ2h0PSI2Mi43NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCQkJPHBvbHlnb24gcG9pbnRzPSI0NTAuNDI4LDQ5Ni4zNDEgMTUuNjY1LDQ5Ni4zNDEgMTUuNjY1LDY5LjYyIDM2MS43MzksNjkuNjIgMzYxLjczOSw1My45NiAwLjAwNSw1My45NiAwLjAwNSw1MTIuMDAyICAgICAgNDY2LjA4OSw1MTIuMDAyIDQ2Ni4wODksMTQyLjIyNiA0NTAuNDI4LDE0Mi4yMjYgICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BvbHlnb24+CgkJPC9nPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=' sx={{width: 28}} />


export default SiteTemplate

