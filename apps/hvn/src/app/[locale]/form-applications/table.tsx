'use client'

import React from 'react'

import { Button } from '@fc/ui/base/button'

import { toast } from 'sonner'

type TableProps = {
  fields: string[]
  formData: { [key: string]: string }[]
}

export const Table: React.FC<TableProps> = ({ fields, formData }) => {
  const tableRef = React.useRef<HTMLTableElement>(null)
  const [selected, setSelected] = React.useState(false)

  const handleSelectAll = () => {
    // Select and copy to clipboard
    const table = tableRef.current

    if (table) {
      setSelected(!selected)
      const rows = table.querySelectorAll('tr')
      const headers = table.querySelectorAll('th')
      const headerText = Array.from(headers)
        .map((header) => header.textContent)
        .join('\t')

      const cells = Array.from(rows).map((row) => row.querySelectorAll('td'))
      const cellsText = Array.from(cells)
        .map((cell) =>
          Array.from(cell)
            .map((c) => c.textContent)
            .join('\t'),
        )
        .join('\n')
      navigator.clipboard.writeText([headerText, cellsText].join('\n'))
    } else {
      toast.error('No table found')
    }
  }

  return (
    <div>
      <table className="w-full table-auto border-collapse border border-gray-300" ref={tableRef}>
        <thead>
          <tr>
            {fields?.map((field, index) => (
              <th className="border border-gray-300 p-2" key={index}>
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => {
            return (
              <tr className="odd:bg-gray-100" key={index}>
                {Object.values(data).map((value, index) => (
                  <td
                    className="max-w-3xs truncate border border-gray-300 px-2 py-1 whitespace-nowrap"
                    key={index}
                    title={value}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Button className="mt-4" onClick={handleSelectAll}>
        {selected ? 'Copied' : 'Copy'}
      </Button>
    </div>
  )
}
