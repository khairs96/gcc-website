import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const departments = [
  { name: 'PPSDM', description: 'Pengembangan Potensi Sumber Daya Manusia' },
  { name: 'PAKSIMA', description: 'Pengelola Kreasi Mahasiswa' },
  { name: 'HUMAS', description: 'Hubungan Masyarakat' },
  { name: 'MEDIA', description: 'Media dan Komunikasi' },
  { name: 'CONTER', description: 'Coding Center' },
  { name: 'PDK', description: 'Pusat Data dan Kesekretariatan' },
]

export const AboutDropdown: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-2 mt-1"
    >
      {departments.map((dept, index) => (
        <Link
          key={index}
          href={`/about#${dept.name.toLowerCase()}`}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 relative group"
        >
          {dept.name}
          <span className="absolute left-full ml-2 p-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {dept.description}
          </span>
        </Link>
      ))}
    </motion.div>
  )
}

