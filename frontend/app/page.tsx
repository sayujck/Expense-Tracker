'use client'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-2 p-2">
        <div className="row-span-29 bg-gray-200 p-4 flex justify-center items-center">1</div>
        <div className="col-span-4 bg-gray-300 p-4 px-10 flex justify-start gap-15 items-center">
          <div className="border-2 p-2">My Balance</div>
        </div>
        <div className="row-span-10 col-start-5 row-start-2 bg-gray-400 p-4 flex justify-center items-center">6</div>
        <div className="col-span-3 row-span-10 col-start-2 row-start-2 bg-gray-500 p-4 flex justify-center items-center">12</div>
        <div className="col-span-3 row-span-18 col-start-2 row-start-12 bg-gray-600 p-4 flex justify-center items-center">13</div>
        <div className="row-span-18 col-start-5 row-start-12  bg-gray-700 p-4 flex justify-center items-center">14</div>
      </div>

    </>
  );
}
