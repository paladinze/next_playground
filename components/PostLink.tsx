import Link from "next/link";

const PostLink = ({ show }) => (
  <>
    <li key={show.id}>
      <Link href="/p/[id]" as={`/p/${show.id}`}>
        <a>{show.name}</a>
      </Link>
    </li>
    <style jsx>{`
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </>
);

export default PostLink;