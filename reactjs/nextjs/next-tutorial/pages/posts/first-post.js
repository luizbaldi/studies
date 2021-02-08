import Link from "next/link";

function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </>
  );
}

export default FirstPost;
