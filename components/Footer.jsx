import React from 'react'

const Footer = () => {
  return (
  
    <footer
        style={{
          marginTop: "auto",
          padding: "2rem 0",
          fontSize: "0.9rem",
          color: "rgba(255,255,255,0.4)",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          width: "100%",
        }}
      >
        <p>© {new Date().getFullYear()} Devlfo Systems.</p>
      </footer>

  )
}

export default Footer
