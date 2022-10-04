import React from 'react';
import Feature from '../Feature/Feature';

const PricingOption = ({ option }) => {
    return (
        <div className='bg-indigo-300 m-4 p-6 rounded-xl'>
            <div>
                <h1 className='text-5xl'>${option.price}<span className='text-2xl'>/Mon</span></h1>
                <p>{option.name}</p>
            </div>
            {
                option.feature.map((featureItem, idx) => <Feature key={idx} featureItem={featureItem}></Feature>)
            }
            <button className='bg-yellow-600 text-white w-full mt-3 py-2 rounded-md'>Buy Now</button>
        </div>
    );
};

export default PricingOption;