const DynamicBook = (props:any) => {

    console.log(props)
    return (
    <h1 className="text-7xl">{props.params.id}
   
    </h1>
    )
};

export default DynamicBook;