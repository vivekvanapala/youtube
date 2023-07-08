import React from 'react'
import { userlogo } from '../logo'


const Commentdata=[
    {
        name:"vivek varma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        replies:[
            {
                name:"vivek v",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                replies:[]
            },
            {
                name:"vivek va",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                replies:[]
            },
            {
                name:"vivek var",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                replies:[]
            },
        ]
    },
    {
        name:"vivek varma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        replies:[]
    },
    {
        name:"vivek varma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        replies:[]
    },
    {
        name:"vivek varma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        replies:[]
    }
]

const Helper=(props)=>{
    return(
        <div className='flex pl-3 shadow-md bg-gray-200 rounded-lg pb-2 m-3'>
            <img className='h-8 w-8' alt='user' src={userlogo}/>
            <div className='px-3'>
                <p className='font-bold'>{props.data.name}</p>
                <p>{props.data.text}</p>
            </div>
        </div>
    )

}


const Commentslist=({comments})=>{
    return comments.map((i,index)=>(
        <div>
            <Helper data={i} key={index}/>
            <div className='pl-5 border border-l-black ml-5'>
                <Commentslist comments={i.replies}/>
            </div>
        </div>
    ))
}

const Comments = () => {
    return (
      <div>
          <div className='pl-2 m-2'>
              <h1 className='font-bold text-2xl'>Comments:</h1>
              <Commentslist comments={Commentdata}/>
          </div>
      </div>
    )
  }
export default Comments