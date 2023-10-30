'use client'
import { Menu, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { CiUser as UserIcon } from 'react-icons/ci'
import Link from "next/link"

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

type User = {
    name: string
}

interface HeaderProfileProps {

}

export const HeaderProfile: React.FC<HeaderProfileProps> = () => {
    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <Menu.Button className="relative flex rounded-full bg-secondary-500 text-sm focus:outline-none text-white hover:text-white p-1">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <UserIcon className="h-7 w-7" aria-hidden="true" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 py-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <h1 className=" font-semibold text-center pb-1 border-b border-secondary-700">Login</h1>
                    <div className=" px-3 py-1">
                        <EmailInput />
                        <PasswordInput />
                        <div className="flex justify-end pt-2 border-t border-secondary-700">
                            <button className="text-xs text-primary hover:text-primary-900">Already have an account?</button>
                            <button type="submit" className=" border rounded-md bg-primary px-2 py-1 text-sm text-secondary hover:bg-primary-500 ">Login</button>
                        </div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

interface DropdownItemProps {
    href: string
    name: string
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, name }: DropdownItemProps) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    href={href}
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-primary-900')}
                >
                    {name}
                </Link>
            )}
        </Menu.Item>
    )
}

const EmailInput = () => {
    return (
        <div className=" py-1">
            <label htmlFor="email_login" className="text-sm font-light">Email:</label>
            <input type="text" id="email_login" name="email" placeholder="example@icloud.com" className=" w-full border border-secondary-700 rounded-sm text-sm py-[.2rem] px-2" />
        </div>
    )
}

const PasswordInput = () => {
    return (
        <div className=" py-1">
            <label htmlFor="password_login" className="text-sm font-light">Password:</label>
            <input type="password" id="password_login" name="paswword" className=" w-full border border-secondary-700 rounded-sm text-sm py-[.2rem] px-2" />
            <button className="text-xs text-primary hover:text-primary-900 pb-1">Frgot our password?</button>
        </div>
    )
}