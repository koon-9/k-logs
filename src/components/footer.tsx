import React from 'react';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';
import { BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="k_logs" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link href={'https://github.com/koon-9'} target="blank">
          <BsGithub className="text-2xl hover:text-red-500" />
        </Link>
        <Link href={'https://www.instagram.com/tra_ce__/'} target="blank">
          <BsInstagram className="text-2xl hover:text-red-500" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        @ All rights reserved{' '}
        <Link
          href={'https://www.instagram.com/tra_ce__/'}
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @tra_ce__
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
