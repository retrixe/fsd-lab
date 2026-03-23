function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <div>
        <img
          src='https://github.com/retrixe.png'
          style={{ borderRadius: '100%' }}
          alt='Ibrahim Ansari'
          width='150'
          height='150'
        />
      </div>
      <div>
        <h1>Ibrahim Ansari</h1>
        <p>
          Software Developer @ <a href='https://retrixe.xyz'>https://retrixe.xyz</a>
        </p>
        <p>
          E-mail: <a href='mailto:contact@retrixe.xyz'>contact@retrixe.xyz</a>
        </p>
        <p>Pune, India</p>
      </div>
    </header>
  )
}

export default Header
