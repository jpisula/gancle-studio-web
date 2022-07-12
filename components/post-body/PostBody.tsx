import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import { sanityClient } from '../../sanity';

const SampleImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={
        urlBuilder(sanityClient)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url() as string
      }
      alt={value.alt || ' '}
      loading='lazy'
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block'

        // Avoid jumping around with aspect-ratio CSS property
        // aspectRatio: width / height,
      }}
    />
  );
};

const myPortableTextComponents = {
  types: {
    image: SampleImageComponent,
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className='callToAction'>{value.text}</div>
      )
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    }
  }
};

const PostBody = ({ body }: any) => {
  return <PortableText value={body} components={myPortableTextComponents} />;
};

export default PostBody;
