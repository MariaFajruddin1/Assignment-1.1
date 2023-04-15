import Image from "next/image";
import Link from "next/link";
import React from "react"



export default async function Home() {
  const Links = [{ id: 1, name: "Home" }, { id: 2, name: "About" }, { id: 3, name: "Course" }, { id: 4, name: "Contact" }]
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <Image src={'/Images/girl.png'} alt='Logo' width={100} height={100} />
            <h1 className="text-4xl font-bold text-yellow-700">MARIA</h1>
          </div>
          <div className="md:hidden">
            <button className="text-white  focus:outline-none">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-5 text-lg ">
              {Links.map((item) => (
                <li key={item.id}>
                  <Link href="/" className="hover:text-yellow-700 text-white size-2xl font-semibold duration-500">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <Link href='' className="text-xl border text-white rounded-full border-white p-3 bg-transparent hover:bg-yellow-700">My portfolio</Link>
          </div>
        </div>
      </nav>
      
    </>
  )
}


























