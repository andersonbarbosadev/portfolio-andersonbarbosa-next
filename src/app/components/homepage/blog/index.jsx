"use client"

import { useMemo } from "react"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import BlogCard from "./blog-card"
import { useTranslations } from "next-intl"

function Blog() {
  // -- Hooks
  const t = useTranslations()

  // -- State Memo
  const blogs = useMemo(() => {
    return [
      {
        cover_image: "https://blog.andersonbarbosa.site/image/blog-learn.png",
        published_at: "02-04-2024",
        public_reactions_count: 0,
        comments_count: 0,
        title: t("data.blogs.title1"),
        url: "https://blog.andersonbarbosa.site/blog/plataformas-para-aprender/",
        reading_time_minutes: 4,
        description: t("data.blogs.description1"),
      },
    ]
  }, [t])

  // -- Render
  return (
    <section id="blogs" className="relative z-50 my-12 border-t border-[#25213b] lg:my-24">
      <div className="absolute top-6 left-[42%] h-[100px] w-[100px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl filter"></div>

      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white uppercase">{t("Blogs")}</span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.map((blog, i) => blog?.cover_image && <BlogCard blog={blog} key={i} />)}
      </div>

      <div className="mt-5 flex justify-center lg:mt-12">
        <Link
          className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium tracking-wider text-white uppercase no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold"
          role="button"
          href="https://blog.andersonbarbosa.site/"
          target="_blank"
        >
          <span>{t("View more")}</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default Blog
