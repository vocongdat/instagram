import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Error404: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return <div>404</div>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale ?? 'en', ['common']);

  return {
    props: {
      ...i18n,
    },
  };
};

export default Error404;
