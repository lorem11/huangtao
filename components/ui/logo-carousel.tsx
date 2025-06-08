'use client'

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from 'react'
import { AnimatePresence, motion } from 'motion/react'

// Define the structure for our logo objects
interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// Utility function to randomly shuffle an array
// This is used to mix up the order of logos for a more dynamic display
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Utility function to distribute logos across multiple columns
// This ensures each column has a balanced number of logos
const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  // Distribute logos evenly across columns
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  // Ensure all columns have the same number of logos by filling shorter columns
  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

// Props for the LogoColumn component
interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

// LogoColumn component: Displays a single column of animated logos
// eslint-disable-next-line react/display-name
const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000 // Time each logo is displayed (in milliseconds)
    const columnDelay = index * 200 // Stagger the start of each column's animation
    // Calculate which logo should be displayed based on the current time
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)

    // Memoize the current logo to prevent unnecessary re-renders
    const CurrentLogo = useMemo(
      () => logos[currentIndex].img,
      [logos, currentIndex]
    )

    return (
      // Framer Motion component for the column container
      <motion.div
        className="w-24 h-14 md:w-48 md:h-24 overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }} // Start invisible and below final position
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and final position
        transition={{
          delay: index * 0.1, // Stagger the animation of each column
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        {/* AnimatePresence enables animation of components that are removed from the DOM */}
        <AnimatePresence mode="wait">
          {/* Framer Motion component for each logo */}
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            // Animation for when the logo enters
            initial={{ y: '10%', opacity: 0, filter: 'blur(8px)' }}
            // Animation for when the logo is displayed
            animate={{
              y: '0%',
              opacity: 1,
              filter: 'blur(0px)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            // Animation for when the logo exits
            exit={{
              y: '-20%',
              opacity: 0,
              filter: 'blur(6px)',
              transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className="w-20 h-20 md:w-32 md:h-32 max-w-[80%] max-h-[80%] object-contain" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

// Main LogoCarousel component
function LogoCarousel({ columnCount = 2 }: { columnCount?: number }) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  // Memoize the array of logos to prevent unnecessary re-renders
  const allLogos: Logo[] = useMemo(
    () => [
      { name: 'Nextjs', id: 1, img: NextjsIcon },
      { name: 'Tailwind', id: 2, img: TailwindCSSIcon },
      { name: 'Typescript', id: 3, img: TypeScriptIcon },
      { name: 'React', id: 4, img: ReactIcon },
    ],
    []
  )

  // Distribute logos across columns when the component mounts
  useEffect(() => {
    const distributedLogos = distributeLogos(allLogos, columnCount)
    setLogoSets(distributedLogos)
  }, [allLogos])

  // Function to update the current time (used for logo cycling)
  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  // Set up an interval to update the time every 100ms
  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  // Render the logo columns
  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    width={256}
    height={256}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill="#3178C6"
    />
    <path
      d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
      fill="#FFF"
    />
  </svg>
)

const TailwindCSSIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1429"
    width="150"
    height="150"
    {...props}
  >
    <path
      d="M480 256c-110.912 0-180.288 49.792-208 149.312 41.6-49.728 90.112-68.48 145.6-56 31.616 7.104 54.272 27.712 79.36 50.56C537.6 436.992 584.832 480 688 480c110.912 0 180.288-49.792 208-149.312-41.6 49.728-90.112 68.48-145.6 56-31.68-7.104-54.272-27.712-79.36-50.56C630.4 299.008 583.168 256 480 256zM272 480c-110.912 0-180.288 49.792-208 149.312 41.6-49.728 90.112-68.48 145.6-56 31.616 7.104 54.272 27.712 79.36 50.56C329.6 660.992 376.832 704 480 704c110.912 0 180.288-49.792 208-149.312-41.6 49.728-90.112 68.48-145.6 56-31.616-7.104-54.272-27.712-79.36-50.56C422.4 523.008 375.168 480 272 480z"
      fill="#89DDFF"
      p-id="1430"
    ></path>
  </svg>
)

const ReactIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      {...props}
    >
      <path
        d="M512 431.36c43.946667 0 79.786667 35.84 79.786667 80.64 0 42.666667-35.84 78.933333-79.786667 78.933333S432.213333 554.666667 432.213333 512c0-44.8 35.84-80.64 79.786667-80.64M314.453333 853.333333c26.88 16.213333 85.76-8.533333 153.6-72.533333-22.186667-25.173333-43.946667-52.48-64.426666-81.066667a968.533333 968.533333 0 0 1-102.4-15.36c-21.76 91.306667-13.653333 154.026667 13.226666 168.96m30.293334-244.906666l-12.373334-21.76c-4.693333 12.373333-9.386667 24.746667-12.373333 36.693333 11.52 2.56 24.32 4.693333 37.546667 6.826667l-12.8-21.76m279.04-32.426667l34.56-64-34.56-64c-12.8-22.613333-26.453333-42.666667-38.826667-62.72C561.92 384 537.6 384 512 384s-49.92 0-72.96 1.28c-12.373333 20.053333-26.026667 40.106667-38.826667 62.72L365.653333 512l34.56 64c12.8 22.613333 26.453333 42.666667 38.826667 62.72 23.04 1.28 47.36 1.28 72.96 1.28s49.92 0 72.96-1.28c12.373333-20.053333 26.026667-40.106667 38.826667-62.72M512 289.28c-8.106667 9.386667-16.64 19.2-25.173333 30.72h50.346666c-8.533333-11.52-17.066667-21.333333-25.173333-30.72m0 445.44c8.106667-9.386667 16.64-19.2 25.173333-30.72h-50.346666c8.533333 11.52 17.066667 21.333333 25.173333 30.72M709.12 170.666667c-26.453333-16.213333-85.333333 8.533333-153.173333 72.533333 22.186667 25.173333 43.946667 52.48 64.426666 81.066667 34.986667 3.413333 69.546667 8.533333 102.4 15.36 21.76-91.306667 13.653333-154.026667-13.653333-168.96m-29.866667 244.906666l12.373334 21.76c4.693333-12.373333 9.386667-24.746667 12.373333-36.693333-11.52-2.56-24.32-4.693333-37.546667-6.826667l12.8 21.76m61.866667-300.8c62.72 35.84 69.546667 130.133333 43.093333 240.213334 108.373333 32 186.453333 84.906667 186.453334 157.013333s-78.08 125.013333-186.453334 157.013333c26.453333 110.08 19.626667 204.373333-43.093333 240.213334-62.293333 35.84-147.2-5.12-229.12-83.2-81.92 78.08-166.826667 119.04-229.546667 83.2-62.293333-35.84-69.12-130.133333-42.666666-240.213334-108.373333-32-186.453333-84.906667-186.453334-157.013333s78.08-125.013333 186.453334-157.013333c-26.453333-110.08-19.626667-204.373333 42.666666-240.213334 62.72-35.84 147.626667 5.12 229.546667 83.2 81.92-78.08 166.826667-119.04 229.12-83.2M728.746667 512c14.506667 32 27.306667 64 37.973333 96.426667 89.6-26.88 139.946667-65.28 139.946667-96.426667s-50.346667-69.546667-139.946667-96.426667c-10.666667 32.426667-23.466667 64.426667-37.973333 96.426667M295.253333 512c-14.506667-32-27.306667-64-37.973333-96.426667-89.6 26.88-139.946667 65.28-139.946667 96.426667s50.346667 69.546667 139.946667 96.426667c10.666667-32.426667 23.466667-64.426667 37.973333-96.426667m384 96.426667l-12.8 21.76c13.226667-2.133333 26.026667-4.266667 37.546667-6.826667-2.986667-11.946667-7.68-24.32-12.373333-36.693333l-12.373334 21.76m-123.306666 172.373333c67.84 64 126.72 88.746667 153.173333 72.533333 27.306667-14.933333 35.413333-77.653333 13.653333-168.96-32.853333 6.826667-67.413333 11.946667-102.4 15.36-20.48 28.586667-42.24 55.893333-64.426666 81.066667M344.746667 415.573333l12.8-21.76c-13.226667 2.133333-26.026667 4.266667-37.546667 6.826667 2.986667 11.946667 7.68 24.32 12.373333 36.693333l12.373334-21.76m123.306666-172.373333C400.213333 179.2 341.333333 154.453333 314.453333 170.666667c-26.88 14.933333-34.986667 77.653333-13.226666 168.96a968.533333 968.533333 0 0 1 102.4-15.36c20.48-28.586667 42.24-55.893333 64.426666-81.066667z"
        fill="#00BCD4"
        p-id="5276"
      ></path>
    </svg>
  )
}

const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={180}
    height={180}
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_408_139"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={180}
      height={180}
    >
      <circle cx={90} cy={90} r={90} fill="black" />
    </mask>
    <g mask="url(#mask0_408_139)">
      <circle
        cx={90}
        cy={90}
        r={87}
        fill="black"
        stroke="white"
        strokeWidth={6}
      />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_408_139)"
      />
      <rect
        x={115}
        y={54}
        width={12}
        height={72}
        fill="url(#paint1_linear_408_139)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_408_139"
        x1={109}
        y1={116.5}
        x2={144.5}
        y2={160.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_408_139"
        x1={121}
        y1={54}
        x2={120.799}
        y2={106.875}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export { LogoCarousel }
export default LogoCarousel
