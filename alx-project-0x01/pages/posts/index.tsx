import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC<PostProps[]> = ({ posts }) => {
    console.log("posts:",posts);
    return (
        <div className="flex flex-col h-screen"  >
            <Header />
            <main className="p-4">
                <div className="flexjustify-between">
                    <h1 className="text-2xl font-semibold">Post Content</h1>
                    <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {posts?.map(({title, body, userId, id}: PostProps, key: number) => (
                        <PostCard title={title} body={body} userId={userId} id={id} key={key} />
                        ))
                    }
                </div>
            </main>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return {
        props: { posts }
    }
}

export default Posts;
