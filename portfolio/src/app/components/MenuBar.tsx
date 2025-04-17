'use client'

import { useRouter } from 'next/navigation'

export default function MenuBar(){
    
    const router = useRouter()
    return(
        <div>
            <button onClick={()=> router.push('/')}>
                Hjem
            </button>
            <button onClick={()=> router.push('/portfolio')}>
                Portfolio
            </button>
            <button onClick={()=> router.push('/om')}>
                Om mig
            </button>
            <button onClick={()=> router.push('/kontakt')}>
                Kontakt
            </button>
        </div>
    )
}