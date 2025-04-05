'use client';
import React from 'react'

const TransactionForm = () => {

const handleSubmit = () => {
  console.log("submitted");
  
}

  return (
      <form onSubmit={handleSubmit} className='p-6 rounded-lg shadow-lg m-10'>
        <h2 className='text-xl font-bold mb-4'>Add Transaction</h2>

        <div className='flex flex-col gap-3'>

          <div className='flex flex-col gap-2'>
            <label>Description</label>
            <input type="text" className='border p-2 rounded-md' />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Category</label>
            <input type="text" className='border p-2 rounded-md' />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Amount</label>
            <input type="text" className='border p-2 rounded-md' />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Date</label>
            <input type="date" className='border p-2 rounded-md' />
          </div>

        </div>

        <button type='submit' className='bg-black text-white px-3 py-1 rounded-sm mt-5'>Save</button>
      </form>
  )
}

export default TransactionForm
