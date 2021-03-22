import Head from "next/head";

const Meta = () => {
  /*
    Keep to under 155
    description are for SEO
    og:description are for social sharing
  */

  const desc = {
    index:
      "Studio Klein is a full service e-commerce agency specializing in shopify. Providing expert services in design, development, and SEO.",
    projects: "",
    services: "",
    testamonials: "",
    contact:
      "For more information about Studio Klein or if you want to work on a project together, email us.",
  };

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='description' content={desc.index} />
      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content='Studio Klein' />
      <meta
        name='og:description'
        property='og:description'
        content='Studio Klein is a full service e-commerce agency specializing in shopify.'
      />
      <meta property='og:site_name' content='The Studio Klein' />
      <meta property='og:url' content='https://www.thestudioklein.com' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='The Studio Klein' />
      <meta
        name='twitter:description'
        content='Studio Klein is a full service e-commerce agency specializing in shopify.'
      />
      <link rel='icon' href='/favicon.png' />
      {/* <link rel='apple-touch-icon' href='/public/images/favicon.ico' /> */}
      {/* <meta property='og:image' content='' />
    <meta name='twitter:image' content='' /> */}
      <link
        rel='preload'
        as='font'
        href='/fonts/Navigo/Navigo-ExtraLight.woff'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        as='font'
        href='/fonts/Navigo/Navigo-ExtraLight.woff2'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      {/* <link
        rel='preload'
        href='/fonts/Navigo/Navigo-ExtraLight.ttf'
        as='font'
        crossOrigin='true'
      />
      <link
        rel='preload'
        href='/fonts/Navigo/Navigo-ExtraLight.eot'
        as='font'
        crossOrigin='true'
      /> */}
    </Head>
  );
};

export default Meta;
