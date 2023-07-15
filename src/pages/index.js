import React from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
import WhyUs from "../components/WhyUs/whyus";
import Partner from "../components/Partners/partner";
import Categories from "../components/Categories/categories";
import OurProducts from "../components/OurProducts/ourProducts";
import Subscriptions from "../components/Subscriptions/subscriptions";
import Footer from "../components/Footer/footer";

const IndexPage = () => {
    return (
        <>
            <header className="App-header">
                <Navbar />
                <Jumbotron />
            </header>
            <main>
                <section>
                    <WhyUs />
                </section>
                <section>
                    <Partner />
                </section>
                <section>
                    <Categories />
                </section>
                <section>
                    <OurProducts />
                </section>
                <section>
                    <Subscriptions />
                </section>
            </main>

            <Footer />
        </>
    );
}

export default IndexPage;