import Section from "./Section";
import Heading from "./Heading";

export default function ContextLearn() {
    return (
        <>
            <Section >
                <Post children={"My Post"}/>
                <Section>
                    <Post> Second Post</Post>
                </Section>
            </Section>
            </>
    )
}
function RecentPosts() {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post
                title="Flavors of Lisbon"
                body="...those pastéis de nata!"
            />
            <Post
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </Section>
    );
}

const Post = ({children}) => {
    return (
        <div className={"border-2 border-gray-200 w-1/4 p-4"}>
            <Heading>{children}</Heading>
            <p className={"pl-1"}>Post body</p>
        </div>
    )
}