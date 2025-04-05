'use client';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

    const handleAddTransaction = () => {
      router.push('/transactions/add');
    };

    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-card rounded-lg shadow p-4'>
                    <div className="container mx-auto p-4">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold">Transactions</h1>
                            <button><MenuIcon /></button>
                        </div>
                        <p className='m-2 text-gray-700'>This Month</p>
                        <div className="bg-card rounded-lg shadow">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-4">Date</th>
                                        <th className="text-left p-4">Description</th>
                                        <th className="text-left p-4">Amount</th>
                                        <th className="text-left p-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b hover:bg-muted/50">
                                        <td className="p-4">2024-02-20</td>
                                        <td className="p-4">Grocery Shopping</td>
                                        <td className="p-4">$150.00</td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                                                <button className="text-red-500 hover:text-red-600">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/50">
                                        <td className="p-4">2024-02-20</td>
                                        <td className="p-4">Grocery Shopping</td>
                                        <td className="p-4">$150.00</td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                                                <button className="text-red-500 hover:text-red-600">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/50">
                                        <td className="p-4">2024-02-20</td>
                                        <td className="p-4">Grocery Shopping</td>
                                        <td className="p-4">$150.00</td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                                                <button className="text-red-500 hover:text-red-600">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div className='flex justify-center items-center bg-card rounded-lg shadow p-4'>
                    <div>
                        <button onClick={handleAddTransaction} className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                            <span>Add Transaction</span>
                        </button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default page
