import * as React from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
//  const Person = {
//         firstName,
//         lastName,
//         age,
//         visits,
//         status,
//         progress
//       }

      var SN,Title,OwnerName,Image;
      
      const defaultData = [
        {
            SN: 'sn1',
            Title: 'tilte1',
            OwnerName: '22',
            Image: 100,
        },
        {
            SN: 'sn2`',
            Title: 'tilte2',
            OwnerName: "23",
            Image: 101,
        },
        {
            SN: 'sn3',
            Title: 'tilte3',
            OwnerName: '24',
            Image: 102,
        },
        {
            SN: 'sn4',
            Title: 'tilte4',
            OwnerName: '25',
            Image: 102,
        },

      ]
      const columnHelper = createColumnHelper();
      const columns = [
        columnHelper.accessor('SN', {
          // cell: info => info.getValue(),
          // footer: info => info.column.id,
        }),
        columnHelper.accessor("Title",
        {

        }
        //   row => row.Title, {
        //   id: 'Blog Title',
        //   cell: info => <i>{info.getValue()}</i>,
        //   header: () => <span>Blog Title</span>,
        //   footer: info => info.column.id,
        // }
      ),
        columnHelper.accessor('OwnerName', {
          // header: () => 'Owner Name',
          // cell: info => info.getValue(),
          // footer: info => info.column.id,
        }),
        columnHelper.accessor('Image', {
          //   cell : info => info.getValue(),
          // header: () => <span>Image</span>,
          // footer: info => info.column.id,
        }),
      ]
const FeaturedBlogs = () => {
   

      const [data, _setData] = React.useState(() => [...defaultData])
      React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://blognest-server.vercel.app/blogs');
            const result = await response.json();
       
            // Step 3: Sort Data in Descending Order
            const sortedData = result.sort((a, b) => b.long_description.localeCompare(a.long_description));
            console.log(sortedData);
            // Step 4: Store and Display Data
            setData(sortedData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
      }, []);
  // const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
    return (
        <div className="p-2">
      {/* <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                      }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
  
      </table> */}
      
<table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead className="bg-gray-50">
    {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th key={header.id} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                      }
            </th>
            ))}
        </tr>
         ))}
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
    {table.getRowModel().rows.map(row => (
        <tr key={row.id}>
          
            {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt=""/>
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            Jane Cooper
                        </div>
                        <div className="text-sm text-gray-500">
                            jane.cooper@example.com
                        </div>
                    </div>
                </div>
            </td>
             */}
             {row.getVisibleCells().map(cell => (
             <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
            ))}
        </tr>
 ))}
    </tbody>
</table>

    
    </div>
    );
};


export default FeaturedBlogs;