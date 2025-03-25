import Footer from "../sections/Footer"
import { useCategory } from "../constants/Context";
import ProductCard from "../components/ProductCard";
import { product } from "../constants";
import Navbar from "../components/Navbar/Navbar";

function ProductPage() {
    const { currentCategory } = useCategory();
    console.log(currentCategory);


    // eslint-disable-next-line no-undef
    const AllData = product.filter(function (e) {
        if (currentCategory === null) {
            return e
        }
        else {
            return e.category === currentCategory;
        }
    });

    return (
        <main className="overflow-hidden">
            <Navbar />
            {/* <ProductBanner /> */}
            <div className="container mb-3 mt-32">
                <div className="grid grid-cols-2 finalS lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {
                        AllData.map((item) => {
                            return (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    cover={item.cover}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.qty}
                                    totalPrice={item.totalPrice}
                                    description={item.desc}
                                    data={item}
                                    qty={item.qty}
                                    instock={item.instock}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <Footer />
        </main>)
}

export default ProductPage