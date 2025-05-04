'use client';

import React from 'react'
import { Poppins} from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // especifique os pesos desejados
});

const Page = () => {
  const router = useRouter()

  return (
    <div className={poppins.className}>
      <div className='bg-[#F9F9F9] w-full min-h-screen'>
        <div className='flex justify-center items-center pt-[1rem]'>
          <Image
            src="/logo.svg"
            width={150}
            height={152}
            alt="Picture of the author"
          />
        </div>

        <div>
          <p className='text-[#5D1614] font-semibold text-center text-[1.3rem] pt-2'>CoroinhaApp</p>
        </div>

        <div className='flex justify-center items-center pb-2 pt-10'>
            <button className='bg-[#5D1614] py-2 px-9 rounded-[9px]' onClick={() => router.push('/paginas/escala')}>Escala da Semana</button>
        </div>

        <div className='flex justify-center items-center gap-2'>
            <div>
                <button className='bg-[#5D1614] py-2 px-3 rounded-[9px]' onClick={() => router.push('/paginas/avisos')}>Avisos</button>
            </div>

            <div>
                <button className='bg-[#5D1614] py-2 px-3 rounded-[9px]' onClick={() => router.push('/paginas/justificarFalta')}>Justificar Falta</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page