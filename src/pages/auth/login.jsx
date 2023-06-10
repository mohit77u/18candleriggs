import SecondaryLayout from '@/components/SecondaryLayout'
import React from 'react'
import Link from 'next/link'

export default function login(props) {
    return (
        <div className='secondary'>
            <SecondaryLayout title={ props.title }>

                {/* main page */}
                <section className="login">
                    <div className="container d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-5">
                                <h2 className='text-center'>Login</h2>
                                <form className='mt-4'>
                                    <div className="form-group mb-3">
                                        <input type="email" placeholder="Enter Email" className='form-control' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" placeholder="Enter Password" className='form-control' />
                                    </div>
                                    <div className="form-group mb-3 text-right">
                                        <a href="#" className='text-primary'>Forgot password?</a>
                                    </div>
                                    <div className="form-group">
                                        <button className='w-100 boxed-btn3 mx-auto d-block'>Login Now</button>
                                    </div>
                                </form>
                                <div className="form-group mb-3 text-center mt-3">
                                    <Link href="/auth/signup">Don't have an account? Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SecondaryLayout>
        </div>
    )
}

// static props
export const getStaticProps = async () =>
{
	return {
		props: {
			title: 'Login Page'
		},
	};

};
