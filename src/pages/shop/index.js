import Link from "next/link";
import { Image } from "react-bootstrap";
import GlobalStyles from "../../styles/globalStyles";
const Shop = () => {
  return (
    <main>
      <div className="user_title flex p-4">
        <h1 className="text-4xl font-semibold ">SHOP</h1>
      </div>
      <div className="crads_container">
        <div className="card">
          <Image src="/images/doc_duck.jpg" alt="pic" />
          <h1>Doctor Duck</h1>
          <p>
            Doctor Duck is a brilliant quackademic, leads a feathered team in
            pioneering research at Pondington University. With a beak for
            discovery and a love for solving avian mysteries, Doc Duck is the
            go-to waterfowl for all things science in Duckland.
          </p>
          <button><Link href={""}>Read More</Link></button>
        </div>
      </div>
    </main>
  );
};
export default Shop;
