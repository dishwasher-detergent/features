import { Timestamp } from "./timestamp";

const Article: React.FC = () => {
  return (
    <article className="flex flex-col md:flex-row pt-6 pb-10 md:first:pt-10 md:pt-20 md:pb-20 border-b">
      <div className="flex-none w-full md:w-52">
        <Timestamp timestamp="August 21st 2024" />
      </div>
      <div className="flex-1 prose prose-img:rounded-xl">
        <div className="w-full h-96 rounded-xl bg-primary" />
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          facilis. Est velit atque animi nesciunt officiis natus incidunt
          magnam, saepe facere autem, cumque iusto, perferendis assumenda
          mollitia? Repellendus, repellat cum.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fugiat dolor sunt id voluptatibus perferendis minima et odio, quasi
          aperiam, vitae ullam, excepturi reprehenderit alias quas delectus quod
          quibusdam consectetur.
        </p>
        <h3>Changelog test</h3>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </div>
    </article>
  );
};

Article.displayName = "Article";

export { Article };
