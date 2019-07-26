import React from 'react'

const a = (cb: any) => {
  cb()
}
// const About: React.FC = (props) => {
//   return (
//     <div>this is about</div>
//   )
// }
class About extends React.Component {

  render(){
    a(()=>{
      console.log(this, '9999')
    })
    return (
      <div>this is about</div>
    )
  }
}

export default About