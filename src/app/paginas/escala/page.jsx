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
            <p className='text-[#5D1614] text-[1.3rem] font-semibold text-center pt-10'>Escala da Semana</p>
        </div>

        <div>
            <div className='pl-5 pt-5'>
                <p className='text-[#5D1614]'>Sabádo</p>
                <div className='bg-[#5D1614] py-[0.10rem] px-1 w-[7rem]'></div>
            </div>

            <div>
                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Teste</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 2</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 3</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 4</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 5</p>
                </div>
            </div>

            <div className='pl-5 pt-5'>
                <p className='text-[#5D1614]'>Domingo 9:00</p>
                <div className='bg-[#5D1614] py-[0.10rem] px-1 w-[9rem]'></div>
            </div>

            <div>
                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 1</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 2</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 3</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 4</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 5</p>
                </div>
            </div>

            <div className='pl-5 pt-5'>
                <p className='text-[#5D1614]'>Domingo 17:00</p>
                <div className='bg-[#5D1614] py-[0.10rem] px-1 w-[9rem]'></div>
            </div>

            <div>
                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 1</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 2</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 3</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 4</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 5</p>
                </div>
            </div>

            <div className='pl-5 pt-5'>
                <p className='text-[#5D1614]'>Domingo 19:00</p>
                <div className='bg-[#5D1614] py-[0.10rem] px-1 w-[9rem]'></div>
            </div>

            <div className='pb-5'>
                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 1</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 2</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 3</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 4</p>
                </div>

                <div className='pl-5 pt-2'>
                    <p className='text-[#5D1614] border border-[#5D1614] py-2 px-3 w-[15rem] rounded-[9px]'>Nome 5</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Page