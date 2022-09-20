import type { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <>
      <div>HomePage</div>
      <Link href="/catalog/turbine">
        <a>Catalog Turbine Search</a>
      </Link>
      <Link href="/catalog/turbine/123">
        <a>Catalog Turbine Detail</a>
      </Link>
    </>
  );
};

export default HomePage;
