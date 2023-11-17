import React from 'react'

function Technical_Specs() {
    return (
        <section className='py-16 bg-[#F7F7F7]'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                        Technical Specs: Mailer Boxes
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr mt-5'>
                        An overview of the standard customizations available for corrugated mailer boxes.
                    </p>
                </div>
                <div className='divide-y'>
                    <div className='flex lg:flex-row flex-col gap-7 items-center py-7'>
                        <div className='lg:w-1/3 w-full'>
                            <h3 className='md:text-3xl text-2xl font-medium text-title_Clr mb-3'>
                                Corrugation
                            </h3>
                            <p className='text-base font-normal text-txt_Clr'>
                                Corrugation, also known as flute, is used to strengthen the cardboard used in your packaging. They typically look like wavy lines which when glued to a paperboard, forms the corrugated board.
                            </p>
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <p className='text-base font-normal text-txt_Clr'>
                                E-flute
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                Most commonly used option and has a flute thickness of 1.2-2mm.
                            </p>
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <p className='text-base font-normal text-txt_Clr'>
                                B-flute
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                Ideal for large boxes and heavy items, with a flute thickness of 2.5-3mm.
                            </p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-7 items-center py-7'>
                        <div className='lg:w-1/3 w-full'>
                            <h3 className='md:text-3xl text-2xl font-medium text-title_Clr mb-3'>
                                Materials
                            </h3>
                            <p className='text-base font-normal text-txt_Clr'>
                                Designs are printed on these base materials which is then glued to the corrugated board. All materials contain at least 50% post-consumer content (recycled materials).
                            </p>
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <p className='text-base font-normal text-txt_Clr'>
                                CMYK
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                CMYK is the most popular and cost effective color system used in print.
                            </p>
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <p className='text-base font-normal text-txt_Clr'>
                                Pantone
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                For accurate brand colors to be printed and is more expensive than CMYK.
                            </p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-7 items-center py-7'>
                        <div className='lg:w-1/3 w-full'>
                            <h3 className='md:text-3xl text-2xl font-medium text-title_Clr mb-3'>
                                Coating
                            </h3>
                            <p className='text-base font-normal text-txt_Clr'>
                                Coating is added to your printed designs to protect it from scratches and scuffs.
                            </p>
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <p className='text-base font-normal text-txt_Clr'>
                                Varnish
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                An eco-friendly water-based coating but doesn't protect as well as lamination.
                            </p>
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <p className='text-base font-normal text-txt_Clr'>
                                Lamination
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                A plastic coated layer that protects your designs from cracks and tears, but not eco-friendly.
                            </p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-7 items-center py-7'>
                        <div className='lg:w-1/3 w-full'>
                            <h3 className='md:text-3xl text-2xl font-medium text-title_Clr mb-3'>
                                Finishes
                            </h3>
                            <p className='text-base font-normal text-txt_Clr'>
                                Top off your packaging with a finish option that completes your package.
                            </p>
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <p className='text-base font-normal text-txt_Clr'>
                                Matte
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                Smooth and non-reflective, overall softer look.
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                Satin
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                Semi-shiny, in between a matte and glossy look.
                            </p>
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <p className='text-base font-normal text-txt_Clr'>
                                Satin
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                Semi-shiny, in between a matte and glossy look.
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                Soft touch
                            </p>
                            <p className='text-base font-normal text-txt_Clr'>
                                Looks like a matte finish, but feels like velvet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technical_Specs