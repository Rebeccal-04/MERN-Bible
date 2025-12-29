import DataTable from 'react-data-table-component'
import React,{useEffect,useState} from 'react'
import Axios from 'axios'

const CustomStyles = {
	headRow:{
		style:{
			backgroundColor:"blue",
			color:"red",
			sortable:true
			
		}
	},
	headCell:{
		style:{
			fontsize:'30px',
			fontWeight:'600',
			fontTransform:'uppercase',
			justifyContent:'center',
			color:"black"
		}
	},
	cell:{
		style:{
			fontsize:'30px'
		}
	}
}

function UserTable(){
	const column = [
	{
		name:"OldTestament",
		selector: row=>row.OldTestament,
		sortable:true,
		style:{
			color:"black",
			fontSize:"12px"
		},
	}
	];
	
	const [records,setRecords] = useState([]); 
	const [filterRecords,setFilterRecords]= useState([]);
	
	useEffect(()=>{
		const fetData =()=>{
			Axios.get('http://localhost:2000/oldtestaments/OldTable')
			.then(res => {
				console.log(res)
				setRecords(res.data)
				setFilterRecords(res.data)
			})
			.catch(err=> console.log(err))	
		}
		fetData();
	},[])
	
	const handleFilter = (event) =>{
		const newData = filterRecords.filter(row=>row.OldTestament.toLowerCase()
		.includes(event.target.value.toLowerCase()))
		setRecords(newData);
	}
	return(
	<div style={{padding:'50px 10%',backgroundColor:'pink'}}>
	<div style={{display:"flex",justifyContent:'right'}}>
	<input type="text" placeholder="search.." style={{padding:"6px 10px"}} 
	onChange={handleFilter}/>
	</div>
	<DataTable
	columns = {column}
	data = {records}
	CustomStyles = {CustomStyles}
	pagination
	selectableRows
	>
	</DataTable>
	</div>
	)	
}
export default UserTable;

