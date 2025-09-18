import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import AboutPic from '../assets/about-side-pic.jpg';

const About = () => {
  return (
    <div className='mt-[4.5rem] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] p-4'>
      <div className='text-2xl text-center pt-8'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col lg:flex-row gap-16'>
        <div>
        <img className='w-full h-full object-cover w-ful lg:max-w-[600px] rounded-md' src={AboutPic} alt='about-img'/>
        </div>
        <div className='flex flex-col justify-center gap-6w-full  lg:w-2/4 text-gray-600'>
          <p className='font-light'>
            At Bravera, fashion is more than just clothing — it’s an expression of femininity and confidence.
            Dedicated to modern women, Bravera brings a wide range of dresses designed to make every moment
            special. From casual wear to statement pieces, our collections blend elegance, comfort, and
            quality to match every occasion. <br /><br />
            Every dress we create is inspired by today’s woman — bold, stylish, and unique. With premium fabrics,
            thoughtful cuts, and a passion for detail, Bravera is committed to helping you look and feel your best.
          </p>
          <b className='text-primary-blue font-medium text-xl mt-6 mb-4'>Our Vision</b>
          <p className='font-light'>
            At Bravera, our vision is to become the go-to destination for women’s clothing that celebrates
            individuality and style. We aim to inspire confidence through dresses that are not only fashionable
            but also timeless and versatile. <br /><br />
            By combining trend-driven designs with lasting quality, we are building a brand that values women’s
            empowerment, sustainability, and inclusivity. Bravera is not just about what you wear — it’s about
            how you feel wearing it.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-2'>
        <div className='border border-gray-300 rounded-md px-8 lg:px-12 py-8 md:py-12  flex flex-col gap-5'>
          <b className='font-medium text-base'>Premium Quality:</b>
          <p className='text-gray-600  font-light'>
            At Bravera, we craft every dress with care using high-quality fabrics and precise tailoring.
            Each piece is designed to be durable, comfortable, and flattering — ensuring you feel confident
            with every wear.
          </p>
        </div>
        <div className='border border-gray-300 rounded-md px-8 lg:px-12 py-8 md:py-12 flex flex-col gap-5'>
          <b className='font-medium text-base'>Effortless Shopping:</b>
          <p className='text-gray-600 font-light'>
            From browsing to delivery, we make your shopping journey smooth and enjoyable. With easy navigation,
            quick shipping, and hassle-free returns, Bravera ensures your experience is as seamless as your style.
          </p>
        </div>
        <div className='border border-gray-300 rounded-md px-8 lg:px-12 py-8 md:py-12 flex flex-col gap-5'>
          <b className='font-medium text-base'>Dedicated Support:</b>
          <p className='text-gray-600 font-light'>
            Our team is always here for you — ready to assist with sizing, styling tips, or any concerns.
            We believe in building trust and long-lasting relationships through reliable, friendly,
            and responsive service.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
