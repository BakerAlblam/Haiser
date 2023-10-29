"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react';
import { User } from 'lucide-react';

interface FormData {
    email: string
    marke: string
    modell: string
    erstzulassung: number
    treibstoff: string
    getriebe: string
    kilometerstand: number
    antrieb: string
    fahrzeugzustand: string
    ps: number
    plz: string
    price: number
    telefon: number,
    postort: number
  }

const Form = () => {
    const { register, handleSubmit, reset } = useForm<FormData>()

    
  

  const carBrands = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Ford' },
    { id: 3, name: 'Chevrolet' },
    { id: 4, name: 'Honda' },
    { id: 5, name: 'BMW' },
    { id: 6, name: 'Mercedes-Benz' },
    { id: 7, name: 'Audi' },
    { id: 8, name: 'Volkswagen' },
  ];

  const years = [
    { name: '2000' },
    { name: '2001' },
    { name: '2002' },
    { name: '2003' },
    { name: '2004' },
    { name: '2005' },
    { name: '2006' },
    { name: '2007' },
    { name: '2008' },
    { name: '2009' },
    { name: '2010' },
    { name: '2011' },
    { name: '2012' },
    { name: '2013' },
    { name: '2014' },
    { name: '2015' },
    { name: '2016' },
    { name: '2017' },
    { name: '2018' },
    { name: '2019' },
    { name: '2020' },
    { name: '2021' },
    { name: '2022' },
    { name: '2023' },
  ];
  const antrieb = [
    { id: 1, name: 'Allrad' },
    { id: 1, name: 'Hinterradantrieb' },
    { id: 1, name: 'Vorderradantrieb' },
  ]

  const fahrzeugzustand = [
    { id: 1, name: 'Sehr gut' },
    { id: 1, name: 'Mittlemässig' },
    { id: 1, name: 'Schlecht' },
  ]

  const onSubmit = async (FormData: FormData) => {
    try {
        await axios.post("/api/form", {
            ...FormData,
        })
        reset()
        notify()
    } catch (error) {
        
    }
  }


  return (
    <div className="">
    <div className="flex justify-center px-6 my-12">
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        <div
          className="w-full h-full bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg"
          style={{
            backgroundImage:
              "url('https://wallpaperaccess.com/full/3323518.jpg')",
          }}
        ></div>

        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h1 className="pt-4 text-4xl text-center">Auto verkaufen</h1>
          <h3 className="pt-4 text-xl text-center">
            Seit 2016 bieten wir hier direkt unkomplizierte und schnelle
            Autokäufe an. Vertrauen Sie uns, wenn Sie Ihr Auto einfach und
            reibungslos verkaufen möchten.
          </h3>

          <form className="px-4 pt-4 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 md:flex md:justify-between">
              <div className="w-full md:w-1/2 md:pr-2">
              <Select
            items={carBrands}
            id="marke"
            color="warning"
            variant="bordered"
            fullWidth
            label="Marke"
            isRequired
            {...register('marke')}
            >
            {carBrands.map((carBrand) => (
                <SelectItem key={carBrand.name} value={carBrand.name}>
                {carBrand.name}
                
                </SelectItem>
            ))}
            
            </Select>

              </div>
              <div className="w-full md:w-1/2 md:pl-2">
              <Input
              type="text"
              id="modell"
              size="md"
              isClearable
              variant="bordered"
              color="warning"
              fullWidth
              isRequired
              label="Modell"
              {...register('modell')}
            />
              </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="w-full md:w-1/2 md:pr-2">
              <Select
            items={years}
            id="erstzulassung"
            color="warning"
            variant="bordered"
            fullWidth
            label="Erstzulassung"
            isRequired
            {...register('erstzulassung')}
            >
            {years.map((year) => (
                <SelectItem key={year.name} value={year.name}>
                {year.name}
                </SelectItem>
            ))}
            
            </Select>
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
              <Input
              type="text"
              id="kilometerstand"
              size="md"
              isClearable
              variant="bordered"
              color="warning"
              fullWidth
              isRequired
              label="Aktueller Kilometerstand"
              {...register('kilometerstand')}
            />
              </div>
            </div>
            <Select
            items={antrieb}
            id="antrieb"
            color="warning"
            variant="bordered"
            fullWidth
            label="Antrieb"
            isRequired
            {...register('antrieb')}
            >
            {antrieb.map((a) => (
                <SelectItem key={a.name} value={a.name}>
                {a.name}
                </SelectItem>
            ))}
            
            </Select>
            <Select
            className='mt-3'
            items={fahrzeugzustand}
            id="fahrzeugzustand"
            color="warning"
            variant="bordered"
            fullWidth
            label="Fahrzeugzustand"
            isRequired
            {...register('fahrzeugzustand')}
            >
            {fahrzeugzustand.map((a) => (
                <SelectItem key={a.name} value={a.name}>
                {a.name}
                </SelectItem>
            ))}
            
            </Select>
            <Input
            className='mt-3'
              type="text"
              id="ps"
              size="md"
              isClearable
              variant="bordered"
              color="warning"
              fullWidth
              isRequired
              label="PS"
              {...register('ps')}
            />
             
             <div className="mb-4 md:flex md:justify-between mt-3">
              <div className="w-full md:w-1/2 md:pr-2">
              <RadioGroup
              size='sm'
      label="Treibstoff"
      {...register('getriebe')}
    >
      <Radio required value="Benzin">Benzin</Radio>
      <Radio value="Diesel">Diesel</Radio>
      <Radio value="Elektro">Elektro</Radio>
      
    </RadioGroup>

              </div>
              <div className="w-full md:w-1/2 md:pl-2">
              <RadioGroup
      label="Getriebe"
      size='sm'
    >
      <Radio value="Manuell">Manuell</Radio>
      <Radio value="Automatik">Automatik</Radio>
    </RadioGroup>
              </div>
            </div>
            <hr className="h-0.5  mx-auto rounded border-1 bg-grey-900 mt-5"  />
            <div className="mb-4 md:flex md:justify-between mt-3">
              <div className="w-full md:w-1/2 md:pr-2">
              <Input
            className='mt-3'
              type="text"
              id="telefon"
              size="md"
              isClearable
              variant="bordered"
              color="warning"
              fullWidth
              isRequired
              label="Telefon"
              {...register('telefon')}
            />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
              <Input
            className='mt-3'
              type="text"
              id="postort"
              size="md"
              isClearable
              variant="bordered"
              color="warning"
              fullWidth
              isRequired
              label="PLZ"
              {...register('plz')}
            />
              </div>
              
            </div>
            <Input
            className='my-3'
              type="email"
              id="email"
              size="md"
              isClearable
              variant="bordered"
              color="warning"
              fullWidth
              isRequired
              label="Email"
              {...register('email')}
            />
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Absenden
              </button>
              <ToastContainer position='bottom-right' />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Form
function notify() {
    throw new Error('Function not implemented.')
}

