import { ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { Provider } from 'react-redux';
import { AuthorizeController } from '../modules/auth';
import { CartDrawer } from '../modules/cart';
import { combineContext, Notification, NotificationProvider } from '../shared';
import {
  ApiBuilderContext,
  ApiUrlBuilder,
  AppBuilderContext,
  AppUrlBuilder,
  DefaultApiClient,
  DefaultLocalStorageContext,
  DefaultStorageClient,
} from '../shared/tools';
import { DefaultApiClientContext } from '../shared/tools/api/contexts';
import { setupStore } from '../store';
import '../styles/globals.css';
import { theme } from '../themes';

import type { AppProps } from 'next/app';
const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  const AppContextProvider = useMemo(() => {
    const localStorageClient =
      typeof localStorage === 'object'
        ? new DefaultStorageClient('access_token', localStorage)
        : new DefaultStorageClient('access_token');

    return combineContext(
      ...[
        { context: DefaultLocalStorageContext, value: localStorageClient },
        {
          context: DefaultApiClientContext,
          value: new DefaultApiClient(localStorageClient),
        },
        { context: ApiBuilderContext, value: new ApiUrlBuilder('https://api.escuelajs.co/api/v1') },
        { context: AppBuilderContext, value: new AppUrlBuilder('http://localhost:3000') },
      ],
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NotificationProvider>
          <AppContextProvider>
            <AuthorizeController />
            <CartDrawer />
            <Notification />
            <Component {...pageProps} />
          </AppContextProvider>
        </NotificationProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
