"use client"
import React, { useState } from 'react';
import { useEditor, EditorContent, useCurrentEditor, EditorProvider, getTextContentFromNodes, generateHTML } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline';
import parse from 'html-react-parser';
import { GoBold } from "react-icons/go";
import { BiItalic, BiUnderline } from "react-icons/bi";
import { CgChevronDoubleRight } from "react-icons/cg"
import "./TipTap.module.css"
import Image from 'next/image';
import user from "../../../../public/user/ant.jpg"
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { LiaShareSolid } from "react-icons/lia";
import { BsSend } from "react-icons/bs";
import HardBreak from '@tiptap/extension-hard-break';
import Paragraph from '@tiptap/extension-paragraph';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import { RiBardFill } from 'react-icons/ri';
import OpenAI from 'openai';



const MenuBar = ({editor}:any) => {
  // const [selected, setText] = useState('')
  const [warning, setWarning] = useState('')
  const [AIText, setAIText] = useState('')
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false)
  
  if (!editor) {
    return null
  }
  
  const { view, state } = editor           
  const { from, to } = view.state.selection
  const text =  state.doc.textBetween(from, to, '');

  
  const handle = async()=>{

    setAIText('')
    if(!text){
      setWarning('Please select a topic')
    }
    else{
      setWarning('')
      setLoading(true);
      const openai: any = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true
    });

    const response: any = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "user",
                "content": `write 5 sentence about ${text} without numbering the sentence`
            },

        ],
        temperature: 1,
        max_tokens: 96,
        top_p: 1,
    });
    const result: any = await response.choices[0].message;
    setAIText(result.content);
    setLoading(false)
    setPreview(true);
    }
  }

  const handleColse = () => {
    setPreview(false);
  }
  const setClipBoard = async() => {
    if(AIText){
      await window.navigator.clipboard.writeText(AIText);
      handleColse();
    }
  }

  return (<>
    <div className={preview? 'absolute border -top-2 left-0 bottom-0 z-50 content-center w-1/2 h-[100vh]':'hidden'} >
                
                <div className="flex items-center justify-center mt-24">
                 <div className="bg-white rounded-md" style={{height:500 +"px"}}>
                     {AIText &&<>
                      <p className='text-left p-5 '>{AIText}</p>
                     </> }
                     <div className="flex justify-evenly mb-5">
                     <button onClick={setClipBoard} className="px-4 py-2 mt-4 mr-5 w-1/3 text-white bg-main hover:bg-blue-500">Copy</button>
                     <button onClick={handleColse} className="px-4 py-2 mt-4 w-1/3 text-white bg-main hover:bg-blue-500">Close</button>
                     </div>
                 </div>
                 </div>
                 
             </div>
    <div className='border-b'>
      
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <GoBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <BiItalic/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleUnderline()
            .run()
        }
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <BiUnderline/>
      </button>
      <button onClick={handle} className='text-red-500 text-md ps-5' title='Generate AI Text'><span className='text-main inline-block pe-2'><RiBardFill /></span><span className='inline-block pb-1'>{warning && warning}</span></button>

      {loading && <button type="button" className="ms-5" disabled>
      <span className="loading loading-spinner text-primary"></span>
      </button>
      }

    </div>
    </>
  )
}

const WritePost = () => {
  const [html, setHteml] = useState(`<p>Superpost is your post solution</p><p>let's see some inside:</p>
  <p><b>1. Write Post</b></p><p><b>2. Carousel Maker</b></p><p><b>3. Idea Generator</b></p>
  <p>Now let's work together to grow your business 🙂</p>
  `);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Document, 
      Paragraph, 
      Text, 
      HardBreak
    ],
    content: `<p>Superpost is your post solution</p>
    <p>let's see some inside:</p>
    <br>
    <p><b>1. Write Post</b></p>
    <p><b>2. Carousel Maker</b></p>
    <p><b>3. Idea Generator</b></p>
    <br>
    <p>Now let's work together to grow your business 🙂</p>
    `,
    onUpdate: ({editor})=>{
      
        const html = editor.getHTML();
        setHteml(html);
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto p-2 focus:outline-none min-h-72 ',
        placeholder:'Write here',
      },
    },
    
  });
  
  

  return (
    <div className='mt-24 relative'>
      <div className='flex justify-start max-md:hidden text-2xl font-semibold w-full p-2'>
          <p className='w-1/2'>Write Post</p>
          <p className='ms-5'>Post Preview</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className='border p-2'>
            <MenuBar editor={editor}></MenuBar>
            <EditorContent className='min-h-72' editor={editor}></EditorContent>
            <div className='md:absolute md:bottom-0 md:w-[46%]'>
              <div className='flex justify-between p-2 border-t' >
                <button className='px-4 py-2 rounded-full border hover:text-main'>Save as draft</button>
                <button className='px-4 py-2 rounded-full border flex justify-center items-center text-white bg-main hover:bg-blue-500'><p className='block me-1'>Publish</p> <span className='block'><CgChevronDoubleRight/></span></button>
              </div>
            </div>
        </div>
        <div>
          <div className="transition-all duration-200 overflow-hidden  bg-white border border-gray-200 shadow-xs break-inside-avoid-column rounded-xl hover:shadow-md hover:-translate-y-1">
                <div className="px-4 py-5 space-y-6 sm:p-6">
                    <div className="flex items-center gap-3">
                        <span className="relative inline-block shrink-0">
                            <Image className="object-cover w-10 h-10 bg-gray-300 rounded-full" src={user}alt="user" />
                            <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#1052B8] inline-flex items-center justify-center rounded-full ring-2 ring-white text-white">in</span>
                        </span>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">Khaled Mahmud</p>
                            <p className="text-xs font-normal text-gray-500 truncate">Published on 28/5/2023</p>
                        </div>
                    </div>
                    <div className='whitespace-pre-wrap max-h-80 overflow-hidden empty:backdrop' >
                    
                        {/* <textarea readOnly rows={10} value={`${parse(html).toString()}`} className="resize-none block w-full h-full p-0 text-gray-900 border-none appearance-none resize-y placeholder:text-gray-500 focus:ring-0 caret-blue-500 focus:outline-none"></textarea>   */}
                        {parse(html.replaceAll('<p></p>','<br>'))}
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center justify-start gap-2">
                        <img className="w-auto h-5" src="https://ckfwvufqcepsjlnnrzqi.supabase.co/storage/v1/object/public/company//icon-reactions.svg" alt=""/>
                            <span className="text-sm font-medium text-gray-500">1877</span>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <span className="text-sm font-medium text-gray-500">226 comments</span>
                        </div>
                    </div>
                    <div className='text-base flex pt-2 items-center justify-between border-t'>
                      <p className=''><span className='inline-block me-2'><BiLike /></span>like</p>
                      <p className=''><span className='inline-block me-2'><FaRegCommentDots /></span>comment</p>
                      <p className=''><span className='inline-block me-2'><LiaShareSolid /></span>share</p>
                      <p className=''><span className='inline-block me-2'><BsSend /></span>send</p>
                      
                    </div>
                </div>
            </div>
            </div>
      </div>

    </div>
  );
};

export default WritePost;