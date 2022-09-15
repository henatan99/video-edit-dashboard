import Table from "../../src/components/organisms/table"
import data from "../../src/data/data";

const DataTable = () => {
    const clickhandler = name => console.log("delete", name);
    return (
        <div>
            <h2>
                Data Table
            </h2>
            <Table data={data} click={clickhandler}/>
        </div>
    )
}

export default DataTable;