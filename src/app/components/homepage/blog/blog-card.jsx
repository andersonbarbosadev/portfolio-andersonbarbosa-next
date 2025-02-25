// @flow strict
import { timeConverter } from "@/utils/time-converter"
import Image from "next/image"
import Link from "next/link"
import { FaCommentAlt } from "react-icons/fa"

function BlogCard({ blog }) {
  return (
    <div className="group relative rounded-lg border border-[#1d293a] bg-[#1b203e] transition-all duration-500 hover:border-[#464c6a]">
      <div className="h-44 w-auto cursor-pointer overflow-hidden rounded-t-lg lg:h-52">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1900}
          alt=""
          className="h-full w-full transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col p-2 sm:p-3">
        <div className="flex items-center justify-between text-sm text-indigo-300">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>
        <Link target="_blank" href={blog.url}>
          <p className="my-2 cursor-pointer text-lg font-medium text-white hover:text-violet-500 sm:text-xl lg:my-3">
            {blog.title}
          </p>
        </Link>

        <p className="line-clamp-3 pb-3 text-sm text-[#d3d8e8] lg:pb-6 lg:text-base">{blog.description}</p>
      </div>
    </div>
  )
}

export default BlogCard
