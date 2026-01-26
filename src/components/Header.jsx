'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import siteLogoWhite from '../assets/site-logo-white.svg';
import siteLogoDark from '../assets/site-logo-dark.svg';
import DarkToggle from './DarkToggle';
import LoginButton from './LoginButton';
import RegisterButton from "./RegisterButton";

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Clients', href: '#clients' },
  { name: 'Features', href: '#features' },
  { name: 'Marketplace', href: '#marketplace' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Reviews', href: '#reviews' },
]

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <header className="relative lg:sticky lg:top-0 z-50 bg-white dark:bg-gray-900 dark:border-b dark:border-gray-800 shadow dark:shadow-none">
        <nav aria-label="Global" className="flex items-center justify-between lg:justify-evenly p-5 lg:py-0">
          <div className="flex">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={siteLogoWhite} alt="Site Logo" className="dark:block hidden h-12 w-auto" />
              <img src={siteLogoDark} alt="Site Logo" className="dark:hidden block h-12 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="py-7 px-5 text-sm/6 font-semibold dark:text-white dark:hover:text-gray-400 text-gray-900 hover:text-primary">
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex gap-4 items-center">     
            <LoginButton />
            <DarkToggle />
          </div>
          
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">

              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img src={siteLogoWhite} alt="Site Logo" className="dark:block hidden h-12 w-auto" />
                <img src={siteLogoDark} alt="Site Logo" className="dark:hidden block h-12 w-auto" />
              </a>

              <div className="flex items-center gap-3">
              <DarkToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white cursor-pointer"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
              </div>

            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="lg:hidden py-3">
                  <LoginButton />
                  <RegisterButton />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
    </header>

  );
}