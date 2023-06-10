import SecondaryLayout from '@/components/SecondaryLayout'
import React from 'react'
import Link from 'next/link'

export default function connectAccount(props) {
    return (
        <div className='secondary'>
            <SecondaryLayout title={ props.title }>

                {/* main page */}
                <section className="login">
                    <div className="container d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-5">
                                <h2 className='text-center'>Connect Account</h2>
                                <p className='text-center'>Connect your account with freelancer.com</p>
                                <div className="form-group">
                                    <button className='w-100 boxed-btn3 mx-auto d-block'>Connect Now</button>
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
			title: 'Connect Account'
		},
	};

};
