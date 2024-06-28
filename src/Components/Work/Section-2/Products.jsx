import React, { useState } from 'react';
import AnimaBtn from '../../Button/AnimaBtn';
import ProductSlider from './ProductSlider';
import Product from './Product';


function Products() {
    const products = [
        {
            id: '1',
            title: 'Arqitel',
            img:'aruitel2.jpeg',
            imgSmall:'aruitel2-small.png',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, sequi vel laudantium numquam voluptas eaque maiores natus. Beatae, nemo id!',
            liveWebsite: true,
            caseStudy: false,
            hover: true
        },
        {
            id: '2',
            title: 'Cula',
            img:'cula2.png',
            imgSmall:'cula2-small.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa neque autem itaque accusantium facilis, tempora est, fugit officia harum dolorum saepe.',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '3',
            title: 'Layout Land',
            img:'webflow2.png',
            imgSmall:'webflow-small.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit magnam ex veritatis harum non?',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '4',
            title: 'TTR',
            img:'refokus2.jpg',
            imgSmall:'refokus2-small.png',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus amet similique ratione explicabo id velit ea totam perferendis!',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        },
        {
            id: '5',
            title: 'Maniv',
            img:'maniv2.png',
            imgSmall:'maniv2-small.png',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi cumque velit possimus recusandae autem fuga non hic necessitatibus harum?',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        },
        {
            id: '6',
            title: 'Singularity',
            img:'singularity.png',
            imgSmall:'singularity-small.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eius consequuntur!',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        },
        {
            id: '7',
            title: 'Like Magic',
            img:'magic.png',
            imgSmall:'magic-small.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam harum corrupti nulla delectus voluptate excepturi, accusamus exercitationem?',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '8',
            title: 'Silvr',
            img:'silvr2.jpg',
            imgSmall:'silvr2-small.png',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quis similique placeat sed optio delectus!',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '9',
            title: 'Rainfall',
            img:'rainfall.jpg',
            imgSmall:'rainfall-small.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magnam earum cumque doloremque a dignissimos voluptate quos libero blanditiis quod?',
            liveWebsite: true,
            caseStudy: true,
            hover: false
        },
        {
            id: '10',
            title: 'Intenseye',
            img:'intenseye.jpg',
            imgSmall:'intenseye-small.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo, eos nihil aut consectetur iste?',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '11',
            title: 'Remind',
            img:'remind.png',
            imgSmall:'remind-small.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto, nam quia molestiae doloribus error deleniti sed.',
            liveWebsite: true,
            caseStudy: false,
            hover: false
        },
        {
            id: '12',
            title: 'Summon',
            img:'summon.png',
            imgSmall:'summon-small.png',
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
