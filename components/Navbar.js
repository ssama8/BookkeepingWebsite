import React from "react";
import styled from "styled-components";
const Navbar = () => {
	return (
		<Wrapper className='flex justify-between p-6 items-center'>
			<img src='' alt='logo' className='logo' />
			<ul className='flex'>
				<li>
					<a href='/'>
						<h5>Home</h5>
					</a>
				</li>
				<li>
					<a href='/About'>
						<h5> About</h5>
					</a>
				</li>
				<li>
					<a href='/Products-Services'>
						<h5>Products & Services</h5>
					</a>
				</li>
				<li>
					<a href='/Contact'>
						<h5>Contact Us</h5>
					</a>
				</li>
			</ul>
			<ul>
				<li>Email</li>
				<li>Phone</li>
			</ul>
		</Wrapper>
	);
};
const Wrapper = styled.nav`
	li {
		margin: 0 1rem;
		h5 {
			font-size: 1.25rem;
		}
	}
`;

export default Navbar;
