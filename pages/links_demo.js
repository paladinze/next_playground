import Link from 'next/link';
import Layout from '../components/Layout';

const QueryStringPostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const PageTemplatePostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <h2>Query string post link</h2>
      <ul>
        <QueryStringPostLink title="Hello Next.js" />
        <QueryStringPostLink title="Learn Next.js is awesome" />
        <QueryStringPostLink title="Deploy apps with Zeit" />
      </ul>

      <h2>Page Template post link</h2>
      <ul>
        <PageTemplatePostLink title="Hello Next.js" />
        <PageTemplatePostLink title="Learn Next.js is awesome" />
        <PageTemplatePostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}

export default Blog;