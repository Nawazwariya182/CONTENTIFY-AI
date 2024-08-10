import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
interface props{
  aioutput:string
}
function outputSection({aioutput}:props) {
  const editorRef:any = useRef();
  useEffect(()=>{
    const editorinstance = editorRef.current.getInstance()
    editorinstance.setMarkdown(aioutput);
  },[aioutput])
  return (
    <div className='bg-secondary shadow-lg border font-p'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-bold text-primary'>Your result</h2>
        <Button className='bg-primary text-white hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all flex gap-2'
        onClick={()=>navigator.clipboard.writeText(aioutput)}><Copy className='w-4 h-4'/>Copy</Button>
      </div>
      <div className='font-p'>
        <Editor
        ref={editorRef}
        initialValue="Your Result Will Appear Here!"
        height="450px"
        initialEditType="wysiwyg"
        
        useCommandShortcut={true}
        />
      </div>
    </div>
  )
}

export default outputSection