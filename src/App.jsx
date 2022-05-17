import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostList } from "./redux/post.jsx";

const App = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchPostList());
        }}
      >
        Buscar posts
      </button>

      {postList.status === "inativo" ? (
        <p className="inativo mensagem">API status: {postList.status}</p>
      ) : null}

      {postList.status === "carregando" ? (
        <p className="carregando mensagem">API status: {postList.status}</p>
      ) : null}

      {postList.status === "sucesso" ? (
        <p className="sucesso mensagem">API status: {postList.status}</p>
      ) : null}

      {postList.status === "erro" ? (
        <p className="erro mensagem">API status: {postList.status}</p>
      ) : null}

      <article>
        {postList.status !== "carregando" &&
          postList.data.length &&
          postList.data.map((post, key) => (
            <h3 key={key}>
              <b>Título:</b> {post.title}
            </h3>
          ))}
      </article>
    </div>
  );
};

export default App;
