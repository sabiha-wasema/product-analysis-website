import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center mx-20 gap-6 mt-8'>
            <div className='shadow-lg rounded-2xl mx-16 p-6'>
                <h2 className='bg-orange-500 text-center px-8 rounded-3xl mb-4'>What is Context API?</h2>
                <p><span className='font-bold'>Ans:</span> Context API is a react component structure. It enables to exchange the unique data across all levels of the application.The main purpose of context api is to solve the problem of prop drilling which is also called threading. Also, context is primarily used when some data needs to be accessible by many components at different nesting levels. There are four types of context api. Such as: React.createContext, Context.provider, Context.Consumer, Class.contextType.</p>

            </div>
            <div className='shadow-lg rounded-2xl mx-16 p-6'>
                <h2 className='bg-orange-500 text-center px-8 rounded-3xl mb-4'>Difference between Inline-block and Inline-block elements?</h2>
                <p><span className='font-bold'>Ans: </span>HTML elements default to inline or block. Inline-block allows to set width & height on the element.Also allows to set padding/margin on the element.Inline-block does not add a line-break after the element, so the element can sit next to other elements.inline-block is to display list items horizontally instead of vertically. On the other hand, Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. Most common use of inline-block, is for creating navigation links horizontally.</p>
            </div>
        </div>
    );
};

export default Blog;