import SecondaryLayout from '@/components/SecondaryLayout'
import React from 'react'
import Link from 'next/link'

export default function signup(props) {
    return (
        <div className='secondary'>
            <SecondaryLayout title={ props.title }>

                {/* main page */}
                <section className="login">
                    <div className="container d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-5">
                                <h2 className='text-center'>Sign Up</h2>
                                <form className='mt-4'>
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder="Name" className='form-control' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email" placeholder="Email" className='form-control' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" placeholder="Password" className='form-control' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" placeholder="Confirmation Password" className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <button className='w-100 boxed-btn3 mx-auto d-block'>Sign Up</button>
                                    </div>
                                </form>
                                <div className="form-group mb-3 text-center mt-3">
                                    <Link href="/auth/login">Already have an account? Login</Link>
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
			title: 'Sign Up Page'
		},
	};

};
