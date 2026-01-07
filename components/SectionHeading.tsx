import React from 'react'

type SectionHeadingProps = {
  title?: string
  children?: React.ReactNode
}

export default function SectionHeading({ title, children }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold inline-block">
        {children ? (
          children
        ) : (
          <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
            {title}
          </span>
        )}
      </h2>

      <div className="relative mt-2 pb-4 flex justify-center">
        <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </div>
    </div>
  )
}
