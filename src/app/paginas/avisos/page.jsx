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

        <div className='flex justify-center items-center pb-2 pt-2'>
            <button className='bg-[#F9F9F9] border border-[#5D1614] text-[#5D1614] py-2 px-4 rounded-[9px]' onClick={() => router.push('/paginas/home')}>Voltar tela inicial</button>
        </div>

        <div>
            <p className='text-[#5D1614] text-[1.3rem] font-semibold text-center pt-10'>Avisos</p>
        </div>

        <div>
            <p className='text-[#6f6f6f] text-center pt-5'>Nenhum aviso até agora.</p>
        </div>
      </div>
    </div>
  )
}

export default Page