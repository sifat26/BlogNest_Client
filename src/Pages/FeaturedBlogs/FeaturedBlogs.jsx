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
            OwnerName: '24',
            Image: 100,
        },
        {
            SN: 'sn2',
            Title: 'tilte2',
            OwnerName: "24",
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
            OwnerName: '24',
            Image: 102,
        },

      ]
      const columnHelper = createColumnHelper();
      const columns = [
        columnHelper.accessor('SN', {
          cell: info => info.getValue(),
          footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.Title, {
          id: 'Blog Title',
          cell: info => <i>{info.getValue()}</i>,
          header: () => <span>Blog Title</span>,
          footer: info => info.column.id,
        }),
        columnHelper.accessor('Owner Name', {
          header: () => 'Owner Name',
          cell: info => info.getValue(),
          footer: info => info.column.id,
        }),
        columnHelper.accessor('Image', {
            cell : info => info.getValue(),
          header: () => <span>Image</span>,
          footer: info => info.column.id,
        }),
      ]
const FeaturedBlogs = () => {
   

      const [data, _setData] = React.useState(() => [...defaultData])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
    return (
        <div className="p-2">
      <table>
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
                      )}
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
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
    );
};

export default FeaturedBlogs;