"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

type NavItem = { label:string ; href:string} 

const navItems: NavItem[] = [
  { label: "クラブ紹介", href:"#about" },
  { label: "メンバー募集", href:"#welcome" },
  { label: "主な練習日", href:"#schedule" },
  { label: "SNS", href:"#sns" },
  { label: "練習場所", href:"#place" },
  { label: "お問い合わせ", href:"#contact" },
]

export default function Header() {
  const [ open, setOpen ] = useState(false)

  useEffect(()=>{
    // メニューのスクロールを止める
    const original = document.body.style.overflow
    document.body.style = open ? "hidden" : original
    return () => {
      document.body.style.overflow = original
    }
  },[open])

  const onClickItem = (href:string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if(el) el.scrollIntoView({behavior:"smooth", block:"start"})
  }

  return (
    <header id="top" className="fixed top-0 left-0 w-full z-50 border-b bg-[#003366] text-white backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex-col">
          <div className="font-semibold flex justify-between">
            <button
            >
                            {/**ここにホームボタンを設置したい */}

              松が丘
            </button>
          </div>
          <div className="font-semibold flex justify-between">MBBC</div>
          <div className="font-normal text-xs hidden md:block border-t flex justify-start">Matsugaoka Mini BasketBall Club</div>
        </div>

        {/**PCmenu */}
        <nav className="hidden md:flex px-3 py-2 gap-6">
          {navItems.map((item)=>(
            <button
              className="hover:underline"
              key={item.href}
              onClick={() => onClickItem(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/*mobile menu*/}
        <button
          className="md:hidden px-4 py-3"
          onClick={()=>{setOpen((v)=>!v)}}
          aria-label="menu"
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>
      {/* inside mobile-menu */}
      {open && (
        <div className="md:hidden border-t bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-2"> 
            {navItems.map((item)=>(
              <button
                key={item.href}
                onClick={()=>{onClickItem(item.href)}}
                className="px-3 py-2 text-left text-black hover:bg-gray-100"
              >
                {item.label}
              </button>
            ))}

          </div>
        </div>
      )}

    </header>
  )
}

