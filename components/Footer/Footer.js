import React from "react";
import Link from 'next/link'
import footerStyles from '../../styles/Footer.module.css'

const Footer = () => (
    <footer className="bg-dark px-2 px-md-5">
        <div className="container-fluid">
            <div className="row text-light py-4">
                <div className="col-md-6 col-sm-6">
                    <h5 className="pb-3">Delantech</h5>
                    <p className="small">It is the policy of Delan Technologies Limited to comply with the Factory Act 1990 and subsequent legislation, and provide and maintain a healthy and safe working environment.
                    We aim to minimize the number of health & safety and environmental incidents and ultimately to achieve an incident-free working environment. We recognize and accept our duty to protect the health and safety of all visitors to the company, including sub-contractors and temporary workers, as well as any members of the public who might be affected by our operations. Our health, safety and environmental policy will be continually monitored and updated to ensure continual improvement of the management systems.
The policy will be updated at least every 12 months.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link href="https://www.facebook.com/Delantech/" passHref><span><a target="_blank" rel="noreferrer"><i className="fa fa-facebook-square text-light"></i></a></span></Link></li>
                        <li className="list-inline-item"><Link href="https://twitter.com/Delantech_" passHref><span><a target="_blank" rel="noreferrer"><i className="fa fa-twitter  text-light"></i></a></span></Link></li>
                        <li className="list-inline-item"><Link href="#" passHref><span><a target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square  text-light"></i></a></span></Link></li>
                        <li className="list-inline-item"><Link href="https://www.instagram.com/delantech/" passHref><span><a target="_blank" rel="noreferrer"><i className="fa fa-instagram  text-light"></i></a></span></Link></li>
                        <li className="list-inline-item"><Link href="/" passHref><span><a target="_blank" rel="noreferrer"><i className="fa fa-youtube text-light"></i></a></span></Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6">
                    <h5 className="pb-3">Visit Us</h5>
                    <ul className="list-unstyled">
                        <li className="m-2">
                            <span className={footerStyles.footerLink}> <i className="fa fa-home mr-2"></i> <span>TGS Plaza, Bogije Road, Lekki Express Way, Lekki Lagos.</span>
                            </span>
                        </li>
                        <li className="m-2">
                            <span className={footerStyles.footerLink}> <i className="fa fa-phone mr-2"></i> <span>+233 8162 6418 85   </span></span>
                        </li>
                        <li className="m-2">
                            <span className={footerStyles.footerLink}> <i className="fa fa-mobile mr-2"></i> <span>   +234 8060 1329 72</span></span>
                        </li>
                        <li className="m-2">
                            <Link href="mailto:info@delantech.com.ng" passHref>
                                <a className="text-info">
                                    info@delantech.com.ng
                                </a>

                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    </footer>
);

export default Footer;
