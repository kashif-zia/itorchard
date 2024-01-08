import '../../public/assets/scss/app.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import AWSProvider from '../providers/AWSProvider';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from 'react-scroll-to-top';
import { Provider } from 'react-redux';
import { persistor, store } from '@/libs/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Find top-notch web, IT, and software development companies effortlessly with IT Orchard. Our platform streamlines your search, saving time while ensuring quality. Our expert-evaluated listings guarantee professionalism and excellence.'
        />
        <meta
          name='keywords'
          content='Web development companies, IT services, Software development firms, Tech solutions, Professional IT companies, Reliable tech partners, IT consultation, Quality software vendors, Top-rated IT services, Regional tech experts, Custom software solutions, Digital innovation firms, Technology consulting, IT outsourcing companies, Website design experts, Mobile app developers, Software engineering services, IT solutions provider, E-commerce development, Cloud computing specialists, Cybersecurity firms, AI and machine learning experts, Tech talent marketplace, Agile software development, UX/UI design agencies'
        />
        <meta name='author' content='IT Orchard' />
        <link rel='icon' href='/assets/images/fav-icon/fav-icon.png' type='image/x-icon' />
        <title>Discover Top Web, IT, and Software Development Companies | IT Orchard</title>
      </Head>
      <AWSProvider>
        <ScrollToTop smooth height='20px' color='#06AB58' />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
            <ToastContainer
              position='top-right'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={'light'}
            />
          </PersistGate>
        </Provider>
      </AWSProvider>
    </>
  );
}

export default App;
