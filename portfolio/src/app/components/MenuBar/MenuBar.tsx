'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FiX, FiMenu } from 'react-icons/fi'

export default function MenuBar(){
   const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const handleNavigate = (path: string) => {
		setIsOpen(false) // Close the menu after click (on mobile)
		router.push(path)
	}

    return(
        <nav className="bg-white md:bg-blue-600 p-4 relative z-50">
			{/* Burger icon (visible on small screens) */}
			<div className="md:hidden flex justify-end">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="p-2"
					aria-label="Toggle menu"
				>
					{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
				</button>
			</div>

			{/* Menu items */}
			<div
				className={`${
					isOpen ? 'flex' : 'hidden'
				} flex-col md:flex md:flex-row md:text-amber-50 md:items-center md:justify-center gap-4 mt-4 md:mt-0`}
			>
				<button onClick={() => handleNavigate('/')}>Hjem</button>
				<button onClick={() => handleNavigate('/portfolio')}>Portfolio</button>
				<button onClick={() => handleNavigate('/om')}>Om mig</button>
				<button onClick={() => handleNavigate('/kontakt')}>Kontakt</button>
			</div>
		</nav>
    )
}