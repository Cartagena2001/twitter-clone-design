import React from "react";
import Twitts from "./Twitts";
import dbcoments from "../db";

console.log(dbcoments);

const Content = () => {
  return (
    <section>
      {dbcoments.map(
        (
          { img, name, user, hour, desc, picture, coments, likes, share },
          index
        ) => (
          <article key={index}>
            <Twitts
              perfil={img}
              name={name}
              arroba={user}
              hour={hour}
              desc={desc}
              picture={picture}
              coments={coments}
              likes={likes}
              share={share}
            />
          </article>
        )
      )}
    </section>
  );
};

export default Content;
