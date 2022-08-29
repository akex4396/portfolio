import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      {children}
    </div>
  );
};

export default Layout;