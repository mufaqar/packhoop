import React from 'react'

function Qoute_Form() {
    return (
        <div className='max-w-[514px] mx-auto shadow-[0_4px_86px_0_rgba(0,0,0,0.15)]'>
            <h2 className='text-2xl font-semibold text-white px-8 py-3.5 bg-secondary'>
                Instant Quote
            </h2>
            <form className="grid w-full gap-4 items-center bg-[#F7F7F7] px-5 py-10">
                <div className='flex md:flex-row flex-col md:gap-3 gap-5'>
                    <div className="w-full">
                        <label htmlFor='name' className="text-sm font-medium leading-none hidden">Name</label>
                        <input
                            className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                            type="text"
                            name="name"
                            id='name'
                            placeholder="Your Name" />
                        {/* {errors.name && <span className='text-xs text-red-500'>This field is required</span>} */}
                    </div>
                    <div className="w-full">
                        <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
                        <input
                            className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                            type="email"
                            name="email"
                            id='email'
                            placeholder="Email  Address" />
                        {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor='phone' className="text-sm font-medium leading-none hidden">Phone  Number</label>
                    <input
                        className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                        type="tel"
                        name="phone"
                        id='phone'
                        placeholder="Phone  Number" />
                    {/* {errors.phone && <span className='text-xs text-red-500'>This field is required</span>} */}
                </div>
                <div className='w-full flex gap-3'>
                    <div className="w-3/4">
                        <label htmlFor='packing' className="text-sm font-medium leading-none hidden">Cosmetics Packaging</label>
                        <select
                            className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                            name="packing"
                            id='packing'>
                            <option value="Cosmetics Packaging">Cosmetics Packaging </option>
                            <option value="Cosmetics Box">Cosmetics Box</option>
                        </select>
                        {/* {errors.packing && <span className='text-xs text-red-500'>This field is required</span>} */}
                    </div>
                    <div className="w-1/4">
                        <label htmlFor='quantity' className="text-sm font-medium leading-none hidden">Quantity</label>
                        <input
                            className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                            type="number"
                            name="quantity"
                            id='quantity'
                            placeholder="Quantity *" />
                        {/* {errors.quantity && <span className='text-xs text-red-500'>This field is required</span>} */}
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor='detail' className="text-sm font-medium leading-none hidden">Project Detail</label>
                    <textarea
                        className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                        name="detail"
                        id='detail'
                        rows={5}
                        placeholder="Write your Project Details and Sizese"></textarea>
                    {/* {errors.detail && <span className='text-xs text-red-500'>This field is required</span>} */}
                </div>
                <div className="w-full">
                    <button type='submit' className="text-base font-semibold text-white bg-primary hover:bg-secondary px-4 py-3 rounded-[5px] w-full">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Qoute_Form