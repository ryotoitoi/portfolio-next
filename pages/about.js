import { getContentData } from '../lib/content';

export default function About({ contentData }) {
  return (
    <div>
      <h1>{contentData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
    </div>
  );
}

export async function getStaticProps() {
  const contentData = await getContentData('about');
  return {
    props: {
      contentData,
    },
  };
}