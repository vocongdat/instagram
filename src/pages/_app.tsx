import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';

import { wrapper } from '@/redux/store';
import Layout from '@/templates/Layout';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <SWRConfig
        value={{
          revalidateOnMount: true,
        }}
      >
        <Layout>
          <Head>
            <title>Instagrams</title>
          </Head>
          <Component {...props.pageProps} />
        </Layout>
      </SWRConfig>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
