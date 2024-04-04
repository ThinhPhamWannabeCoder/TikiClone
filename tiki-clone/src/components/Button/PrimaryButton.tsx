// submit button ,...
interface propsType{
    class?: string,
    name: string,
    fnc?: ()=> void,

}
export default function PrimaryButton(prop: propsType){
    return(
        <button 
                className={`bg-red-500 w-full text-white py-2 rounded-md ${prop.class}`}
                // onClick={buttonHandler}
        >
                {prop.name}
        </button>
    )
}