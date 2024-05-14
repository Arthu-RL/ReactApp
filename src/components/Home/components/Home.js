import Promo from "./Promo";
import Button from "./Button";
import Form from "./Form";
import { PRODUCTS, sculptureList } from "../data/data";
import FilterableProductTable from "./Products";
import Gallery from "./Sculpture";

function Home() {
    return (
        <div>
            <Promo />
            <Button />
            <br />
            <Form />
            <br />
            <FilterableProductTable products={PRODUCTS} />
            <Gallery sculptureList={sculptureList} />
        </div>
    );
}

export default Home;