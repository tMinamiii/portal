import Link from 'next/link';
import Layout from '../components/Layout';
import React, { ReactElement } from 'react';
const AboutPage: React.FC = (): ReactElement => {
  return (
    <Layout title="My Resume">
      <h1>About</h1>
      <p>XYZ</p>
      <!--
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      -->
    </Layout>
  );
};
export default AboutPage;
