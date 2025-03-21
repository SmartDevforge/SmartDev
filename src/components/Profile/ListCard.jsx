
// eslint-disable-next-line react/prop-types
function ListCard({Title, Label}) {
    return (
        <li className="flex justify-between mt-3 items-end border rounded-[8px]  w-[100%]">
            <span className="text-p2 flex justify-center capitalize items-center p-3  h-[40px] ">{Label}</span>
                <span className="bg-[#F3F6F4] capitalize text-[#ACB9B8] pr-2 w-[20%] text-end  ">
                 {Title}
                </span>
        </li>
    )
}

export default ListCard