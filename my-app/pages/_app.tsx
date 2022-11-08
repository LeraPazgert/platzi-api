import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApiBuilderContext, ApiUrlBuilder, AppBuilderContext, AppUrlBuilder, DefaultApiClient, DefaultLocalStorageContext, DefaultStorageClient } from '../shared/tools'
import { useMemo } from 'react'
import { DefaultApiClientContext } from '../shared/tools/api/contexts'
import { setupStore } from '../store';
import { Provider } from 'react-redux';
import { AuthorizeController, CartDrawer } from '../modules'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../themes'

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  const contextValues = useMemo(() => {
    const localStorageClient = typeof localStorage === 'object' ?
      new DefaultStorageClient('access_token', localStorage) :
      new DefaultStorageClient('access_token');

    return {
      apiUrlBuilder: new ApiUrlBuilder('https://api.escuelajs.co/api/v1'),
      appUrlBuilder: new AppUrlBuilder('http://localhost:3000'),
      localStorageClient: localStorageClient,
      apiClient: new DefaultApiClient(localStorageClient),
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <DefaultLocalStorageContext.Provider value={contextValues.localStorageClient}>
          <DefaultApiClientContext.Provider value={contextValues.apiClient}>
            <ApiBuilderContext.Provider value={contextValues.apiUrlBuilder}>
              <AppBuilderContext.Provider value={contextValues.appUrlBuilder}>
                <AuthorizeController />
                <CartDrawer />
                <Component {...pageProps} />
              </AppBuilderContext.Provider>
            </ApiBuilderContext.Provider>
          </DefaultApiClientContext.Provider>
        </DefaultLocalStorageContext.Provider>
      </Provider>
    </ThemeProvider>
  )

}

export default MyApp
