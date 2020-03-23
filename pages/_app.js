import 'cross-fetch/polyfill'
import Router from "next/router";
import NProgress from 'nprogress';

import { withGraphQLApp } from 'next-graphql-react'
import { GraphQLProvider } from 'graphql-react'


import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css';
import './../components/styles/global.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeError', () => NProgress.done());
Router.events.on('routeChangeComplete', () => NProgress.done());

const App = ({ Component, pageProps, graphql }) => (
    <GraphQLProvider graphql={graphql}>
        <Component {...pageProps} />
    </GraphQLProvider>
);

export default withGraphQLApp(App);
