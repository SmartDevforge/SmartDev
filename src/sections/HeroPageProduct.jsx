import { ArrowRight } from "lucide-react"
import { heroproduct1, heroproduct2, heroproduct3, heroproduct4, heroproduct5 } from "../assets"

function HeroPageProduct() {
    const HeroProductData = [
        {
            id: 1,
            title: "Fruit and Vegetables",
            description: "Discover the finest organic produce at the best prices!",
            image: heroproduct1,
            price: "$12.99",
            quantity: 1
        },
        {
            id: 2,
            title: "Meats and Seafoods",
            description: "Discover the finest organic produce at the best prices!",
            image: heroproduct2,
            price: "$12.99",
            quantity: 1
        },
        {
            id: 3,
            title: "Grocery & Staples",
            description: "Discover the finest organic produce at the best prices!",
            image: heroproduct3,
            price: "$12.99",
            quantity: 1
        },
        {
            id: 4,
            title: "Breads & Bakery",
            description: "Discover the finest organic produce at the best prices!",
            image: heroproduct4,
            price: "$12.99",
            quantity: 1
        },
        {
            id: 5,
            title: "Beverages",
            description: "Discover the finest organic produce at the best prices!",
            image: heroproduct5,
            price: "$12.99",
            quantity: 1
        }
    ]
    return (
        <div>
            <div className="container bg-white flex max-md:flex-col max-md:items-start justify-start gap-10 items-center max-w-[100vw] mx-auto relative p-5 md:h-[30vh] ">
                <div className="flex justify-center items-center">
                    <div className=" flex text-sm text-p5 flex-col justify-end">
                        <span>
                            Products
                        </span>
                        <span className="flex gap-4">
                            we sell  <ArrowRight className="text-[#5474f9]" />
                        </span>
                    </div>

                </div>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-10">
                    {
                        HeroProductData.map((product) => (
                            <div key={product.id} className="flex justify-center items-center gap-4 flex-col">
                                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full bg-[#F3F6F6] ">
                                    <img src={product.image} className="w-[100px] h-[100px]" alt="productImg" />
                                </div>
                                <span>{product.title}</span>
                            </div>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default HeroPageProduct