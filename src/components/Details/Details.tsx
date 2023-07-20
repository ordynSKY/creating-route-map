import React, { FC } from "react";

interface IDetails {
  active: boolean;
}

const Details: FC<IDetails> = ({ active }) => {
  return (
    <>
      {active ? (
        <div style={active ? { marginLeft: 20 } : { display: "none" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2645.6028426167713!2d35.04702845275926!3d48.464149312688455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1689619435168!5m2!1sru!2sua"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <div
          style={{
            width: 600,
            height: 450,
            marginLeft: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="/arrows.svg"
            alt=""
            style={{
              width: 100,
              marginRight: 15,
              marginBottom: 20,
            }}
          />
          Select any path
        </div>
      )}
    </>
  );
};

export default Details;
