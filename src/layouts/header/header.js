import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container, Row, Col } from 'react-bootstrap'
import AuthModal from '../../components/Auth/AuthModal'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { logout } from '@/libs/redux/reducers/authReducer'
import Image from 'next/image'

const Header = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const pathname = usePathname()
  const router = useRouter()
  const { token } = useSelector((s) => s.auth)
  const companyId = useSelector((state) => state.auth?.user?.userCompanyId)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 40
      setIsScrolled(!isTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  const handleSignupModalOpen = () => {
    setShowSignupModal(true)
    setShowLoginModal(false)
  }

  const handleLogout = () => {
    if (token) {
      router.push('/')
      setShowSignupModal(false)
      setShowLoginModal(false)
      dispatch(logout())
    } else {
      setShowSignupModal(false)
      setShowLoginModal(true)
    }
  }

  const handleLoginModal = () => {
    if (token) {
      if (companyId) {
        router.push('/dashboard')
      } else {
        router.push('/dashboard/create-company')
      }
      setShowSignupModal(false)
      setShowLoginModal(false)
    } else {
      setShowForgotPassword(false)
      setShowSignupModal(false)
      setShowLoginModal(true)
    }
  }

  return (
    <>
      <section className='main-top-navbar'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='topnavbar-box'>
                <div className='topnavbar-left'>
                  <div className='topnavbar-item'>
                    <div className='topitem-svgicon'>
                      <svg className='envalope-icon'>
                        <use xlinkHref='/assets/images/svg/icons.svg#envalopeicon'></use>
                      </svg>
                    </div>
                    <div className='toonavbar-text'>
                      <a href='mailto:info@itorchard.com' target='_black'>
                        info@itorchard.com
                      </a>
                    </div>
                  </div>
                  <span className='sperate-line'>|</span>
                  <div className='topnavbar-item'>
                    <div className='topitem-svgicon'>
                      <svg className='phoneicon-icon'>
                        <use xlinkHref='/assets/images/svg/icons.svg#phoneicon'></use>
                      </svg>
                    </div>
                    <div className='toonavbar-text'>
                      <a href='tel:+923064041221' target='_black'>
                        +92 306 404 1221
                      </a>
                    </div>
                  </div>
                </div>
                <div className='topnavbar-right'>
                  <div className='authention-topnavbar-btn'>
                    {token ? (
                      <span className='topnavbar-login-btn' onClick={handleLogout}>
                        Log Out
                      </span>
                    ) : (
                      <>
                        <span className='topnavbar-login-btn' onClick={handleLoginModal}>
                          Log In
                        </span>
                        <span className='topnavbar-signup-btn' onClick={handleSignupModalOpen}>
                          Sign Up
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section id='main-header' className={isScrolled ? 'main-header scrolled' : 'main-header'}> */}
      <section id='main-header' className='main-header'>
        <Container>
          <Row>
            <Col md={12}>
              <header className='desktop-navbar'>
                <Link href='/' className='mainlogo' aria-label='IT orchard Logo'>
                  <Image src='/assets/images/IT-OrhardLogo.png' alt='main logo' className='header-logo' width={250} height={50}/>
                </Link>

                <div className='header-main-menu'>
                  <div>
                    <div className='main-menu'>
                      <Link className={`nav-link ${pathname === '/home' ? 'active' : ''}`} href='/home'>
                        Home
                      </Link>

                      <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href='/about'>
                        About Us
                      </Link>
                      <Link className={`nav-link ${pathname === '/blog' ? 'active' : ''}`} href='/blog'>
                        Blog
                      </Link>
                      <Link className={`nav-link ${pathname === '/contact-us' ? 'active' : ''}`} href='/contact-us'>
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                {!companyId ? (
                  <button onClick={handleLoginModal} className='getlisted-btn'>
                    Get listed
                  </button>
                ) : (
                  <button onClick={handleLoginModal} className='getlisted-btn'>
                    Dashboard
                  </button>
                )}
              </header>
              <header className='mbl-navbar'>
                <div className='mbl-toggle'>
                  <div className={`menu btn15 ${isOpen ? 'open' : ''}`} onClick={toggleMenu} data-menu='15'>
                    <div className='icon'></div>
                  </div>
                </div>
                <Link href='/' className='mainlogo' aria-label='IT orchard Logo'>
                <Image src='/assets/images/IT-OrhardLogo.png'  alt='main logo' className='header-logo' width={250} height={50}/>
                </Link>
              </header>
            </Col>
          </Row>
        </Container>
        <div className={`sidebar-menu  ${isOpen ? 'active' : ''}`}>
          <div className='side-menu-box'>
            <ul>
              <li>
                <Link className={`menu-item ${pathname === '/home' ? 'active' : ''}`} href='/home'>
                  Home<i className='fa fa-angle-right'></i>
                </Link>
              </li>
              <li>
                <Link className={`menu-item ${pathname === '/about' ? 'active' : ''}`} href='/about'>
                  About Us<i className='fa fa-angle-right'></i>
                </Link>
              </li>
              <li>
                <Link className={`menu-item ${pathname === '/blog' ? 'active' : ''}`} href='/blog'>
                  Blog<i className='fa fa-angle-right'></i>
                </Link>
              </li>
              <li>
                <Link className={`menu-item ${pathname === '/contact-us' ? 'active' : ''}`} href='/contact-us'>
                  Contact Us<i className='fa fa-angle-right'></i>
                </Link>
              </li>
              <li>
                <div className='side-mbl-btn-group'>
                  {!companyId ? (
                    <button onClick={handleLoginModal} className='side-mbl-btn'>
                      Get listed
                    </button>
                  ) : (
                    <button onClick={handleLoginModal} className='side-mbl-btn'>
                      View Dashboard
                    </button>
                  )}

                  {token ? (
                    <button onClick={handleLogout} href='/company-listing' className='side-mbl-btn'>
                      Logout
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handleLoginModal()
                          setIsOpen(false)
                        }}
                        href='/company-listing'
                        className='side-mbl-btn'>
                        Login
                      </button>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <AuthModal
        handleSignupModalOpen={handleSignupModalOpen}
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
        showForgotPassword={showForgotPassword}
        setShowForgotPassword={setShowForgotPassword}
      />
    </>
  )
}

export default Header
