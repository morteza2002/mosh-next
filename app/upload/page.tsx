'use client'; 
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from "next-cloudinary";
interface cloudinaryResult {
    public_id: string;
}
const UploadPage = () => {
const [ publicId, setPublicId] = useState('');

    return (
        <>
        {publicId && <CldImage src={publicId} width={270} height={180} alt='morteza' />}
        <CldUploadWidget uploadPreset='uyublpku'
        options={{
            sources: ['local'],
            multiple: false,
            maxFiles: 5,
            styles:{
                palette: {
                    window: "#FFFFFF",
                    windowBorder: "#90A0B3",
                    tabIcon: "#0078FF",
                    menuIcons: "#5A616A",
                    textDark: "#000000",
                    textLight: "#FFFFFF",
                    link: "#0078FF",
                    action: "#FF620C",
                    inactiveTabIcon: "#0E2F5A",
                    error: "#F44235",
                    inProgress: "#0078FF",
                    complete: "#20B832",
                    sourceBg: "#E4EBF1"
                }
            }
        }}
       onUpload={(result, widget) => {
        if (result.event !== 'success') return;
        const info = result.info as cloudinaryResult;
        setPublicId(info.public_id);
       }} >
            {({ open }) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>}
        </CldUploadWidget>
        </>
    )
}

export default UploadPage