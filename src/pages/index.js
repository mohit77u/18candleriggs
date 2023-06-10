import Image from 'next/image'
import Layout from '@/components/Layout'

export default function Home(props)
{
	return (
		<>
			<Layout title={ props.title }>
				
				{/* banner section */ }
				<div className="slider_area">
					<div className="single_slider  d-flex align-items-center slider_bg_1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-7 col-md-6">
									<div className="slider_text">
										<h5 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".2s">4536+ Jobs listed</h5>
										<h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">Find your Dream Job</h3>
										<p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">We provide online instant cash loans with quick approval that suit your term length</p>
										<div className="sldier_btn wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
											<a href="#" className="boxed-btn3">Upload your Resume</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ilstration_img wow fadeInRight d-none d-lg-block text-right" data-wow-duration="1s" data-wow-delay=".2s">
						<Image
							src="/assets/img/banner/illustration.png"
							width={ 700 }
							height={ 550 }
							className="banner-img"
							alt="Logo"
						/>
					</div>
				</div>

				{/* category section */ }
				<div className="catagory_area">
					<div className="container">
						<div className="row cat_search">
							<div className="col-lg-3 col-md-4">
								<div className="single_input">
									<input type="text" placeholder="Search keyword" />
								</div>
							</div>
							<div className="col-lg-3 col-md-4">
								<div className="single_input">
									<select className="wide" >
										<option data-display="Location">Location</option>
										<option value="1">Dhaka</option>
										<option value="2">Rangpur</option>
										<option value="4">Sylet</option>
									</select>
								</div>
							</div>
							<div className="col-lg-3 col-md-4">
								<div className="single_input">
									<select className="wide">
										<option data-display="Category">Category</option>
										<option value="1">Category 1</option>
										<option value="2">Category 2</option>
										<option value="4">Category 3</option>
									</select>
								</div>
							</div>
							<div className="col-lg-3 col-md-12">
								<div className="job_btn">
									<a href="#" className="boxed-btn3">Find Job</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="popular_search d-flex align-items-center">
									<span>Popular Search:</span>
									<ul>
										<li><a href="#">Design & Creative</a></li>
										<li><a href="#">Marketing</a></li>
										<li><a href="#">Administration</a></li>
										<li><a href="#">Teaching & Education</a></li>
										<li><a href="#">Engineering</a></li>
										<li><a href="#">Software & Web</a></li>
										<li><a href="#">Telemarketing</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* popular catagory_area */ }
				<div className="popular_catagory_area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section_title mb-40">
									<h3>Popolar Categories</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_catagory">
									<a href="jobs.html"><h4>Design & Creative</h4></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_catagory">
									<a href="jobs.html"><h4>Marketing</h4></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_catagory">
									<a href="jobs.html"><h4>Telemarketing</h4></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_catagory">
									<a href="jobs.html"><h4>Software & Web</h4></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_catagory">
									<a href="jobs.html"><h4>Administration</h4></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_catagory">
									<a href="jobs.html"><h4>Teaching & Education</h4></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_catagory">
									<a href="jobs.html"><h4>Engineering</h4></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_catagory">
									<a href="jobs.html"><h4>Garments / Textile</h4></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* job listing */ }
				<div className="job_listing_area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="section_title">
									<h3>Job Listing</h3>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="brouse_job text-right">
									<a href="jobs.html" className="boxed-btn4">Browse More Job</a>
								</div>
							</div>
						</div>
						<div className="job_lists">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<div className="single_jobs white-bg d-flex justify-content-between">
										<div className="jobs_left d-flex align-items-center">
											<div className="thumb">
											</div>
											<div className="jobs_conetent">
												<a href="job_details.html"><h4>Software Engineer</h4></a>
												<div className="links_locat d-flex align-items-center">
													<div className="location">
														<p> <i className="fa fa-map-marker"></i> California, USA</p>
													</div>
													<div className="location">
														<p> <i className="fa fa-clock-o"></i> Part-time</p>
													</div>
												</div>
											</div>
										</div>
										<div className="jobs_right">
											<div className="apply_now">
												<a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
												<a href="job_details.html" className="boxed-btn3">Apply Now</a>
											</div>
											<div className="date">
												<p>Date line: 31 Jan 2020</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="single_jobs white-bg d-flex justify-content-between">
										<div className="jobs_left d-flex align-items-center">
											<div className="thumb">
											</div>
											<div className="jobs_conetent">
												<a href="job_details.html"><h4>Digital Marketer</h4></a>
												<div className="links_locat d-flex align-items-center">
													<div className="location">
														<p> <i className="fa fa-map-marker"></i> California, USA</p>
													</div>
													<div className="location">
														<p> <i className="fa fa-clock-o"></i> Part-time</p>
													</div>
												</div>
											</div>
										</div>
										<div className="jobs_right">
											<div className="apply_now">
												<a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
												<a href="job_details.html" className="boxed-btn3">Apply Now</a>
											</div>
											<div className="date">
												<p>Date line: 31 Jan 2020</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="single_jobs white-bg d-flex justify-content-between">
										<div className="jobs_left d-flex align-items-center">
											<div className="thumb">
											</div>
											<div className="jobs_conetent">
												<a href="job_details.html"><h4>Wordpress Developer</h4></a>
												<div className="links_locat d-flex align-items-center">
													<div className="location">
														<p> <i className="fa fa-map-marker"></i> California, USA</p>
													</div>
													<div className="location">
														<p> <i className="fa fa-clock-o"></i> Part-time</p>
													</div>
												</div>
											</div>
										</div>
										<div className="jobs_right">
											<div className="apply_now">
												<a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
												<a href="job_details.html" className="boxed-btn3">Apply Now</a>
											</div>
											<div className="date">
												<p>Date line: 31 Jan 2020</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="single_jobs white-bg d-flex justify-content-between">
										<div className="jobs_left d-flex align-items-center">
											<div className="thumb">
											</div>
											<div className="jobs_conetent">
												<a href="job_details.html"><h4>Visual Designer</h4></a>
												<div className="links_locat d-flex align-items-center">
													<div className="location">
														<p> <i className="fa fa-map-marker"></i> California, USA</p>
													</div>
													<div className="location">
														<p> <i className="fa fa-clock-o"></i> Part-time</p>
													</div>
												</div>
											</div>
										</div>
										<div className="jobs_right">
											<div className="apply_now">
												<a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
												<a href="job_details.html" className="boxed-btn3">Apply Now</a>
											</div>
											<div className="date">
												<p>Date line: 31 Jan 2020</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="single_jobs white-bg d-flex justify-content-between">
										<div className="jobs_left d-flex align-items-center">
											<div className="thumb">
											</div>
											<div className="jobs_conetent">
												<a href="job_details.html"><h4>Software Engineer</h4></a>
												<div className="links_locat d-flex align-items-center">
													<div className="location">
														<p> <i className="fa fa-map-marker"></i> California, USA</p>
													</div>
													<div className="location">
														<p> <i className="fa fa-clock-o"></i> Part-time</p>
													</div>
												</div>
											</div>
										</div>
										<div className="jobs_right">
											<div className="apply_now">
												<a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
												<a href="job_details.html" className="boxed-btn3">Apply Now</a>
											</div>
											<div className="date">
												<p>Date line: 31 Jan 2020</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="single_jobs white-bg d-flex justify-content-between">
										<div className="jobs_left d-flex align-items-center">
											<div className="thumb">
											</div>
											<div className="jobs_conetent">
												<a href="job_details.html"><h4>Creative Designer</h4></a>
												<div className="links_locat d-flex align-items-center">
													<div className="location">
														<p> <i className="fa fa-map-marker"></i> California, USA</p>
													</div>
													<div className="location">
														<p> <i className="fa fa-clock-o"></i> Part-time</p>
													</div>
												</div>
											</div>
										</div>
										<div className="jobs_right">
											<div className="apply_now">
												<a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
												<a href="job_details.html" className="boxed-btn3">Apply Now</a>
											</div>
											<div className="date">
												<p>Date line: 31 Jan 2020</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* featured */ }
				<div className="featured_candidates_area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section_title text-center mb-40">
									<h3>Featured Candidates</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="candidate_active owl-carousel">
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
									<div className="single_candidates text-center">
										<div className="thumb">

										</div>
										<a href="#"><h4>Markary Jondon</h4></a>
										<p>Software Engineer</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* top companies */ }
				<div className="top_companies_area">
					<div className="container">
						<div className="row align-items-center mb-40">
							<div className="col-lg-6 col-md-6">
								<div className="section_title">
									<h3>Top Companies</h3>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="brouse_job text-right">
									<a href="jobs.html" className="boxed-btn4">Browse More Job</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_company">
									<div className="thumb">
									</div>
									<a href="jobs.html"><h3>Snack Studio</h3></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_company">
									<div className="thumb">
									</div>
									<a href="jobs.html"><h3>Snack Studio</h3></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_company">
									<div className="thumb">
									</div>
									<a href="jobs.html"><h3>Snack Studio</h3></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
							<div className="col-lg-4 col-xl-3 col-md-6">
								<div className="single_company">
									<div className="thumb">
									</div>
									<a href="jobs.html"><h3>Snack Studio</h3></a>
									<p> <span>50</span> Available position</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* job seek */ }
				<div className="job_searcing_wrap overlay">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 offset-lg-1 col-md-6">
								<div className="searching_text">
									<h3>Looking for a Job?</h3>
									<p>We provide online instant cash loans with quick approval </p>
									<a href="#" className="boxed-btn3">Browse Job</a>
								</div>
							</div>
							<div className="col-lg-5 offset-lg-1 col-md-6">
								<div className="searching_text">
									<h3>Looking for a Expert?</h3>
									<p>We provide online instant cash loans with quick approval </p>
									<a href="#" className="boxed-btn3">Post a Job</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* testimonial */ }
				<div className="testimonial_area  ">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section_title text-center mb-40">
									<h3>Testimonial</h3>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="testmonial_active owl-carousel">
									<div className="single_carousel">
										<div className="row">
											<div className="col-lg-11">
												<div className="single_testmonial d-flex align-items-center">
													<div className="thumb">
														<div className="quote_icon">
															<i className="Flaticon flaticon-quote"></i>
														</div>
													</div>
													<div className="info">
														<p>Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.</p>
														<span>- Micky Mouse</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="single_carousel">
										<div className="row">
											<div className="col-lg-11">
												<div className="single_testmonial d-flex align-items-center">
													<div className="thumb">

														<div className="quote_icon">
															<i className=" Flaticon flaticon-quote"></i>
														</div>
													</div>
													<div className="info">
														<p>Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.</p>
														<span>- Micky Mouse</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="single_carousel">
										<div className="row">
											<div className="col-lg-11">
												<div className="single_testmonial d-flex align-items-center">
													<div className="thumb">

														<div className="quote_icon">
															<i className="Flaticon flaticon-quote"></i>
														</div>
													</div>
													<div className="info">
														<p>Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.</p>
														<span>- Micky Mouse</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>

		</>
	)
}

// static props
export const getStaticProps = async () =>
{
	return {
		props: {
			title: 'Home Page'
		},
	};

};