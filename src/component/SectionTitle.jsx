import React from 'react'

const SectionTitle = (props) => {
  const {subTitle, mainTitle}= props;
  return (
    <>
    <div className='container mx-auto text-center'>
        <h4 className='text-slate-500 text-xl'>{subTitle}</h4>
        <h1 className='text-4xl font-bold'>{mainTitle}</h1>
    </div>
    </>
  )
}

export default SectionTitle