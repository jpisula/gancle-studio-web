import PostBody from 'components/post-body/PostBody';
import moment from 'moment';
import { sanityClient } from '../../sanity';

const Post = (props: any) => {
  console.log('props', props);
  if (!props.post) {
    return <h1>:</h1>;
  }
  const { title = 'Missing title', name = 'Missing name', body } = props.post;
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      <PostBody body={body} />
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && publishedAt < now()][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true
  };
}

export async function getStaticProps(context: any) {
  const { slug = '' } = context.params;
  const post = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title, 
      language->{language}, 
      seoDesc, 
      seoKeyWords, 
      mainImage, 
      author->, 
      mainImage->, 
      alt,
      postCategories[]->,
      publishedAt,
      body,
      readNext[]->[publishedAt < now()]
    }
  `,
    { slug }
  );

  if (new Date(post.publishedAt).toISOString() > moment().format()) {
    return {
      props: {
        post: false
      }
    };
  }

  return {
    props: {
      post
    }
  };
}

export default Post;
