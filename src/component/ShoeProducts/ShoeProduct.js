import React, { useEffect, useState } from 'react';

const ShoeProduct = () => {
    const [shoes, setShoes] = useState([])
    const [filterShoes, setFilterShoes] = useState(shoes)


    const filterItems = (categoryItem) => {
        const newFilterItem = shoes.filter(elm => {
            return elm.brand === categoryItem
        })

        setFilterShoes(newFilterItem)
    }

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setShoes(data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-center font-bold text-[#BF1C78] text-4xl'>BRANDING PRODUCT SEARCH</h1>
            <div className='flex justify-between px-16 py-6'>
                <button onClick={() => filterItems('rebook')} className='btn text-white border-0 px-8 btn-primary bg-[#BF1C78]'>NIKE</button>
                <button onClick={() => filterItems('nike')} className='btn text-white border-0 btn-primary bg-[#BF1C78]'>REBOOK</button>
                <button onClick={() => filterItems('2020')} className='btn text-white border-0 btn-primary bg-[#BF1C78]'>ALL SHOES</button>
            </div>
            <div className='grid lg:grid-cols-3 p-12 gap-10'>
                {filterShoes && filterShoes?.map((shoe) =>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img className='w-full h-60' src={shoe.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                SHOES
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                )
                }
                {
                    filterShoes.length === 0 && shoes.map((shoe) =>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure><img className='w-full h-60' src={shoe.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    SHOES
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div >
        </div>
    );
};

export default ShoeProduct;