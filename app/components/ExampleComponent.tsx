import Image from 'next/image'

export default function ExampleComponent() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Example Component with Image</h1>
      <div className="relative w-full h-64">
        <Image
          src="/example-image.jpg"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="mt-4">This is an example of how to add an image to your component.</p>
    </div>
  )
}

