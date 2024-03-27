export default function Input(props){
  return (
    <>
      <input type='text' className='border-gray-300 rounded-sm border mb-2.5 pl-2 w-full h-14' placeholder={props.placeholder} />
    </>
  )
}