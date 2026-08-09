"use client"

import Image from 'next/image'
import { LinkText } from './link-text'
import { Mail, Github, Instagram } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import { Icons } from './icons'

export function Hero() {
    const [showCopied, setShowCopied] = useState(false)
    const [decimalAge, setDecimalAge] = useState(0)
    const [isHovering, setIsHovering] = useState(false)

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault()
        navigator.clipboard.writeText('yb@yashbhardwaj.com')
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
    }

    const data = {
        name: 'Sajjad',
        description: 'I design and build digital products.',
        bio: 'I am a product designer and developer with a passion for creating intuitive and engaging user experiences. I have a strong background in both design and development, which allows me to bridge the gap between the two disciplines and create products that are both visually appealing and highly functional.',
        birthYear: 2000,
    }

    // Memoize birth timestamp to avoid recalculating
    const birthTime = useMemo(() => new Date(`${data.birthYear}-08-19T00:00:00`).getTime(), [data.birthYear])

    useEffect(() => {
        if (!isHovering) {
            // Calculate simple integer age once when not hovering
            const today = new Date()
            let age = today.getFullYear() - data.birthYear
            const m = today.getMonth() - 7 // August = month 7 (0-indexed)
            if (m < 0 || (m === 0 && today.getDate() < 19)) {
                age--
            }
            setDecimalAge(age)
            return
        }

        // When hovering, calculate and update decimal age
        const calculateDecimalAge = () => {
            const currentTime = Date.now()
            const ageInMilliseconds = currentTime - birthTime
            const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
            setDecimalAge(ageInYears)
        }

        calculateDecimalAge()
        const interval = setInterval(calculateDecimalAge, 100)
        return () => clearInterval(interval)
    }, [isHovering, birthTime])

    const age = Math.floor(decimalAge)

    return (
        <div className="mx-auto w-full max-w-[1084px] px-4 py-8 md:grid md:grid-cols-12 md:gap-5 md:px-0 md:py-16">
            {/* One column gap at start - desktop only */}
            <div className="hidden md:block md:col-span-1" />

            {/* Mobile layout */}
            <div className="flex flex-col md:hidden gap-8">
                {/* Two-column layout for intro section on mobile */}
                <div className="flex flex-row gap-4 items-start">
                    {/* Welcome paragraph - 75% width */}
                    <div className="w-3/4">
                        <p className="text-base text-gray-600">
                    Hello! I&apos;m Sajjad, a Database Editor with a passion for
                    data quality, process improvement, and automation. I use this
                    space to showcase my professional journey, projects, and the
                    solutions I&apos;ve built to make operations more efficient.
                </p>
                    </div>

                    {/* Image - 25% width */}
                    <div className="w-1/4 aspect-square relative">
                        <Image
                            src="https://avatars.githubusercontent.com/u/53792139?v=4"
                            alt="Sajjad Shaikh"
                            fill
                            sizes="25vw"
                            className="rounded-lg object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Rest of mobile content */}
                <div className="space-y-8">
                    {/* Summary section */}
                    <div className="space-y-4">
                        <h2 className="text-sm font-medium uppercase text-gray-400">Summary</h2>
                        <ul className="list-disc space-y-2 pl-4 text-gray-600 [&>li::marker]:text-gray-300">
                            <li>
                            <span className="flex items-center gap-2">
                                Currently I&apos;m working at{' '}
                                {/* <LinkText
                                variant="text-link"
                                text="accenture"
                                href="/projects"
                            />
                            {' '} */}
                                <LinkText
                                    variant="single-image-link"
                                    text="Accenture"
                                    href="https://www.accenture.com/ie-en"
                                    images={{ src: "/logos/accenture.png", alt: "Accenture" }}
                                />
                            </span>

                        </li>
                        <li >
                            <span className="flex items-center gap-2">
                                Previously worked at{' '}
                            <LinkText
                                variant="single-image-link"
                                text="Here"
                                href="https://www.here.com/"
                                images={{ src: "/logos/here.png", alt: "Here" }}
                                withBorder
                            />
                                </span>
                        </li>
                        <li> <span className="flex items-center gap-2">
                            I&apos;ve worked on multiple internal automation projects{' '}
                            <LinkText
                                variant="image-stack"
                                text=""
                                withBorder
                                images={[
                                    { src: "/logos/congo.png", alt: "Congo" },
                                    { src: "/logos/data-miner.png", alt: "Dataminer" },
                                    { src: "/logos/synbot.png", alt: "Synbot" },
                                ]}
                            />
                            </span>
                        </li>
                        <li> <span className="flex items-center gap-2">
                            <span
                                className="relative"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {age}
                                {isHovering ? (
                                    <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-sm text-white shadow-lg">
                                        {decimalAge.toFixed(9)}
                                    </div>
                                ) : null}
                            </span>{' '}
                            years old, based in Bombay
                            </span>
                        </li>
                        <li>
                            Specialized in database management, data validation, content enrichment, and maintaining high-quality digital data.
                        </li>
                        <li> <span className="flex items-center gap-2">
                            I write blogs, you can read them here{' '}
                            <LinkText
                                text="Writing"
                                variant="single-image-link"
                                href="https://sajjadshaikh.vercel.app/writing"
                                images={{ src: "/avatar.png", alt: "Writing" }}
                                withBorder
                            />
                            </span>
                        </li>
                        </ul>
                    </div>

                    {/* Social and Music section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 w-full">
                            <a
                                href="mailto:yb@yashbhardwaj.com"
                                onClick={handleEmailClick}
                                className="group relative text-gray-400 hover:text-gray-600"
                            >
                                <Mail className="h-5 w-5" />
                                {showCopied && (
                                    <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                                        Copied
                                    </div>
                                )}
                            </a>
                            <a
                                href="https://x.com/ybhrdwj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <Icons.x className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com/ybhrdwj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com/ybhrdwj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <Github className="h-5 w-5" />
                            </a>

                            {/* Divider */}
                            {/* <div className="h-4 w-px bg-gray-200" /> */}

                            {/* Music section - inline with social icons */}
                            {/* <div className="group flex items-center gap-2 text-gray-600 flex-1 min-w-0">
                                <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
                                    <div className="overflow-hidden rounded-full flex-shrink-0">
                                        <Image
                                            src="/cd.png"
                                            alt="Album Art"
                                            width={24}
                                            height={24}
                                            className="animate-[spin_3s_linear_infinite_paused] group-hover:animate-[spin_3s_linear_infinite]"
                                        />
                                    </div>
                                    <span className="text-sm">
                                        ♪ Listening to{' '}
                                        <span className="inline-flex max-w-[80px] sm:max-w-none overflow-hidden">
                                            <LinkText
                                                variant="text-link"
                                                text="Dissolve"
                                                href="https://www.youtube.com/watch?v=xe2FPP4lX14"
                                            />
                                            <span className="truncate"> by Absafacto</span>
                                        </span>
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop layout - Main content - 7 columns */}
            <div className="hidden md:block md:col-span-7 space-y-12">
                {/* Welcome paragraph */}
                <p className="text-base text-gray-600">
                    Hello! I&apos;m Sajjad, a Database Editor with a passion for
                    data quality, process improvement, and automation. I use this
                    space to showcase my professional journey, projects, and the
                    solutions I&apos;ve built to make operations more efficient.
                </p>

                {/* Summary section */}
                <div className="space-y-4">
                    <h2 className="text-sm font-medium uppercase text-gray-400">Summary</h2>
                    <ul className="list-disc space-y-2 pl-4 text-gray-600 [&>li::marker]:text-gray-300">
                        <li>
                            <span className="flex items-center gap-2">
                                Currently I&apos;m working at{' '}
                                {/* <LinkText
                                variant="text-link"
                                text="accenture"
                                href="/projects"
                            />
                            {' '} */}
                                <LinkText
                                    variant="single-image-link"
                                    text="Accenture"
                                    href="https://www.accenture.com/ie-en"
                                    images={{ src: "/logos/accenture.png", alt: "Accenture" }}
                                />
                            </span>

                        </li>
                        <li >
                            <span className="flex items-center gap-2">
                                Previously worked at{' '}
                            <LinkText
                                variant="single-image-link"
                                text="Here"
                                href="https://www.here.com/"
                                images={{ src: "/logos/here.png", alt: "Here" }}
                                withBorder
                            />
                                </span>
                        </li>
                        <li> <span className="flex items-center gap-2">
                            I&apos;ve worked on multiple internal automation projects{' '}
                            <LinkText
                                variant="image-stack"
                                text=""
                                withBorder
                                images={[
                                    { src: "/logos/congo.png", alt: "Congo" },
                                    { src: "/logos/data-miner.png", alt: "Dataminer" },
                                    { src: "/logos/synbot.png", alt: "Synbot" },
                                ]}
                            />
                            </span>
                        </li>
                        <li> <span className="flex items-center gap-2">
                            <span
                                className="relative"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {age}
                                {isHovering ? (
                                    <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-sm text-white shadow-lg">
                                        {decimalAge.toFixed(9)}
                                    </div>
                                ) : null}
                            </span>{' '}
                            years old, based in Bombay
                            </span>
                        </li>
                        <li>
                            Specialized in database management, data validation, content enrichment, and maintaining high-quality digital data.
                        </li>
                        <li> <span className="flex items-center gap-2">
                            I write blogs, you can read them here{' '}
                            <LinkText
                                text="Writing"
                                variant="single-image-link"
                                href="https://sajjadshaikh.vercel.app/writing"
                                images={{ src: "/avatar.png", alt: "Writing" }}
                                withBorder
                            />
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Social and Music section */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:yb@yashbhardwaj.com"
                            onClick={handleEmailClick}
                            className="group relative text-gray-400 hover:text-gray-600"
                        >
                            <Mail className="h-5 w-5" />
                            {showCopied ? (
                                <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                                    Copied
                                </div>
                            ) : null}
                        </a>
                        <a
                            href="https://x.com/ybhrdwj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <Icons.x className="h-5 w-5" />
                        </a>
                        <a
                            href="https://instagram.com/ybhrdwj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com/ybhrdwj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    </div>

                    {/* Divider */}
                    {/* <div className="h-4 w-px bg-gray-200" /> */}

                    {/* Music section */}
                    {/* <div className="group flex items-center gap-2 text-gray-600">
                        <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
                            <div className="overflow-hidden rounded-full flex-shrink-0">
                                <Image
                                    src="/cd.png"
                                    alt="Album Art"
                                    width={24}
                                    height={24}
                                    className="animate-[spin_3s_linear_infinite_paused] group-hover:animate-[spin_3s_linear_infinite]"
                                />
                            </div>
                            <span className="text-sm">
                                ♪ Listening to{' '}
                                <LinkText
                                    variant="text-link"
                                    text="Dissolve by Absafacto"
                                    href="https://www.youtube.com/watch?v=xe2FPP4lX14"
                                />
                            </span>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Desktop Image - 3 columns */}
            <div className="hidden md:block md:col-span-3">
                <Image
                    src="https://avatars.githubusercontent.com/u/53792139?v=4"
                    alt="Yash Bhardwaj"
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 0px, 25vw"
                    className="rounded-lg"
                    priority
                />
            </div>

            {/* One column gap at end - desktop only */}
            <div className="hidden md:block md:col-span-1" />
        </div>
    )
} 