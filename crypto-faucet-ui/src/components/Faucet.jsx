import React from 'react';

const Faucet = ({error, success, handler, tx, wallet}) => {
  return (
    <div className='w-full py-16 bg-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            We care about the protection of your data.
          </h1>
          <p>
          Read our{' '}
            <span className='text-[#fcd303]'>Privacy Policy.</span>
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='text'
              placeholder='Enter wallet address.'
              defaultValue={wallet}
            />
            <button onClick={handler} className='bg-[#fcd303] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3' disabled={wallet ? false : true}>
              Get tokens.
            </button>
          </div>
          <p>
            Transfer of Sigma tokens to your wallet can take anywhere between ~7 seconds to hours
            depending on gas fees, network environment, etc.
          </p>
          <br>
          </br>
          <p>
            Only 50 Sigma tokens per day!
          </p>
        </div>
      </div>
      <div className="mt-5">
        {error && (
          <div role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Error.
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{error}</p>
            </div>
          </div>
        )}
        {success && (
          <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div className="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p className="font-bold">Success.</p>
              <p className="text-sm">{success}</p>
            </div>
          </div>
        </div>
        )}{" "}
        {tx && (
          <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Transaction Data</h3>
            <p className="py-4">The transaction hash is the unique address of a transaction in a blockchain that acts as a record or proof that the transaction has taken place. The transaction hash is {tx}.</p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Faucet;