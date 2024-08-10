'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_component/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'

interface PROPS {
  selectedtemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
  currentUsage: number; // Added prop for current usage
}

function FormSection({ selectedtemplate, userFormInput, loading, currentUsage }: PROPS) {
  const [formData, setFormData] = useState<any>();
  const limit = 80000;

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className='p-5 shadow-md border rounded-md font-p bg-secondary'>
      {/* @ts-ignore */}
      <Image src={selectedtemplate?.icon} alt='icon' width={60} height={60} />
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedtemplate?.name}</h2>
      <p className='text-gray-600 text-sm'>{selectedtemplate?.desc}</p>
      <form className='mt-6' onSubmit={onSubmit}>
        {selectedtemplate?.form?.map((item, index) => (
          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-medium'>{item.label}</label>
            {item.field === 'input' ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : item.field === 'textarea' ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}
        <Button
          type='submit'
          className='w-full py-6 bg-primary text-white hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all'
          disabled={loading || currentUsage > limit} // Disable button if loading or limit exceeded
        >
          {loading && <Loader2Icon className='animate-spin text-primary' />}
          Create content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
