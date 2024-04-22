import { useState } from 'react';

const Star = ({ defaultRating }) => {
    const [rating, setRating] = useState(defaultRating);

    const handleClick = (index) => {
        setRating(index + 1);
    };

    console.log(defaultRating); // Logging prop value within the component

    return (
        <div className="flex items-center">
            { [...Array(4)].map((_, index) => (
                <button
                    key={ index }
                    className={ `text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'
                        } focus:outline-none focus:ring-0` }
                    onClick={ () => handleClick(index) }
                >
                    &#9733;
                </button>
            )) }
            <p className="text-gray-500 ml-2">{ rating } </p>

        </div>
    );
};

Star.defaultProps = {
    defaultRating: 0, // Default rating value if not provided
};

export default Star;
