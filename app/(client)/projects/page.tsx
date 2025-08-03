import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <h1 className="text-center">功能开发中...</h1>
      <Image
        src="/feature-not-available.svg"
        alt=""
        width={1000}
        height={1000}
      />
    </div>
  )
}
