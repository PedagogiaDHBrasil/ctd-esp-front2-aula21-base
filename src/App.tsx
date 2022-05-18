import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostList } from "./redux/post.tsx";

interface IData {
  title: string;
}

interface IPostList {
  state: string;
  post: string;
  status: string;
  data: [];
  postList: [];
}

const App = () => {
  const dispatch = useDispatch();

  let postList: IPostList;
  postList = useSelector((state: IPostList) => state.post.postList);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchPostList());
        }}
      >
        Buscar posts
      </button>

      {postList?.status === "inativo" ? (
        <p className="inativo mensagem">API status: {postList.status}</p>
      ) : null}

      {postList?.status === "carregando" ? (
        <p className="carregando mensagem">API status: {postList.status}</p>
      ) : null}

      {postList?.status === "sucesso" ? (
        <p className="sucesso mensagem">API status: {postList.status}</p>
      ) : null}

      {postList?.status === "erro" ? (
        <p className="erro mensagem">API status: {postList.status}</p>
      ) : null}

      <article>
        {postList?.status !== "carregando" &&
          postList?.data.length &&
          postList?.data.map(({ title }: IData, key: number) => (
            <h3 key={key}>
              <b>Título:</b> {title}
            </h3>
          ))}
      </article>
    </div>
  );
};

export default App;
