import React from 'react';
import { Link } from 'react-router-dom';
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
  Phone,
} from '@phosphor-icons/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-500 text-slate-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            to="https://github.com/GoyalIshaan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300"
          >
            <GithubLogo size={32} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ishaan-goyal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300"
          >
            <LinkedinLogo size={32} />
          </Link>
          <Link
            to="https://twitter.com/IshaanGoyal05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300"
          >
            <TwitterLogo size={32} />
          </Link>
          <Link
            to="mailto:goyalishaan2005@gmail.com"
            className="hover:text-slate-300"
          >
            <EnvelopeSimple size={32} />
          </Link>
        </div>
        <div className="text-lg">
          <p className="mb-2">
            <Phone className="inline-block mr-2" /> +1 (217)841-1368
          </p>
          <p>
            <EnvelopeSimple className="inline-block mr-2" />{' '}
            goyalishaan2005@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
