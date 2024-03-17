import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-all-hearts-personalized-led-lamp-200527-m.jpg' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='https://m.media-amazon.com/images/I/71FSJI39iXL.jpg' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
