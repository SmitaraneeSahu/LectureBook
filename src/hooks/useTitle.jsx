import React, { useEffect } from 'react'

export default function useTitle(title) {
    useEffect(()=>{
        document.title= `${title} - LectureBook`;
    },[title])
    return null;
}
