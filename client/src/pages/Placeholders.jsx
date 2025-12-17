import React from 'react';

const SimplePage = ({ title, children }) => {
    return (
        <div className="bg-white min-h-[70vh] py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-dark mb-6">{title}</h1>
                <div className="text-gray-600 text-lg leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const About = () => (
    <SimplePage title="About Us">
        <p>
            At Namami Waters, we believe hydration should be sustainable, stylish, and personal.
            Our journey began with a simple mission: to replace single-use plastic bottles with reusable works of art.
        </p>
        <br />
        <p>
            We manufacture high-quality steel, glass, and copper bottles that are designed to last a lifetime.
            Whether you are an individual looking for a daily companion or a corporation seeking meaningful gifts,
            we have the perfect solution for you.
        </p>
    </SimplePage>
);

export const Corporate = () => (
    <SimplePage title="Corporate Orders">
        <p className="mb-8">
            Elevate your brand with custom-branded water bottles. Perfect for employee welcome kits,
            client gifts, and event merchandise. We offer significant discounts on bulk orders.
        </p>
        <div className="bg-gray-50 p-8 rounded-2xl text-left max-w-lg mx-auto border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
            <form className="space-y-4">
                <input type="text" placeholder="Company Name" className="w-full p-3 rounded-lg border border-gray-300" />
                <input type="email" placeholder="Work Email" className="w-full p-3 rounded-lg border border-gray-300" />
                <textarea placeholder="Requirements (Quantity, type, etc.)" className="w-full p-3 rounded-lg border border-gray-300 h-32"></textarea>
                <button className="w-full py-3 bg-dark text-white font-bold rounded-lg">Submit Request</button>
            </form>
        </div>
    </SimplePage>
);

export const Login = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg">
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <input type="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Email address" />
                    </div>
                    <div>
                        <input type="password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
);
