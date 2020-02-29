import fetch from "isomorphic-unfetch";
import useSWR from 'swr';

import Layout from "../components/Layout";
import PostLink from "../components/PostLink";
import { NextPage } from "next";

interface IShow {
  id: number;
  name: string;
};

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Index: NextPage<{ shows: IShow[]}> = props => {
  const { data, error } = useSWR('/api/randomQuote', fetcher);
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';


  return (<Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (<PostLink show={show} key={show.id} />))}
    </ul>
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}
    </main>
    <style jsx>{`
      h1 {
        font-family: "Arial";
      }
      main {
        width: 90%;
        max-width: 900px;
        margin: 300px auto;
        text-align: center;
      }
      .quote {
        font-family: cursive;
        color: #e243de;
        font-size: 24px;
        padding-bottom: 10px;
      }
      .author {
        font-family: sans-serif;
        color: #559834;
        font-size: 20px;
      }

    `}</style>
  </Layout>);
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
