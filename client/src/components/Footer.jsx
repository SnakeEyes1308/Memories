import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook , BsInstagram , BsTwitterX , BsGithub, BsDiscord } from 'react-icons/bs'; 

export default function FooterCom() {
  return( 
  <Footer container className='border border-t-8 border-teal-500'>
  <div className='w-full max-w-7xl mx-auto'>
    <div className='grid w-full justify-between sm:flex md:flex-col-1'>
        <div className='mt-5'>
        <Link to='/' className='slef-center whitespace-nowrap text- lg
      sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white'>Memories</span>
        Blog
      </Link>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
                <Footer.Link 
                    href='https://www.linkedin.com/in/nisarg-patel-201371268/'
                    target='_balnk'
                    rel='noopener noreferrer'
                >
                    Creator
                </Footer.Link>
                <Footer.Link 
                    href='/about'
                    target='_balnk'
                    rel='noopener noreferrer'
                >
                    Memories Blog
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Follow Us' />
            <Footer.LinkGroup col>
                <Footer.Link 
                    href='https://github.com/SnakeEyes1308'
                    target='_balnk'
                    rel='noopener noreferrer'
                >
                    Github
                </Footer.Link>
                <Footer.Link 
                    href='https://discord.gg/5Sr89HJKV5'
                    target='_balnk'
                    rel='noopener noreferrer'
                >
                    Discord
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Legal' />
            <Footer.LinkGroup col>
                <Footer.Link 
                    href='#'
                    target='_balnk'
                    rel='noopener noreferrer'
                >
                    Privacy Policy
                </Footer.Link>
                <Footer.Link 
                    href='#'
                    target='_balnk'
                    rel='noopener noreferrer'
                >
                    Terms &amp; Conditions
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            
        </div>
    </div>
    <Footer.Divider />
    <div className='w-full sm:flex sm:items-center sm:justify-between'>
        <Footer.Copyright by="Memories Blog" href='#' year={new Date().getFullYear()}/>
        <div className='flex gap-3 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitterX} />
            <Footer.Icon href='https://github.com/SnakeEyes1308' icon={BsGithub} />
            <Footer.Icon href='https://discord.gg/5Sr89HJKV5' icon={BsDiscord} />
        </div>
    </div>
  </div>
  </Footer>
  );
}
