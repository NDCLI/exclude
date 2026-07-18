import { useEffect, useState } from 'react'
import { usePostHog } from 'posthog-js/react'

function App() {
  const posthog = usePostHog()
  const [isRedirecting, setIsRedirecting] = useState(false)

  const performRedirect = () => {
    if (!isRedirecting) {
      setIsRedirecting(true)
      window.location.href = "https://cvattool.vercel.app/"
    }
  }

  useEffect(() => {
    let timer: number | undefined;
    
    // Nếu posthog có sẵn và được khởi tạo
    if (posthog) {
      posthog.capture('redirect_page_viewed')
      timer = window.setTimeout(performRedirect, 1500)
    } else {
      // Fallback nếu posthog không load được (ví dụ do adblock)
      timer = window.setTimeout(performRedirect, 3500)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [posthog, isRedirecting])

  return (
    <>
      <div className="loader"></div>
      <h1>Trang web đã chuyển địa chỉ!</h1>
      <p>Đang chuyển hướng.</p>
      <a 
        href="https://cvattool.vercel.app/" 
        className="redirect-btn"
        onClick={(e) => { 
          e.preventDefault(); 
          performRedirect(); 
        }}
      >
        Đến ngay
      </a>
    </>
  )
}

export default App
