import React from "react";
import styled from "styled-components";
const Hero = () => {
	return (
		<Wrapper className='hero flex items-end relative'>
			<section className='mx-auto grid grid-cols-2'>
				<div className='experience absolute'>
					<h3 className='font-bold text-xl py-1 '>
						Serving the Western San Gabriel Valley since 1998
					</h3>
				</div>
				<div className='banner absolute p-6'>
					<h1 className='text-5xl heading p-4'>Tom and Son Bookkeeping</h1>
				</div>
				<div className='statement p-6 mb-5'>
					<h3 className='text-3xl mb-4 font-bold'>
						One of the best business decisions you could make
					</h3>
					<p>
						Running a small business is no joke. You have a lot of
						responsibilities and have to wear many different hats. Do you really
						want to spend your valuable time bookkeeping?
					</p>
					<p className='my-3'>
						Now you too can enjoy the benefits of having your very own resource
						to handle your financial needs without going through the expense of
						hiring a full-time Accountant.
					</p>
					<p>
						The return on your investment is so great. Companies of all types
						are realizing what a wonderful asset TOMAndSON Bookkeeping is to
						their business... and their peace of mind!
					</p>
					<a href='/Contact' className='btn mt-8 font-bold text-xl'>
						Boook Free Consultation
					</a>
				</div>
			</section>
		</Wrapper>
	);
};

export default Hero;

const Wrapper = styled.section`
section{
  max-width: 1600px; 
}
.experience{
  top: 0;
  border-radius: 0px 0px 20px 20px;
  width: 40vw;
  background: blue; 
  text-align: center;
  left: 30vw; 
}

  color: white;
  p{
    font-size: 1.25rem;
  }
	.heading {
		background: darkred;
    color: white; 
    pad
	}
	.banner {
		top: 50px;
	}
  a{
    background: darkred; 
    color: white; 
    display: inline-block;
  }
`;
