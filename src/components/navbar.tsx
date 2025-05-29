"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  Bars3Icon,
  XMarkIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Button } from "@heroui/react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [{ name: "Overview", href: "#", current: true }]

  return (
    <nav className="bg-white border-gray-100">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center min-w-0">
            <div className="flex-shrink-0 flex items-center space-x-1.5 sm:space-x-2">
              <RocketLaunchIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              <span className="text-lg sm:text-xl font-bold text-gray-900 truncate">DashboardX</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-6 lg:ml-10">
              <div className="flex items-baseline space-x-2 lg:space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base font-bold transition-colors duration-200 whitespace-nowrap ${
                      item.current ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-4 lg:mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-8 lg:pl-10 pr-3 py-1.5 lg:py-2 border rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm lg:text-sm transition-colors duration-200 bg-gray-50 border-none text-gray-900"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Chat Button using Hero UI Button - Hidden on small screens */}
            <div className="hidden sm:block">
              <Button
                variant="light"
                className="flex items-center gap-1.5 lg:gap-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 rounded-md px-2 lg:px-3 py-1 text-sm lg:text-base"
              >
                <ChatBubbleLeftEllipsisIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="hidden lg:inline">Chat</span>
              </Button>
            </div>

            {/* Notifications */}
            <button className="p-1.5 sm:p-2 rounded-md transition-colors duration-200 text-gray-400 hover:text-gray-500 hover:bg-gray-100 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <BellIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">View notifications</span>
            </button>

            {/* Settings */}
            <button className="p-1.5 sm:p-2 rounded-md transition-colors duration-200 text-gray-400 hover:text-gray-500 hover:bg-gray-100 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Cog6ToothIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Settings</span>
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 min-w-[44px] min-h-[44px] items-center justify-center">
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                  width={32}
                  height={32}
                />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-44 sm:w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Your Profile
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Settings
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Sign out
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-md transition-colors duration-200 text-gray-400 hover:text-gray-500 hover:bg-gray-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full pl-10 pr-3 py-2.5 border rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base transition-colors duration-200 bg-white border-gray-300 text-gray-900"
                />
              </div>

              {/* Mobile Chat Button - Only visible on small screens */}
              <div className="sm:hidden mb-2">
                <Button
                  variant="light"
                  className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 rounded-md px-3 py-2 w-full justify-start text-base"
                >
                  <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                  Chat
                </Button>
              </div>

              {/* Mobile Navigation */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={` px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-200 min-h-[44px] flex items-center ${
                    item.current ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
