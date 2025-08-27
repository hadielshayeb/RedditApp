import Vote from '../feed/vote';

const style = {
  post: `flex flex-col space-y-1 cursor-pointer`,
  wrapper: `flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]`,
  postTitle: 'text-lg font-medium text-[#D7DADC]',
  postContent: 'text-sm font-light text-[#D7DADC]/80',
}

const Post = () => {
  return (
    <div className={style.wrapper}>
      <Vote />
    <div className={style.post}>
      <h1 className={style.postTitle}>How to Build a Reddit Clone with Next.js!!</h1>
      <p className={style.postContent}>Learn how to build a Reddit clone with Next.js</p>
    </div>
      </div>
  )
}

export default Post