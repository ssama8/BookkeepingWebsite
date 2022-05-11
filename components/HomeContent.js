import React from "react";
import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const HomeContent = () => {
	return (
		<Wrapper className='mx-auto'>
			<section className='flex flex-col text-center mx-auto'>
				<h2 className='text-3xl my-4'>What We provide for You</h2>
				<section className='info grid grid-cols-3 justify-center mx-auto '>
					<div>
						<img
							src='http://tomandson.com/rvs_library/200x120/4in_200x120_3.jpg'
							alt='books straight'
						/>
						<div>
							<h3>Get Your Books Straight</h3>
							<h4>No More wondering where you stand financially</h4>
						</div>
					</div>
					<div>
						<img
							src='http://tomandson.com/rvs_library/200x120/5bs_200x120_5.jpg'
							alt='books straight'
						/>
						<div>
							<h3>Take Control</h3>
							<h4>Know exactly who owes you money and how much!</h4>
						</div>
					</div>
					<div>
						<img
							src='http://tomandson.com/rvs_library/200x120/7tl_200x120_9.jpg'
							alt='Get back to your life'
						/>
						<div>
							<h3>Free up your time</h3>
							<h4>
								You're a busy person, let us take care of your bookkeeping
							</h4>
						</div>
					</div>
				</section>
				<h4 className='text-2xl'>What our customers think of us</h4>

				<div className='reviews border-4 flex items-center justify-center relative p-3'>
					<p>
						<ImQuotesLeft />
						Thank you again. You are an absolute doll - and I owe you big time
						for helping me tie things down.
						<ImQuotesRight className='right-quote' />
					</p>
					<p>
						<ImQuotesLeft />
						Thank you again. You are an absolute doll - and I owe you big time
						for helping me tie things down.
						<ImQuotesRight className='right-quote' />
					</p>
				</div>
			</section>
		</Wrapper>
	);
};

export default HomeContent;

const Wrapper = styled.section`
	padding: 3rem;
	section {
		max-width: 1200px;
	}

	grid-gap: 2rem;
	.info > div {
		padding: 2rem;
		// background: black;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		img {
			width: 300px;
			height: 200px;
		}
		h3 {
			font-size: 1.5rem;
			margin: 1rem 0;
		}
		h4 {
			margin: 1rem 0;
			font-size: 1.25rem;
		}

		p {
			lie-height: 1.6;
			font-size: 1.15rem;
		}
	}
	.info {
	}
	.review-statement-container {
		text-align: center;
		grid-template-columns: 1fr 2fr;
		grid-gap: 2rem;
	}
	.reviews {
		font-size: 1.25rem;
	}
	.statement {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		p {
			font-size: 1.15rem;
			max-width: 70%;
			text-align: center;
		}
	}

	.right-quote {
		position: absolute;
		right: 10px;
	}

	@media and screen (max-width: 1200px) {
		.info {
			grid-template-columns: 1fr;
		}
	}
`;
