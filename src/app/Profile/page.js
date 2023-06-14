const data = [
  {
    title: "Next Js",
    content: "Next Js is a framework of react js",
  },
  {
    title: "Next Js",
    content: "Next Js is a framework of react js",
  },
  {
    title: "React Js",
    content: "React Js is a library of javascript",
  },
  {
    title: "Vue Js",
    content: "Vue Js is a framework of javascript",
  },
];

const Profile = () => {
    return (
        <>
            {data.map((item)=>{
                return(
                    <>
                        <h1>{item.title}</h1>
                        <h2>{item.content}</h2>
                    </>
                )
            })}
      </>
  )
}

export default Profile