import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({ featureItem }) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-5 w-5 mr-2 text-blue-500" /><p>{featureItem}</p>
        </div>
    );
};

export default Feature;