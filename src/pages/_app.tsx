import { AppProps } from 'next/app';
import Layout from '@components/Layout/Layout';
import '../styles/globals.scss';
import { HistorySearchProvider } from '@context/historySearchContext/historySearchContext';

HistorySearchProvider;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HistorySearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HistorySearchProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
