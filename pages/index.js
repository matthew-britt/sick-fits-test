import Link from "next/link";

const Home = (props) => (
  <div>
    <p>Hola Trebek!</p>
    <Link href="/sell">
        <a>Sell!</a>
    </Link>
  </div>
);

export default Home;
