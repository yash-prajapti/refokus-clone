import React, { useState } from 'react';
import AnimaBtn from '../../Button/AnimaBtn';
import ProductSlider from './ProductSlider';
import Product from './Product';


function Products() {
    const products = [
        {
            id: '1',
            title: 'Arqitel',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14-p-1080.webp',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, sequi vel laudantium numquam voluptas eaque maiores natus. Beatae, nemo id!',
            liveWebsite: true,
            caseStudy: false,
            hover: true
        },
        {
            id: '2',
            title: 'Cula',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa neque autem itaque accusantium facilis, tempora est, fugit officia harum dolorum saepe.',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '3',
            title: 'Layout Land',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1)-p-1080.webp',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit magnam ex veritatis harum non?',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '4',
            title: 'TTR',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10-p-1080.jpg',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus amet similique ratione explicabo id velit ea totam perferendis!',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        },
        {
            id: '5',
            title: 'Maniv',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi cumque velit possimus recusandae autem fuga non hic necessitatibus harum?',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        },
        {
            id: '6',
            title: 'Singularity',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eius consequuntur!',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        },
        {
            id: '7',
            title: 'Like Magic',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41bfccf2d0e77e130b210_Like%20Magic%20-%20mobile-p-1080.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam harum corrupti nulla delectus voluptate excepturi, accusamus exercitationem?',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '8',
            title: 'Silvr',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02-p-1080.jpg',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quis similique placeat sed optio delectus!',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '9',
            title: 'Rainfall',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8-p-1080.jpg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magnam earum cumque doloremque a dignissimos voluptate quos libero blanditiis quod?',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        },
        {
            id: '10',
            title: 'Intenseye',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc2e2943eeaaaf5d8961a7_6-p-1080.jpg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo, eos nihil aut consectetur iste?',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '11',
            title: 'Remind',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc2cad43eeaaaf5d87b274_4-p-1080.jpg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto, nam quia molestiae doloribus error deleniti sed.',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '12',
            title: 'Summon',
            img: 'https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41c585b32416434291359_Summon%20-%20mobile-p-1080.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit fuga et quos quidem soluta assumenda vitae consectetur, cum nesciunt.',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        }
    ]
    const [hoveredProduct, setHoveredProduct] = useState(products);
    
    return (
        <>
            <div className="products-container">
                <div className="products-list">
                    {hoveredProduct.map((item, index) => (
                        <Product item={item} index={index} key={item.id} hoveredProduct={hoveredProduct} setHoveredProduct={setHoveredProduct}/>
                    ))}
                </div>
                {/* Tablet slider */}
                <ProductSlider hoveredProduct={hoveredProduct} setHoveredProduct={setHoveredProduct}/>
            </div>
        </>
    );
}

export default Products;
