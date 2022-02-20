import Card from "../Card";

import "./List.css";

const List = ({ list }) => {
  return (
    <div className="list">
      {list.map(({ token_id, name, traits, image_url }) => {
        const price = traits[0]?.value;

        return (
          <Card
            key={token_id}
            id={token_id}
            name={name}
            price={price}
            image={image_url}
          />
        );
      })}
    </div>
  );
};

export default List;
