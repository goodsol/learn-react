import React from 'react'

const Logical = () => {
  // logic

  // 단축 평가 논리 계산법(Logical operators)
  const user = {
    isLoggedin: true, // 로그인 여부
    role: "admin" // 사용자 롤 : admin / guest / user
  }
  // 1. AND: &&
  // 관리자 페이지 접근 관리
  if (user.isLoggedin && user.role === "admin") {
    // true인 경우 실행 코드
    console.log("관리자 페이지 접근 가능!!")
  } else {
    // false인 경우 실행 코드
    console.log("관리자 페이지 접근 불가!!")
  }
  // 2. Or : ||
  // 사용자 페이지 접근 관리
  if (user.isLoggedin || user.role === "admin") {
    // true인 경우 실행 코드
    console.log("사용자 페이지 접근 가능!!")
  } else {
    // false인 경우 실행 코드
    console.log("사용자 페이지 접근 불가!!")
  }
  // 3. Not : !
  // if (!user.isLoggedin) {
  //   // true인 경우 실행 코드
  //   console.log("로그인 필요!!")
  // } else {
  //   // false인 경우 실행 코드
  //   return
  // }

  // 구조 분해 할당(Object Destructuring)
  const colors = ["red", "blue"]
  const [firstColor, secondColor] = colors 
  console.log("🚀 ~ Logical ~ firstColor:", firstColor)
  console.log("🚀 ~ Logical ~ secondColor:", secondColor)
  // 객체 구조 분해 할당
  const person = {
    name: "조은솔",
    mbti: "ESFJ"
  }
  const {mbti, name: username} = person
  console.log("🚀 ~ Logical ~ name:", username)
  console.log("🚀 ~ Logical ~ mbti:", mbti)
  // spread syntax(...) : 배열이나 객체를 복사 후 개별요소로 분해하거나 결합할 때 사용
  const copyColors = ["green", ...colors, "yellow"]
  console.log("🚀 ~ Logical ~ 원본colors:", colors)
  console.log("🚀 ~ Logical ~ copyColors:", copyColors)
  const copyPerson = {...person, isStudent: true, mbti: "ISFJ"}
  console.log("🚀 ~ Logical ~ 원본person:", person)
  console.log("🚀 ~ Logical ~ copyPerson:", copyPerson)
  
  // view
  return (
    <div>Logical</div>
  )
}

export default Logical