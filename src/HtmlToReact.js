import React, {PropTypes} from 'react';
import { DataTable } from 'react-jquery-datatables';
 


export default class HtmlToReact extends React.Component {
 

  render() {
  	var columns = [
  { title: 'Name', prop: 'name'  },
  { title: 'City', prop: 'city' },
  { title: 'Address', prop: 'address' },
  { title: 'Phone', prop: 'phone' }
];
 
var data = [
  { name: 'name value', city: 'city value', address: 'address value', phone: 'phone value' }
];
    return(
    	<div>
	      <DataTable
      keys={[ 'name', 'address' ]}
      columns={columns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />
      </div>
    );
  }
}
