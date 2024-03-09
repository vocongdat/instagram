import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Error500: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return <div>500</div>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale ?? 'en', ['common']);
  return {
    props: {
      ...i18n,
    },
  };
};

export default Error500;
