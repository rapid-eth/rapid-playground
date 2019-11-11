/* --- Global --- */
import {ThemeProvider as ThemeProviderEmotion} from 'theme-ui';
import {PortalProvider, PortalTree} from 'react-portal-system';
import {BoxProvider} from '3box-react-system';
import {EthersProvider} from 'ethers-react-system';
import Storage from './ethereum/contracts/Storage.json';
/* --- Local --- */
import theme from './assets/theme';

export default props => {
  return (
    <ThemeProviderEmotion theme={theme}>
      <PortalProvider>
        <EthersProvider contracts={[Storage]} provider={'json'}>
          <PortalTree />
          {props.children}
        </EthersProvider>
      </PortalProvider>
    </ThemeProviderEmotion>
  );
};
