'use client'

import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Page = () => {

  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch('https://formsubmit.co/ajax/guilhermetrutaa@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      })
      setModalVisible(true)
      form.reset()
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return (
    <div className={poppins.className}>
      <div className='bg-[#F9F9F9] w-full min-h-screen'>
        <div className='flex justify-center items-center pt-[1rem]'>
          <Image src="/logo.svg" width={150} height={152} alt="Logo" />
        </div>

        <p className='text-[#5D1614] font-semibold text-center text-[1.3rem] pt-2'>CoroinhaApp</p>

        <div className='flex justify-center items-center pb-2 pt-2'>
          <button className='bg-[#F9F9F9] border border-[#5D1614] text-[#5D1614] py-2 px-4 rounded-[9px]' onClick={() => router.push('/paginas/home')}>
            Voltar tela inicial
          </button>
        </div>

        <p className='text-[#5D1614] text-[1.3rem] font-semibold text-center pt-10'>Justificar Falta</p>

        <form onSubmit={handleSubmit} noValidate className='pt-3'>
          <input type="hidden" name="_captcha" value="false" />

          <div className='pb-2 flex justify-center items-center'>
            <input
              type="text"
              name="nome"
              placeholder='Nome'
              required
              className='border-2 text-[#5D1614] border-[#5D1614] w-[15rem] h-[2.5rem] p-2 rounded-[9px]'
            />
          </div>

          <div className='pb-2 flex justify-center items-center'>
            <input
              type="text"
              name="missa"
              placeholder='Missa que iria servir'
              required
              className='border-2 text-[#5D1614] border-[#5D1614] w-[15rem] h-[2.5rem] p-2 rounded-[9px]'
            />
          </div>

          <div className='pb-2 flex justify-center items-center'>
            <input
              type="text"
              name="justificativa"
              placeholder='Justificativa'
              required
              className='border-2 text-[#5D1614] border-[#5D1614] w-[15rem] h-[2.5rem] p-2 rounded-[9px]'
            />
          </div>

          <div className='flex justify-center items-center pt-3'>
            <button
              type='submit'
              className='bg-[#5D1614] text-white w-[10rem] h-[2.5rem] rounded-[10px]'
            >
              Enviar
            </button>
          </div>
        </form>

        {modalVisible && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white p-6 rounded-[12px] shadow-lg text-center'>
              <p className='text-[#5D1614] font-semibold text-lg'>Justificativa enviada com sucesso!</p>
              <button
                onClick={() => setModalVisible(false)}
                className='mt-4 bg-[#5D1614] text-white px-4 py-2 rounded-[8px]'
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page