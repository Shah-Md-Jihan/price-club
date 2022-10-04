import React from 'react';
import AssignmentMark from '../AssignmentMarks/AssignmentMark';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const options = [
        {
            id: 1, name: "free", price: 0, feature: [
                'awsome feature',
                'special feature',
                'exclusive feature',
                'new feature',
                'popular feature',
                'liked feature',
                'wonderful feature',
            ]
        },
        {
            id: 2, name: "medium", price: 9.99, feature: [
                'awsome feature',
                'special feature',
                'exclusive feature',
                'new feature',
                'popular feature',
                'liked feature',
                'wonderful feature',
            ]
        },
        {
            id: 3, name: "premium", price: 19.99, feature: [
                'awsome feature',
                'special feature',
                'exclusive feature',
                'new feature',
                'popular feature',
                'liked feature',
                'wonderful feature',
            ]
        }
    ];
    return (
        <div>
            <h2 className='text-5xl p-12 bg-indigo-300 text-white mt-4'>Best Deal of The Day</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    options.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
            <AssignmentMark></AssignmentMark>
        </div>
    );
};

export default Pricing;