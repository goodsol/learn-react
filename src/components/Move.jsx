import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Move = () => {
  // logic
  const history = useNavigate() // react-router-dom v6 제공 함수
  // Home으로 이동
  const handleHome = () => {
    // React-router-dom으로 페이지 이동하는 방법2
    history("/")
  }
  // About으로 이동
  const handleAbout = () => {
    // React-router-dom으로 페이지 이동하는 방법2
    history("/about")
  }
  // view
  return (
    <div>
      <button type='button' onClick={handleHome}>Home으로 이동</button>
      <button type='button' onClick={handleAbout}>About으로 이동</button>
      {/* React-router-dom으로 페이지 이동하는 방법1 */}
      <Link to="/contact">Contact로 이동</Link>
    </div>
  )
}

export default Move